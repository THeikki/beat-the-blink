import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";

export const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

const prompt =
  "Luo 10 haastavaa tietovisakysymystä suomeksi. Vastaukset yhdellä sanalla. ÄLÄ kysy Suomen pääkaupunkia tai muita itsestäänselvyyksiä.";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { object } = await generateObject({
      model: google("gemini-2.5-flash"),
      schema: z.object({
        questions: z.array(
          z.object({
            q: z.string(),
            a: z.string(),
          })
        ).length(10),
      }),
      temperature: 0.8,
      prompt: prompt,
    });

    return res.status(200).json(object.questions);
  } catch (error) {
    console.error("AI Error:", error);
    return res.status(500).json({ error: "Tekoälyyhteys epäonnistui" });
  }
}
