import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getChatResponse(userMessage: string, history: { role: "user" | "model", parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [{ text: "Você é o assistente de suporte do site 'QR Code Styling'. Você ajuda os usuários a criar, personalizar e baixar códigos QR. Seja amigável, conciso e útil. O site permite mudar cores, estilos de pontos, adicionar logos e baixar em PNG, SVG, JPEG e WEBP. Se o usuário perguntar algo fora do contexto do site, tente trazer de volta para o assunto de QR Codes." }],
        },
        {
          role: "model",
          parts: [{ text: "Entendido! Estou pronto para ajudar os usuários do QR Code Styling." }],
        },
        ...history.map(h => ({
          role: h.role,
          parts: h.parts
        })),
        {
          role: "user",
          parts: [{ text: userMessage }]
        }
      ],
    });

    return response.text || "Desculpe, não consegui gerar uma resposta.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, tive um problema técnico ao processar sua mensagem. Como posso ajudar com seu QR Code?";
  }
}
