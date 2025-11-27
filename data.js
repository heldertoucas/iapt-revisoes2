
window.TIPS_DATA = [
  {
    id: 1,
    icon: "brain-circuit",
    content: "Ative sempre o modo «Pensamento».",
    details: "**Ação:** Para problemas complexos, use modelos que \"pensam\" antes de responder (como o o1 ou modelos com *Thinking* ativado). Isso reduz erros de lógica e alucinações.\n\nUse isto para matemática, código ou planeamento estratégico. Para conversas simples, é desnecessário e lento."
  },
  {
    id: 2,
    icon: "lightbulb",
    content: "Use o modelo IDEA para Prompts eficazes.",
    details: "**Memorize:**\n(I)dentidade (Quem é a IA? Atribuir um papel para guiar o tom e o vocabulário)\n(D)ireção (O que fazer? Definir a tarefa, o público e o objetivo final)\n(E)xemplos (Qual deve ser o resultado? Fornecer um ou mais modelos da resposta esperada)\n(A)justes (Quais são as regras? Definir limites, tom, formato e o que evitar)."
  },
  {
    id: 3,
    icon: "users",
    content: "Defina o público e o tom em cada nova conversa.",
    details: "**O Problema:** A IA não sabe para quem está a escrever se não lhe disser.\n\n**Prompt:** \"Escreve para [PÚBLICO: Crianças/CEOs/Técnicos]. Usa um tom [TOM: Inspirador/Formal/Direto].\""
  },
  {
    id: 4,
    icon: "map",
    content: "Peça um plano antes de iniciar um trabalho aprofundado.",
    details: "**Estratégia:** Não peça o resultado final de imediato. Peça primeiro a estrutura para garantir o alinhamento.\n\n**Prompt:** \"Cria um esboço/plano detalhado para este relatório. Só depois de eu aprovar o plano é que avançamos para a escrita.\""
  },
  {
    id: 5,
    icon: "target",
    content: "Mostre como seria um «bom resultado», guie a IA.",
    details: "**Técnica Few-Shot:** A melhor forma de guiar a IA é dar um exemplo do que quer.\n\n**Exemplo:** \"Classifica estes emails. Exemplo: 'Email de Reclamação' -> Prioridade Alta. Agora classifica este: ...\""
  },
  {
    id: 6,
    icon: "shield-alert",
    content: "A Privacidade é para manter, sempre.",
    details: "**Regra de Ouro:** Nunca partilhe dados pessoais (PII) em IAs públicas.\n\n**Segurança:** Nunca coloque NIFs, moradas, dados bancários ou senhas. Use a \"Substituição Segura\": Troque \"João Silva, NIF 123\" por \"Cliente A\"."
  },
  {
    id: 7,
    icon: "search-check",
    content: "Combata a Alucinação exigindo fontes.",
    details: "**O Risco:** A IA inventa factos com confiança. Quando a verdade importa, exija fontes.\n\n**Prompt:** \"Responde apenas com base nos documentos que forneci. Se não souberes, diz 'Não sei', não inventes.\""
  },
  {
    id: 8,
    icon: "user-check",
    content: "A IA sugere, mas você decide (Seja responsável).",
    details: "**Ética:** A IA é o copiloto, você é o piloto.\n\nNunca deixe a IA tomar uma decisão final crítica (como enviar um email ou aprovar um candidato) sem revisão humana. Você é o responsável legal."
  },
  {
    id: 9,
    icon: "database",
    content: "Obtenha respostas a partir dos seus ficheiros, com RAG.",
    details: "**Conceito:** Para uso profissional, por exemplo, a IA deve consultar os seus ficheiros internos, não a internet geral.\n\nO sistema *Retrieval-Augmented Generation* permite à IA ler os seus PDFs e Manuais para dar respostas factuais baseadas na sua organização."
  },
  {
    id: 10,
    icon: "scissors",
    content: "Limite cada pedido a uma tarefa principal.",
    details: "**Estratégia:** Prompts \"tudo em um\" geram resultados medíocres. Divida para conquistar.\n\nEm vez de \"Cria um site e o conteúdo\", faça: 1. \"Cria a estrutura do site\"; 2. \"Gera o conteúdo para a página 'Sobre'\"."
  },
  {
    id: 11,
    icon: "git-merge",
    content: "Peça à IA para explicar o seu raciocínio (Cadeia de Pensamento).",
    details: "**Prompt:** \"Pensa passo a passo\".\n\nPara lógica e matemática, force a IA a mostrar o trabalho. Ao forçar a IA a explicar o raciocínio antes da resposta final, a precisão aumenta drasticamente."
  },
  {
    id: 12,
    icon: "wrench",
    content: "Não use a mesma ferramenta para tudo (Há muitas IAs).",
    details: "**Guia:**\n*   **ChatGPT (o1/Voice):** Raciocínio complexo e Conversa.\n*   **Claude:** Escrita Humanizada e PDFs grandes.\n*   **Gemini:** Ecossistema Google e Vídeo.\n*   **Perplexity:** Pesquisa com Fontes."
  },
  {
    id: 13,
    icon: "message-square-warning",
    content: "Peça à IA para criticar a sua própria resposta.",
    details: "**O Problema:** A IA é \"agradável\" por defeito e pode esconder falhas. Force o sentido crítico.\n\n**Prompt:** \"Analisa a tua resposta anterior. Aponta 3 falhas lógicas ou áreas onde foste vago e reescreve uma versão melhorada.\""
  },
  {
    id: 14,
    icon: "globe",
    content: "Ative a pesquisa na web para obter novos factos.",
    details: "**Limitação:** A IA tem uma data de corte de conhecimento. Para factos atuais, obrigue-a a ir à web.\n\n**Prompt:** \"Pesquisa na web as últimas notícias sobre [TEMA] de hoje e resume. Não uses o teu conhecimento pré-treinado.\""
  },
  {
    id: 15,
    icon: "layout-template",
    content: "Use o modo Canvas para rascunhos longos e edições.",
    details: "**Dica:** Para textos grandes ou código, use interfaces de edição lado-a-lado.\n\nPermite selecionar apenas um parágrafo específico e pedir \"encurta isto\" ou \"torna isto mais formal\", sem regenerar tudo."
  },
  {
    id: 16,
    icon: "help-circle",
    content: "Peça que identifique e sinalize informações em falta.",
    details: "**O Problema:** A IA tende a \"tapar buracos\" com suposições. Peça para ela identificar o que falta.\n\n**Prompt:** \"Antes de responderes, diz-me que informações te faltam para dar uma resposta perfeita.\""
  },
  {
    id: 17,
    icon: "settings-2",
    content: "Poupe tempo amanhã, escreva instruções personalizadas hoje.",
    details: "**Configuração:** Não repita quem é em cada chat.\n\nVá às definições e escreva \"Sou [Cargo]. Responde sempre em PT-PT. Sê formal.\" A IA lembrará disto para sempre."
  },
  {
    id: 18,
    icon: "save",
    content: "Transforme conversas fortes em modelos reutilizáveis.",
    details: "**Automação:** Se um chat funcionou muito bem, guarde-o ou crie um \"GPT Personalizado\".\n\nSe ensinou a IA a fazer uma tarefa complexa, guarde esse \"estado\" para não ter de ensinar tudo de novo na próxima vez."
  },
  {
    id: 19,
    icon: "refresh-cw",
    content: "Exija mais à IA, refine a conversa. Não aceite o primeiro rascunho.",
    details: "**Estratégia:** A primeira resposta é apenas o início. Dialogar com a IA melhora o resultado exponencialmente.\n\nTrate a IA como um estagiário. Dê feedback: \"Gostei da estrutura, mas o tom está muito formal. Reescreve de forma mais simples.\""
  },
  {
    id: 20,
    icon: "rocket",
    content: "Não use o ChatGPT para ceder à preguiça. Utilize-a para ser ainda melhor.",
    details: "**Filosofia:** A mentalidade certa define o resultado.\n\nA IA aumenta a sua capacidade, não substitui o seu cérebro. Use a IA para fazer o rascunho, mas ponha sempre a sua \"mão\" na versão final."
  }
];

window.REVIEW_DATA = [
  {
    id: 1,
    icon: "sparkles",
    content: "Generativa vs. Tradicional: A Diferença Fundamental",
    details: `**O Conceito:**\nA IA Generativa não se limita a encontrar ou classificar informação existente (como um filtro de spam ou um motor de busca). A característica definidora é a capacidade de **criar conteúdo novo e original** (texto, imagem, código) a partir de um prompt.\n\n**Na Prática:**\nSe a ferramenta está apenas a "procurar" informação existente sem criar nada novo, não é uma IA Generativa (ex: Google Search tradicional).`
  },
  {
    id: 2,
    icon: "brain-circuit",
    content: "Como a IA «Pensa»: Previsão Estatística",
    details: `**O Mecanismo:**\nEmbora pareça inteligente, o ChatGPT não "compreende" filosoficamente o que lhe diz. Ele funciona como uma máquina de **previsão estatística**.\n\n**Conceito Chave:**\nO modelo prevê a próxima palavra (ou **token**) mais provável numa sequência, baseando-se nos padrões que aprendeu durante o treino. Não consulta uma "base de dados de factos" em tempo real (na versão base), o que explica porque pode inventar factos com tanta confiança.`
  },
  {
    id: 3,
    icon: "puzzle",
    content: "Tokens: Os «Átomos» da Linguagem",
    details: `**A Definição:**\nA IA não lê "palavras" inteiras como nós. Ela lê e processa **Tokens**.\n\n**Conceito Chave:**\nTokens são as unidades básicas de texto para a IA. Podem ser palavras inteiras, mas frequentemente são **fragmentos de palavras** ou sílabas. A "Janela de Contexto" (a memória de curto prazo da IA) mede-se em tokens, não em palavras.`
  },
  {
    id: 4,
    icon: "ghost",
    content: "Alucinação: Quando a IA Inventa",
    details: `**O Risco:**\nA IA pode dar respostas erradas. Mas há um tipo específico de erro que é perigoso porque é apresentado com total confiança.\n\n**Definição:**\nUma **Alucinação** ocorre quando a IA gera informações factualmente incorretas ou inventadas (como leis que não existem, datas falsas ou citações fabricadas), mas fá-lo com **aparência de veracidade**. Isto acontece porque o modelo prioriza a fluidez da frase sobre a precisão factual.`
  },
  {
    id: 5,
    icon: "clipboard-list",
    content: "O Segredo do Prompting: Modelo RTF",
    details: `**A Estrutura:**\nPara obter resultados precisos, deve estruturar o seu prompt seguindo o modelo **RTF**.\n\n**Os 3 Pilares:**\n*   **R (Role/Papel):** Quem é a IA? (Ex: "Age como um Nutricionista")\n*   **T (Task/Tarefa):** O que deve fazer? (Ex: "Cria um plano semanal")\n*   **F (Format/Formato):** Como deve ser a resposta? (Ex: "Numa tabela Excel")`
  },
  {
    id: 6,
    icon: "sliders-horizontal",
    content: "Técnicas para Bons Resultados",
    details: `**Anonimizar a informação:**\nProteja dados sensíveis. Ex: "Escreve um email dirigido ao munícipe X, sobre o pedido de informações acerca do processo Y".\n\n**Iterar:**\nNão aceite a primeira resposta. Ex: "Melhora a tua resposta anterior. O texto deve ser mais formal e não deve conter termos como 'usuário'".\n\n**Auto-crítica:**\nPeça à IA para se corrigir. Ex: "Revê criticamente a tua resposta e sugere áreas de melhoria. Aplica as melhorias e apresenta o plano final revisto."`
  },
  {
    id: 7,
    icon: "shield-alert",
    content: "Privacidade: O Que Nunca Partilhar",
    details: `**A Regra de Ouro:**\nSe está a usar uma IA pública/gratuita, os seus dados podem ser usados para treino.\n\n**Conceito Chave:**\nNunca partilhe **dados pessoais sensíveis (PII)**, informações financeiras, senhas ou segredos comerciais. Partilhar "o máximo possível" é o oposto do que deve fazer. Use a técnica da Substituição Segura (ex: usar dados fictícios ou "Cliente A" em vez de nomes reais).`
  },
  {
    id: 8,
    icon: "bot",
    content: "Agentes de IA Copilot: Assistentes Personalizados",
    details: `**A Definição:**\nUm Agente de IA (como o "Mestre de Prompts") não é apenas um chat genérico.\n\n**Conceito Chave:**\nÉ uma versão da IA configurada com **instruções específicas** para realizar tarefas concretas. O seu **papel, tom e regras** são definidos previamente pelo utilizador para garantir consistência e eficácia numa função especializada (ex: corrigir ortografia ou gerar código).`
  },
  {
    id: 9,
    icon: "cloud",
    content: "Conceito «Equipa ON»: Trabalho Moderno",
    details: `**A Definição:**\nO modelo de trabalho antigo baseava-se em enviar ficheiros por email ("v1", "v2_final").\n\n**A Mudança:**\nUma "Equipa ON" trabalha onde os documentos **vivem na nuvem**, existe uma **única versão** para cada ficheiro (single source of truth) e a edição é feita em **tempo real e em simultâneo** por vários colegas (co-autoria).`
  },
  {
    id: 10,
    icon: "search",
    content: "Investigação: Copilot Web vs. Grounding",
    details: `**A Estratégia:**\nSaber onde a IA vai buscar a informação é crucial para evitar erros.\n\n**Conceito Chave:**\n*   **Copilot Web:** Usa a pesquisa na internet para encontrar factos recentes (notícias de hoje).\n*   **Grounding (Ancoragem):** Obriga a IA a responder baseando-se **exclusivamente nos seus documentos internos** (Word, PDF) ou links fornecidos, garantindo que não inventa dados externos.`
  }
];

window.COPILOT_DATA = [
  {
    id: 1,
    icon: "sparkles",
    content: "Generativa vs. Tradicional: A Diferença Fundamental",
    details: `**O Conceito:**\nA IA Generativa não se limita a encontrar ou classificar informação existente. A característica definidora é a capacidade de **criar conteúdo novo e original** (texto, imagem, código) a partir de um prompt.\n\n**Na Prática:**\nSe a ferramenta está apenas a "procurar" informação existente sem criar nada novo, não é uma IA Generativa (ex: Google Search tradicional).`
  },
  {
    id: 2,
    icon: "brain-circuit",
    content: "Como a IA «Pensa»: Previsão Estatística",
    details: `**O Mecanismo:**\nO ChatGPT não "compreende" filosoficamente o que lhe diz. Ele funciona como uma máquina de **previsão estatística**.\n\n**Conceito Chave:**\nO modelo prevê a próxima palavra (ou **token**) mais provável numa sequência, baseando-se nos padrões que aprendeu. Não consulta uma "base de dados de factos" em tempo real (na versão base), o que explica porque pode inventar factos com tanta confiança.`
  },
  {
    id: 3,
    icon: "puzzle",
    content: "Tokens: Os «Átomos» da Linguagem",
    details: `**A Definição:**\nA IA não lê "palavras" inteiras como nós. Ela lê e processa **Tokens**.\n\n**Conceito Chave:**\nTokens são as unidades básicas de texto para a IA. Podem ser palavras inteiras, mas frequentemente são **fragmentos de palavras** ou sílabas. A "Janela de Contexto" (a memória de curto prazo da IA) mede-se em tokens.`
  },
  {
    id: 4,
    icon: "alert-triangle",
    content: "Alucinação: Quando a IA Inventa",
    details: `**O Risco:**\nA IA pode dar respostas erradas com total confiança.\n\n**Definição:**\nUma **Alucinação** ocorre quando a IA gera informações factualmente incorretas ou inventadas (como leis que não existem, datas falsas), mas fá-lo com **aparência de veracidade**. Isto acontece porque o modelo prioriza a fluidez da frase sobre a precisão factual.`
  },
  {
    id: 5,
    icon: "layout-list",
    content: "O Segredo do Prompting: Modelo RTF",
    details: `**A Estrutura:**\nPara obter resultados precisos, deve estruturar o seu prompt seguindo o modelo **RTF**.\n\n**Os 3 Pilares:**\n*   **R (Role/Papel):** Quem é a IA? (Ex: "Age como um Nutricionista")\n*   **T (Task/Tarefa):** O que deve fazer? (Ex: "Cria um plano semanal")\n*   **F (Format/Formato):** Como deve ser a resposta? (Ex: "Numa tabela Excel")`
  },
  {
    id: 6,
    icon: "wand-2",
    content: "Técnicas para Bons Resultados",
    details: `**Anonimizar a informação:**\nProteja dados sensíveis. Ex: "Escreve um email dirigido ao munícipe X, sobre o pedido de informações acerca do processo Y".\n\n**Iterar:**\nNão aceite a primeira resposta. Ex: "Melhora a tua resposta anterior. O texto deve ser mais formal e não deve conter termos como 'usuário'".\n\n**Auto-crítica:**\nPeça à IA para se corrigir. Ex: "Revê criticamente a tua resposta e sugere áreas de melhoria. Aplica as melhorias e apresenta o plano final revisto."`
  },
  {
    id: 7,
    icon: "shield-check",
    content: "Privacidade: O Que Nunca Partilhar",
    details: `**A Regra de Ouro:**\nSe está a usar uma IA pública/gratuita, os seus dados podem ser usados para treino.\n\n**Conceito Chave:**\nNunca partilhe **dados pessoais sensíveis (PII)**, informações financeiras, senhas ou segredos comerciais. Use a técnica da Substituição Segura (ex: usar dados fictícios ou "Cliente A" em vez de nomes reais).`
  },
  {
    id: 8,
    icon: "bot",
    content: "Agentes de IA Copilot: Assistentes Personalizados",
    details: `**A Definição:**\nUm Agente de IA (como o "Mestre de Prompts") não é apenas um chat genérico.\n\n**Conceito Chave:**\nÉ uma versão da IA configurada com **instruções específicas** para realizar tarefas concretas. O seu **papel, tom e regras** são definidos previamente pelo utilizador para garantir consistência e eficácia numa função especializada.`
  },
  {
    id: 9,
    icon: "cloud-lightning",
    content: "Conceito «Equipa ON»: Trabalho Moderno",
    details: `**A Definição:**\nO modelo de trabalho antigo baseava-se em enviar ficheiros por email ("v1", "v2_final").\n\n**A Mudança:**\nUma "Equipa ON" trabalha onde os documentos **vivem na nuvem** (Teams/SharePoint), existe uma **única versão** para cada ficheiro (single source of truth) e a edição é feita em **tempo real e em simultâneo** por vários colegas (co-autoria).`
  },
  {
    id: 10,
    icon: "search",
    content: "Investigação: Copilot Web vs. Grounding",
    details: `**A Estratégia:**\nSaber onde a IA vai buscar a informação é crucial para evitar erros.\n\n**Conceito Chave:**\n*   **Copilot Web:** Usa a pesquisa na internet para encontrar factos recentes (notícias de hoje).\n*   **Grounding (Ancoragem):** Obriga a IA a responder baseando-se **exclusivamente nos seus documentos internos** (Word, PDF) ou links fornecidos, garantindo que não inventa dados externos.`
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
