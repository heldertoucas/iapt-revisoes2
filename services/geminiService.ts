import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

export const initializeAI = () => {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
};

export const getTipContext = async (tipContent: string): Promise<string> => {
  // Check if API Key is available, if not, we can't really fetch.
  // However, the app structure handles error states.
  if (!ai) {
    initializeAI();
    if (!ai) {
       throw new Error("API Key not found. Please configure your environment.");
    }
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Aja como um instrutor especialista em Engenharia de Prompt e Inteligência Artificial.
      O utilizador está a aprender a usar o ChatGPT de forma profissional.
      
      Conselho atual: "${tipContent}"
      
      Tarefa:
      1. Explique brevemente PORQUÊ este conselho é importante (max 2 frases).
      2. Dê um EXEMPLO prático curto de como aplicar isso num prompt ou fluxo de trabalho.
      
      Formato de resposta:
      Use Markdown. Seja conciso, profissional e encorajador.
    `;

    const response = await ai!.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Não foi possível gerar o contexto.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Falha ao conectar com a IA para expandir o tópico.");
  }
};