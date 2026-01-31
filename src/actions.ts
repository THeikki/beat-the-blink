import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";

const google = createGoogleGenerativeAI({
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
});

const prompt =
  "Luo 10 haastavaa tietovisakysymystä suomeksi. Vastaukset yhdellä sanalla. ÄLÄ kysy Suomen pääkaupunkia tai muita itsestäänselvyyksiä.";

export async function getQuestions() {
  try {
    const { object } = await generateObject({
      model: google("gemini-2.5-flash"),
      schema: z.object({
        questions: z
          .array(
            z.object({
              q: z.string(),
              a: z.string(),
            }),
          )
          .length(10),
      }),
      temperature: 0.8,
      prompt: prompt,
    });

    return { success: true, data: object.questions };
  } catch (error) {
    console.error("AI Error:", error);
    return { success: false, error: "Tekoäly yhteys epäonnistui" };
  }
}
