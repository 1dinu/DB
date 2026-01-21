
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateMenuSuggestion = async (eventType: string, guestCount: number, preferences: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Suggest a curated Sri Lankan fusion menu for a ${eventType} with ${guestCount} guests. 
              The user's additional preferences are: ${preferences}.
              Droselle Bakes specializes in customized cakes, savory items (like rolls, patties), 
              and traditional sweets (like Kokis, Kavum, Watalappam) with a modern twist.
              Provide 3 savory options, 2 traditional sweets, and 1 signature dessert.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          introduction: { type: Type.STRING },
          menuItems: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                description: { type: Type.STRING },
                category: { type: Type.STRING }
              },
              required: ["name", "description", "category"]
            }
          },
          closingNote: { type: Type.STRING }
        },
        required: ["introduction", "menuItems", "closingNote"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return null;
  }
};
