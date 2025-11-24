

window.REVIEW_DATA = [
  {
    id: 1,
    content: "Generativa vs. Tradicional: A Diferença Fundamental",
    details: `**O Conceito:**\nA IA Generativa não se limita a encontrar ou classificar informação existente (como um filtro de spam ou um motor de busca). A característica definidora é a capacidade de **criar conteúdo novo e original** (texto, imagem, código) a partir de um prompt.\n\n**Na Prática:**\nSe a ferramenta está apenas a "procurar" informação existente sem criar nada novo, não é uma IA Generativa (ex: Google Search tradicional).`
  },
  {
    id: 2,
    content: "Como a IA «Pensa»: Previsão Estatística",
    details: `**O Mecanismo:**\nEmbora pareça inteligente, o ChatGPT não "compreende" filosoficamente o que lhe diz. Ele funciona como uma máquina de **previsão estatística**.\n\n**Conceito Chave:**\nO modelo prevê a próxima palavra (ou **token**) mais provável numa sequência, baseando-se nos padrões que aprendeu durante o treino. Não consulta uma "base de dados de factos" em tempo real (na versão base), o que explica porque pode inventar factos com tanta confiança.`
  },
  {
    id: 3,
    content: "Tokens: Os «Átomos» da Linguagem",
    details: `**A Definição:**\nA IA não lê "palavras" inteiras como nós. Ela lê e processa **Tokens**.\n\n**Conceito Chave:**\nTokens são as unidades básicas de texto para a IA. Podem ser palavras inteiras, mas frequentemente são **fragmentos de palavras** ou sílabas. A "Janela de Contexto" (a memória de curto prazo da IA) mede-se em tokens, não em palavras.`
  },
  {
    id: 4,
    content: "Alucinação: Quando a IA Inventa",
    details: `**O Risco:**\nA IA pode dar respostas erradas. Mas há um tipo específico de erro que é perigoso porque é apresentado com total confiança.\n\n**Definição:**\nUma **Alucinação** ocorre quando a IA gera informações factualmente incorretas ou inventadas (como leis que não existem, datas falsas ou citações fabricadas), mas fá-lo com **aparência de veracidade**. Isto acontece porque o modelo prioriza a fluidez da frase sobre a precisão factual.`
  },
  {
    id: 5,
    content: "O Segredo do Prompting: Framework IDEA",
    details: `**A Estrutura:**\nPara evitar resultados vagos, usamos estruturas como o IDEA para garantir que damos o contexto necessário.\n\n**Os 4 Pilares:**\n*   **I (Identidade):** Quem é a IA? (Papel)\n*   **D (Direção):** O que deve fazer? (Tarefa)\n*   **E (Exemplos):** Como deve parecer? (Modelo)\n*   **A (Ajustes):** Quais são as regras? (Limites)`
  },
  {
    id: 6,
    content: "Personas: A Técnica «Age como...»",
    details: `**A Técnica:**\nPedir à IA para "Agir como um nutricionista" ou "Um historiador" não é uma brincadeira.\n\n**Conceito Chave:**\nEsta técnica serve para **filtrar o vasto conhecimento** da IA. Ajuda o modelo a adotar o **vocabulário, tom e perspetiva** corretos para aquela especialidade, ignorando informações irrelevantes de outras áreas, resultando numa resposta mais focada.`
  },
  {
    id: 7,
    content: "Privacidade: O Que Nunca Partilhar",
    details: `**A Regra de Ouro:**\nSe está a usar uma IA pública/gratuita, os seus dados podem ser usados para treino.\n\n**Conceito Chave:**\nNunca partilhe **dados pessoais sensíveis (PII)**, informações financeiras, senhas ou segredos comerciais. Partilhar "o máximo possível" é o oposto do que deve fazer. Use a técnica da Substituição Segura (ex: usar dados fictícios ou "Cliente A" em vez de nomes reais).`
  },
  {
    id: 8,
    content: "Personalização: Custom Instructions & GPTs",
    details: `**A Ferramenta:**\nExistem formas de evitar repetir o contexto em cada conversa.\n\n**Diferença:**\n*   **Instruções Personalizadas:** Definem quem somos e como queremos que a IA responda (aplicam-se a *todas* as conversas).\n*   **GPTs/Gems:** São versões da IA configuradas para **tarefas concretas** (ex: "Tutor de Excel"), que podem ter acesso a **ficheiros específicos** carregados pelo utilizador.`
  },
  {
    id: 9,
    content: "Imagens: Prompt Fraco vs. Forte",
    details: `**A Diferença:**\nNa geração de imagens, a vagueza é inimiga da qualidade.\n\n**Conceito Chave:**\n*   *Fraco:* "Uma imagem bonita" (Deixa tudo à imaginação da IA, resultados aleatórios).\n*   *Forte:* Descreve o **estilo visual**, iluminação, composição, ambiente e detalhes específicos. Quanto mais descritivo for o prompt, maior o controlo sobre o resultado final.`
  },
  {
    id: 10,
    content: "Investigação: Fontes Fechadas vs. Abertas",
    details: `**A Estratégia:**\nPara estudo ou trabalho sério, confiar no conhecimento geral da IA é arriscado.\n\n**Conceito Chave:**\nA utilização de ferramentas (como NotebookLM ou RAG) que permitem conversar baseando-se **exclusivamente nos documentos que o utilizador carrega** é superior. Isto garante que a IA responde apenas com base nas fontes fornecidas, eliminando a invenção de factos externos.`
  }
];

window.TOOLS_DATA = [
  {
    id: 'nano-banana',
    name: 'NANO BANANA',
    tagline: 'Imagem',
    description: 'Criação de imagens e ideias com base em texto em segundos. Focado em simplicidade e rapidez.',
    bestFor: 'Social Media, Ideação Rápida.',
    bgColor: 'bg-[#FDE047]', // Yellow 300/400 equivalent
    logoColor: 'text-black',
    logoId: 'banana',
    url: 'https://fal.ai' // Placeholder for fast image gen
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'O Generalista',
    description: 'O assistente mais versátil. Com o modelo o1, lidera em raciocínio complexo. Com o Canvas, colabora em escrita e código.',
    bestFor: 'Raciocínio, Escrita, Coding.',
    bgColor: 'bg-[#10A37F]', // OpenAI Green
    logoColor: 'text-white',
    logoId: 'openai',
    url: 'https://chat.openai.com'
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    tagline: 'Estudo & Research',
    description: 'A ferramenta da Google que "aprende" os seus documentos. Cria podcasts de áudio (Audio Overview) a partir dos seus PDFs.',
    bestFor: 'Estudantes, Investigação, RAG Pessoal.',
    bgColor: 'bg-white border-b-4 border-blue-500',
    logoColor: 'text-blue-500',
    logoId: 'notebook',
    url: 'https://notebooklm.google.com'
  },
  {
    id: 'suno',
    name: 'Suno',
    tagline: 'Criação Musical',
    description: 'Gera canções completas (letra, voz e melodia) com qualidade de rádio a partir de um simples prompt de texto.',
    bestFor: 'Música, Jingles, Criatividade Áudio.',
    bgColor: 'bg-black',
    logoColor: 'text-white',
    logoId: 'suno',
    url: 'https://suno.com'
  },
  {
    id: 'ai-studio',
    name: 'Google AI Studio',
    tagline: 'Prototipagem',
    description: 'Acesso direto aos modelos Gemini Pro e Flash. Permite janelas de contexto massivas (2M tokens) e análise de vídeo.',
    bestFor: 'Developers, Análise de Vídeo Longo.',
    bgColor: 'bg-[#1E40AF]', // Deep Blue
    logoColor: 'text-white',
    logoId: 'gemini',
    url: 'https://aistudio.google.com'
  },
  {
    id: 'gamma',
    name: 'Gamma',
    tagline: 'Apresentações',
    description: 'Cria apresentações (slides), documentos e websites visualmente atraentes em segundos a partir de um tópico.',
    bestFor: 'PowerPoints Rápidos, Pitch Decks.',
    bgColor: 'bg-[#F4F2EB]', // Creamy/Paste
    logoColor: 'text-[#6D28D9]', // Purple
    logoId: 'gamma',
    url: 'https://gamma.app'
  },
  {
    id: 'claude',
    name: 'Claude',
    tagline: 'Escrita Humanizada',
    description: 'Conhecido pela sua escrita natural e matizada. Excelente a processar livros inteiros numa só vez.',
    bestFor: 'Resumos Grandes, Escrita de Nuance.',
    bgColor: 'bg-[#D97757]', // Anthropic Orange
    logoColor: 'text-white',
    logoId: 'claude',
    url: 'https://claude.ai'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    tagline: 'Arte Digital',
    description: 'A referência em qualidade estética para geração de imagem. Requer uso via Discord ou Web Alpha.',
    bestFor: 'Fotografia, Arte Conceptual.',
    bgColor: 'bg-white',
    logoColor: 'text-black',
    logoId: 'midjourney',
    url: 'https://www.midjourney.com'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    tagline: 'Motor de Resposta',
    description: 'Substituto do Google. Pesquisa na web em tempo real e fornece respostas diretas com citação de fontes.',
    bestFor: 'Fact-Checking, Notícias.',
    bgColor: 'bg-[#14B8A6]', // Teal
    logoColor: 'text-white',
    logoId: 'perplexity',
    url: 'https://www.perplexity.ai'
  },
  {
    id: 'lovable',
    name: 'Lovable',
    tagline: 'Desenvolvimento Web',
    description: 'Plataforma low-code que transforma ideias e prompts em aplicações web completas e funcionais instantaneamente.',
    bestFor: 'Prototipagem Rápida, Web Apps.',
    bgColor: 'bg-black',
    logoColor: 'text-pink-500',
    logoId: 'lovable',
    url: 'https://lovable.dev'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    tagline: 'Raciocínio Open Source',
    description: 'Modelo chinês de código aberto com capacidades de raciocínio lógico e codificação que rivalizam com os líderes de mercado.',
    bestFor: 'Developers, Uso Local, Raciocínio.',
    bgColor: 'bg-[#4B5563]', // Slate grey
    logoColor: 'text-blue-300',
    logoId: 'deepseek',
    url: 'https://chat.deepseek.com'
  },
  {
    id: 'manus',
    name: 'Manus',
    tagline: 'Automação e Agentes',
    description: 'IA focada em automação de tarefas complexas e criação de agentes autónomos para fluxos de trabalho.',
    bestFor: 'Produtividade, Workflows Complexos.',
    bgColor: 'bg-[#F97316]', // Orange
    logoColor: 'text-white',
    logoId: 'manus',
    url: 'https://manus.ai'
  }
];
