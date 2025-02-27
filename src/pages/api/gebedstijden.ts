import type { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from 'cheerio'; 
import { log } from "console";

type Data = {
  fajr: string;
  dhoehr: string;
  asr: string;
  maghrib: string;
  ishaa: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  async function getPrayerTimesFromWebsite() {
    const url = 'https://mawaqit.net/nl/w/alamal-antwerpen?showOnly5PrayerTimes=0';

    try {
      // Haal de HTML op van de website
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Netwerkfout bij het ophalen van de HTML");
      }

      // Verkrijg de HTML als tekst
      const html = await response.text();
      
      // Laad de HTML in cheerio om deze te parseren
      const $ = cheerio.load(html);

      // Zoek naar het script dat de array bevat
      const scriptContent =$.html();
      console.log(scriptContent);
      console.log('h');
      
      // Zoek de data binnen de script tag, bijvoorbeeld een JSON-achtige structuur
      const confDataMatch = scriptContent?.match(/var confData = ({.*?});/);

      if (confDataMatch) {
        const confData = JSON.parse(confDataMatch[1]);

        const times = confData.times;

        return {
          fajr: times[0] || '',
          dhoehr: times[1] || '',
          asr: times[2] || '',
          maghrib: times[3] || '',
          ishaa: times[4] || '',
        };
      } else {
        throw new Error("De configuratiegegevens zijn niet gevonden.");
      }

    } catch (error) {
      console.error("Fout bij het ophalen van de gebedstijden:", error);
      throw error;
    }
  }

  try {
    // Haal de gebedstijden op en stuur ze terug naar de client
    const prayerTimes = await getPrayerTimesFromWebsite();
    res.status(200).json(prayerTimes);
  } catch (error) {
    res.status(500).json({ fajr: "", dhoehr: "", asr: "", maghrib: "", ishaa: "" });
  }
}
