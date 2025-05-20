import type { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from 'cheerio'; 

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
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Netwerkfout bij het ophalen van de HTML");
      }
      const html = await response.text();
      const $ = cheerio.load(html);
      const scriptContent =$.html();
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
    const prayerTimes = await getPrayerTimesFromWebsite();
    res.status(200).json(prayerTimes);
  } catch (error) {
    res.status(500).json({ fajr: "", dhoehr: "", asr: "", maghrib: "", ishaa: "" });
  }
}