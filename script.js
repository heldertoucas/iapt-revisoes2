

// --- HELPER FUNCTIONS (Hoisted) ---

function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get('mode');
    const idParam = parseInt(params.get('id'));
    
    // Validate Mode
    let mode = 'tips';
    if (['tips', 'review', 'tools'].includes(modeParam)) {
        mode = modeParam;
    }

    // Validate ID
    let currentId = 1;
    if (!isNaN(idParam) && idParam > 0) {
        currentId = idParam;
    }

    return { mode, currentId };
}

function updateUrl() {
    const params = new URLSearchParams();
    params.set('mode', window.state.mode);
    
    // Only set ID if not in tools mode (tools has no slides)
    if (window.state.mode !== 'tools') {
        params.set('id', window.state.currentId);
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
}

function getCurrentData() {
    // Ensure data exists before returning
    if (window.state.mode === 'review') return window.REVIEW_DATA || [];
    return window.state.tipsData || [];
}

// --- CORE ACTIONS (Exposed Globally) ---

function setMode(newMode) {
    if (!window.state) return; // Safety check
    if (window.state.mode === newMode) return;
    window.state.mode = newMode;
    window.state.currentId = 1;
    window.state.showDetails = false;
    window.state.isGridOpen = false;
    updateUrl();
    render();
}

function nextSlide() {
    if (!window.state) return;
    const data = getCurrentData();
    if (window.state.currentId < data.length) {
        window.state.currentId++;
        window.state.showDetails = false;
        updateUrl();
        renderSlide();
        updateProgressBar();
        updateCounter();
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
}

function prevSlide() {
    if (!window.state) return;
    if (window.state.currentId > 1) {
        window.state.currentId--;
        window.state.showDetails = false;
        updateUrl();
        renderSlide();
        updateProgressBar();
        updateCounter();
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
}

function toggleDetails() {
    if (!window.state) return;
    window.state.showDetails = !window.state.showDetails;
    renderSlide();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function toggleGrid() {
    if (!window.state) return;
    window.state.isGridOpen = !window.state.isGridOpen;
    const grid = document.getElementById('grid-overlay');
    if (!grid) return;
    
    if (window.state.isGridOpen) {
        grid.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => grid.classList.remove('opacity-0'), 10);
        renderGridItems();
    } else {
        grid.classList.add('opacity-0');
        setTimeout(() => grid.classList.add('hidden'), 300);
    }
}

function goToSlide(id) {
    if (!window.state) return;
    window.state.currentId = id;
    if(window.state.isGridOpen) toggleGrid();
    updateUrl();
    render();
}

// Explicitly attach to window to ensure global availability
window.setMode = setMode;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.toggleDetails = toggleDetails;
window.toggleGrid = toggleGrid;
window.goToSlide = goToSlide;


// --- INITIALIZATION ---

// State Object
const initialParams = getUrlParams();
window.state = {
    mode: initialParams.mode,
    tipsData: [], // Will be loaded
    currentId: initialParams.currentId,
    showDetails: false,
    isGridOpen: false
};

// Global DOM Cache
let dom = {};

// Parse Markdown Logic
function parseMarkdown(markdown) {
    const lines = markdown.split('\n');
    const tips = [];
    let currentTip = null;
    let currentDetails = [];

    lines.forEach(line => {
        const headerMatch = line.match(/^##\s+(\d+)\.\s+(.+)/);
        if (headerMatch) {
            if (currentTip) {
                currentTip.details = currentDetails.join('\n').trim();
                tips.push(currentTip);
            }
            currentTip = { id: parseInt(headerMatch[1]), content: headerMatch[2].trim() };
            currentDetails = [];
        } else if (currentTip) {
            if (line.trim() !== '' || (currentDetails.length > 0 && currentDetails[currentDetails.length-1] !== '')) {
                currentDetails.push(line);
            }
        }
    });
    if (currentTip) {
        currentTip.details = currentDetails.join('\n').trim();
        tips.push(currentTip);
    }
    return tips;
}

async function loadTips() {
    try {
        const response = await fetch('tips.md');
        if (!response.ok) throw new Error("Status " + response.status);
        const text = await response.text();
        window.state.tipsData = parseMarkdown(text);
        
        // Validation: If ID is too high, reset
        if (window.state.mode === 'tips' && window.state.currentId > window.state.tipsData.length) {
            window.state.currentId = 1;
        }
    } catch (e) {
        console.warn("Failed to load tips.md, using fallback.", e);
        window.state.tipsData = [{id: 1, content: "Bem-vindo à Masterclass", details: "**Dica:** Certifique-se que o ficheiro tips.md está na pasta raiz."}];
    }
}

// Main Entry Point
document.addEventListener('DOMContentLoaded', async () => {
    // Cache Elements
    dom = {
        mainContainer: document.getElementById('main-container'),
        bgGradient: document.getElementById('bg-gradient'),
        decoCircle1: document.getElementById('deco-circle-1'),
        decoCircle2: document.getElementById('deco-circle-2'),
        progressBar: document.getElementById('progress-bar'),
        progressContainer: document.getElementById('progress-container'),
        footerNav: document.getElementById('footer-nav'),
        headerIcon: document.getElementById('header-icon'),
        headerTitle: document.getElementById('header-title'),
        counter: document.getElementById('counter'),
        gridOverlay: document.getElementById('grid-overlay'),
        gridItems: document.getElementById('grid-items'),
        btnPrev: document.getElementById('btn-prev'),
        btnNext: document.getElementById('btn-next'),
        btnGrid: document.getElementById('btn-grid')
    };

    // Initialize Icons first run
    if (typeof lucide !== 'undefined') lucide.createIcons();

    await loadTips();
    render();

    // Event Listeners
    document.addEventListener('keydown', (e) => {
        if (window.state.isGridOpen || window.state.mode === 'tools') return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') nextSlide();
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
        if (e.key === 'Enter') toggleDetails();
        if (e.key === 'Escape' && window.state.showDetails) toggleDetails();
    });

    window.addEventListener('popstate', () => {
        const params = getUrlParams();
        window.state.mode = params.mode;
        window.state.currentId = params.currentId;
        window.state.showDetails = false;
        window.state.isGridOpen = false;
        render();
    });
});


// --- RENDER LOGIC ---

function render() {
    updateHeaderState();
    updateThemeVisuals();
    
    if (window.state.mode === 'tools') {
        // Tools Mode
        if (dom.progressContainer) dom.progressContainer.style.opacity = '0';
        if (dom.footerNav) dom.footerNav.style.opacity = '0';
        if (dom.footerNav) dom.footerNav.style.pointerEvents = 'none';
        renderTools();
    } else {
        // Slide Modes (Tips & Review)
        if (dom.progressContainer) dom.progressContainer.style.opacity = '1';
        if (dom.footerNav) dom.footerNav.style.opacity = '1';
        if (dom.footerNav) dom.footerNav.style.pointerEvents = 'auto';
        renderSlide();
        updateProgressBar();
        updateCounter();
    }
    
    // Always refresh icons after DOM updates
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function updateThemeVisuals() {
    const mode = window.state.mode;
    
    // 1. Background Gradients
    let bgClass = "absolute inset-0 transition-colors duration-1000 z-0 pointer-events-none ";
    let circleColor = "";
    
    if (mode === 'tips') {
        // Original Purple
        bgClass += "bg-gradient-to-br from-[#2e1065] via-[#1e1b4b] to-[#0f172a]";
        circleColor = "border-brand-teal/20";
    } else if (mode === 'review') {
        // Dark Teal/Emerald
        bgClass += "bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#111827]";
        circleColor = "border-emerald-500/20";
    } else if (mode === 'tools') {
        // Dark Blue/Slate
        bgClass += "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#172554]";
        circleColor = "border-blue-500/20";
    }
    
    // Safety check in case DOM isn't ready
    if (dom.bgGradient) dom.bgGradient.className = bgClass;
    if (dom.decoCircle1) dom.decoCircle1.className = `absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full border-[60px] blur-3xl opacity-30 animate-pulse-slow pointer-events-none transition-colors duration-1000 ${circleColor}`;
    if (dom.decoCircle2) dom.decoCircle2.className = `absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full border-[40px] blur-2xl opacity-30 pointer-events-none transition-colors duration-1000 ${circleColor}`;

    // 2. Button Styling (Next Button specifically changes color)
    const nextBtn = document.getElementById('btn-next');
    if (nextBtn) {
        nextBtn.className = "p-3.5 rounded-full font-bold border disabled:opacity-30 disabled:bg-black/40 disabled:text-white disabled:border-white/10 disabled:cursor-not-allowed transition-all hover:scale-110 backdrop-blur-md shadow-lg " +
        (mode === 'review' 
            ? "bg-emerald-500 text-black border-emerald-500 hover:bg-emerald-400 hover:border-emerald-400" 
            : "bg-brand-teal text-brand-dark border-brand-teal hover:bg-brand-cyan hover:border-brand-cyan");
    }
}

function updateHeaderState() {
    const btns = {
        tips: document.getElementById('btn-tips'),
        review: document.getElementById('btn-review'),
        tools: document.getElementById('btn-tools')
    };

    // Base classes
    const activeClass = "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105";
    const inactiveClass = "text-white/60 hover:text-white hover:bg-white/10";

    // Reset all
    Object.values(btns).forEach(btn => {
        if(!btn) return;
        btn.className = `flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all duration-300 ${inactiveClass}`;
    });

    // Set Active
    if (window.state.mode === 'tips' && btns.tips) {
        btns.tips.className = `flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all duration-300 bg-brand-teal text-brand-dark shadow-[0_0_20px_rgba(45,212,191,0.4)] scale-105`;
    } else if (window.state.mode === 'review' && btns.review) {
        btns.review.className = `flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all duration-300 bg-emerald-500 text-emerald-950 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105`;
    } else if (window.state.mode === 'tools' && btns.tools) {
        btns.tools.className = `flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all duration-300 bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-105`;
    }
}

function updateProgressBar() {
    if (!dom.progressBar) return;
    const data = getCurrentData();
    const pct = (window.state.currentId / (data.length || 1)) * 100;
    
    dom.progressBar.style.width = `${pct}%`;
    
    // Change color based on mode
    if (window.state.mode === 'review') {
        dom.progressBar.className = "h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]";
    } else {
        dom.progressBar.className = "h-full bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-500 ease-out shadow-[0_0_10px_rgba(45,212,191,0.5)]";
    }
}

function updateCounter() {
    if (!dom.counter) return;
    const data = getCurrentData();
    const current = window.state.currentId;
    const total = data.length;
    
    dom.counter.innerHTML = `${current} <span class="opacity-30">/</span> ${total}`;
    
    if (dom.btnPrev) dom.btnPrev.disabled = current === 1;
    if (dom.btnNext) dom.btnNext.disabled = current === total;
}

function renderSlide() {
    if (!dom.mainContainer) return;
    const data = getCurrentData();
    
    // Safety check
    if (data.length === 0) {
        dom.mainContainer.innerHTML = '<div class="flex items-center justify-center h-full text-white/50 animate-pulse">A carregar...</div>';
        return;
    }

    // Boundary check
    if (window.state.currentId > data.length) window.state.currentId = 1;
    
    const item = data.find(i => i.id === window.state.currentId);
    if (!item) return;

    const isReview = window.state.mode === 'review';
    const isGoldenRule = !isReview && [6, 13, 20].includes(item.id);
    
    // Dynamic Colors for elements
    let accentColor = "text-brand-teal";
    let badgeBg = "bg-brand-teal/10 border-brand-teal/30";
    let btnClass = "bg-gradient-to-r from-brand-teal to-brand-cyan text-brand-dark hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]";
    
    if (isReview) {
        accentColor = "text-emerald-400";
        badgeBg = "bg-emerald-500/10 border-emerald-500/30";
        btnClass = "bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]";
    } else if (isGoldenRule) {
        accentColor = "text-amber-400";
        badgeBg = "bg-amber-500/20 border-amber-500/50";
        btnClass = "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-amber-500/25";
    }

    // Generate Badge HTML
    const badgeHTML = `
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm ${badgeBg} animate-fade-in">
            <i data-lucide="${isGoldenRule ? 'trophy' : (isReview ? 'graduation-cap' : 'star')}" class="w-4 h-4 ${accentColor}"></i>
            <span class="font-bold text-sm tracking-widest uppercase ${accentColor}">
                ${isGoldenRule ? 'Regra de Ouro' : (isReview ? `Conceito #${item.id}` : `Dica #${item.id}`)}
            </span>
        </div>`;

    // Parse Details (Markdown-ish)
    const detailsContent = (item.details || '').split('\n').map(line => {
        if (!line.trim()) return '';
        // Check headers
        const isHeader = line.startsWith('**') || line.includes('Prompt:') || line.includes('Exemplo:') || line.includes('Ação:') || line.includes('Regra:') || line.includes('Estratégia:');
        const cleanLine = line.replace(/\*\*/g, '');
        
        return `<p class="${isHeader ? `font-bold text-lg mt-6 mb-2 ${accentColor}` : 'text-gray-300 mb-3'}">${cleanLine}</p>`;
    }).join('');

    // HTML Structure
    dom.mainContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
            
            <!-- Dynamic Content Area -->
            <div class="transition-all duration-700 ease-out-expo flex flex-col items-center justify-center ${window.state.showDetails ? '-translate-y-8 scale-95 opacity-30 blur-sm pointer-events-none' : 'translate-y-0 scale-100 opacity-100 blur-0'}">
                
                <!-- Giant Background Number -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none">
                    <span class="text-[15rem] md:text-[35rem] font-black leading-none tracking-tighter text-white/[0.03] font-sans">${item.id}</span>
                </div>

                <div class="mb-8">${badgeHTML}</div>
                
                <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-12 max-w-5xl mx-auto drop-shadow-2xl animate-slide-up" style="animation-delay: 0.1s">
                    ${item.content}
                </h1>

                <div class="flex flex-col items-center w-full animate-slide-up" style="animation-delay: 0.2s">
                    <button onclick="toggleDetails()" class="group flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 text-lg font-bold tracking-wide shadow-xl hover:scale-105 ${btnClass}">
                        <i data-lucide="book-open" class="w-5 h-5"></i>
                        <span>Saber mais</span>
                    </button>
                </div>
            </div>

            <!-- Details Panel (Overlay) -->
            <div class="absolute bottom-0 md:bottom-24 left-0 right-0 mx-auto w-full md:w-[800px] max-h-[60vh] z-50 transition-all duration-500 ease-out-expo ${window.state.showDetails ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-20 opacity-0 pointer-events-none'}">
                <div class="glass-panel rounded-t-3xl md:rounded-3xl p-8 md:p-10 flex flex-col h-full shadow-2xl ${isGoldenRule ? 'border-amber-500/30' : ''}">
                    
                    <div class="flex items-center justify-between mb-6 border-b border-white/10 pb-4 shrink-0">
                        <div class="flex items-center gap-3">
                            <div class="p-2 rounded-lg ${isReview ? 'bg-emerald-500/20' : 'bg-brand-teal/20'}">
                                <i data-lucide="${isReview ? 'graduation-cap' : 'sparkles'}" class="w-5 h-5 ${accentColor}"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white tracking-tight">Explicação Detalhada</h3>
                        </div>
                        <button onclick="toggleDetails()" class="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                            <i data-lucide="x" class="w-6 h-6"></i>
                        </button>
                    </div>

                    <div class="overflow-y-auto custom-scrollbar pr-2 prose">
                        ${detailsContent}
                    </div>
                </div>
            </div>

        </div>
    `;
}

function renderTools() {
    if (!dom.mainContainer) return;
    
    // Safety check for tools data
    const tools = window.TOOLS_DATA || [];
    if (tools.length === 0) {
        dom.mainContainer.innerHTML = '<div class="flex items-center justify-center h-full text-white">A carregar ferramentas...</div>';
        return;
    }

    let cardsHTML = tools.map((tool, index) => {
        // Icon Logic
        let iconName = 'zap';
        if (tool.logoId === 'openai') iconName = 'message-square';
        if (tool.logoId === 'banana') iconName = 'moon';
        if (tool.logoId === 'notebook') iconName = 'book';
        if (tool.logoId === 'suno') iconName = 'music';
        if (tool.logoId === 'gemini') iconName = 'sparkles';
        if (tool.logoId === 'claude') iconName = 'feather';
        if (tool.logoId === 'perplexity') iconName = 'search';
        if (tool.logoId === 'midjourney') iconName = 'palette';
        if (tool.logoId === 'gamma') iconName = 'presentation';
        if (tool.logoId === 'lovable') iconName = 'code-2';
        if (tool.logoId === 'deepseek') iconName = 'brain-circuit';
        if (tool.logoId === 'manus') iconName = 'bot';
        
        return `
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" 
           class="group relative flex flex-col min-h-[550px] h-auto rounded-3xl overflow-hidden bg-white shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-slide-up opacity-0 cursor-pointer block z-20 pointer-events-auto" 
           style="animation-delay: ${index * 0.05}s">
            
            <!-- Hover External Link Indicator -->
            <div class="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-md p-2 rounded-full shadow-lg">
                <i data-lucide="external-link" class="w-5 h-5 text-white drop-shadow-md"></i>
            </div>

            <!-- Top: Brand Color -->
            <div class="h-64 w-full shrink-0 ${tool.bgColor} flex items-center justify-center p-8 relative overflow-hidden">
                 <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent)]"></div>
                 <div class="relative z-10 flex flex-col items-center transform transition-transform group-hover:scale-110 duration-500">
                    <i data-lucide="${iconName}" class="w-20 h-20 ${tool.logoColor} mb-4" stroke-width="1.5"></i>
                    <h3 class="text-2xl font-black uppercase tracking-tight ${tool.logoColor} text-center leading-none drop-shadow-sm">
                        ${tool.name}
                    </h3>
                 </div>
            </div>

            <!-- Bottom: Content -->
            <div class="flex-1 p-8 flex flex-col bg-white">
                <div class="mb-auto">
                    <div class="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                        ${tool.tagline}
                    </div>
                    <p class="text-gray-700 text-sm leading-relaxed font-medium">
                        ${tool.description}
                    </p>
                </div>
                
                <div class="mt-8 pt-6 border-t border-gray-100">
                    <div class="flex items-center gap-2 mb-2">
                        <i data-lucide="target" class="w-4 h-4 text-gray-400"></i>
                        <span class="text-xs font-bold text-gray-400 uppercase">Ideal Para</span>
                    </div>
                    <div class="text-sm font-bold text-gray-900 leading-tight">
                        ${tool.bestFor}
                    </div>
                </div>
            </div>
        </a>`;
    }).join('');

    dom.mainContainer.innerHTML = `
        <div class="w-full h-full overflow-y-auto custom-scrollbar relative z-10 pb-32">
            <div class="max-w-7xl mx-auto px-6 md:px-12 py-24">
                
                <div class="text-center mb-20 animate-slide-up">
                    <div class="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-500/20 mb-6 backdrop-blur-sm border border-blue-400/20">
                        <i data-lucide="wrench" class="w-8 h-8 text-blue-400"></i>
                    </div>
                    <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Toolkit de IA</h2>
                    <p class="text-blue-200/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        A nossa seleção curada das ferramentas essenciais para criar, automatizar e aprender na era da IA Generativa.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${cardsHTML}
                </div>
            </div>
        </div>
    `;
}

function renderGridItems() {
    if (!dom.gridItems) return;
    const data = getCurrentData();
    const currentId = window.state.currentId;
    const isReview = window.state.mode === 'review';
    
    // Colors based on mode
    const activeBorder = isReview ? 'border-emerald-500' : 'border-brand-teal';
    const activeText = isReview ? 'text-emerald-400' : 'text-brand-teal';
    const activeBg = isReview ? 'bg-emerald-500/10' : 'bg-brand-teal/10';
    
    dom.gridItems.innerHTML = data.map(tip => {
        const isActive = tip.id === currentId;
        return `
            <button onclick="goToSlide(${tip.id})" class="relative p-6 rounded-2xl text-left transition-all duration-200 border group 
                ${isActive ? `${activeBg} ${activeBorder}` : 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/20'}">
                <div class="flex justify-between items-start mb-2">
                    <span class="text-2xl font-bold ${isActive ? activeText : 'text-white/30 group-hover:text-white/60'}">${tip.id}</span>
                    ${isActive ? `<i data-lucide="check-circle" class="w-5 h-5 ${activeText}"></i>` : ''}
                </div>
                <p class="text-sm text-gray-300 leading-snug font-medium line-clamp-3">
                    ${tip.content}
                </p>
            </button>
        `;
    }).join('');
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}