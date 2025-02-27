import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from 'puppeteer';

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
    const url = 'https://mawaqit.net/nl/m/alamal-antwerpen';
    
    try {
      // Start de Puppeteer browser
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'domcontentloaded' });

      // Wacht op de juiste elementen om te laden
      await page.waitForSelector('.prayer-times');

      // Haal de gebedstijden op van de pagina
      const prayerTimes = await page.evaluate(() => {
        const fajr = document.querySelector('.prayer-times .fajr .time')?.textContent || '';
        const dhoehr = document.querySelector('.prayer-times .dhoehr .time')?.textContent || '';
        const asr = document.querySelector('.prayer-times .asr .time')?.textContent || '';
        const maghrib = document.querySelector('.prayer-times .maghrib .time')?.textContent || '';
        const ishaa = document.querySelector('.prayer-times .ishaa .time')?.textContent || '';
        
        return { fajr, dhoehr, asr, maghrib, ishaa };
      });

      await browser.close();

      return prayerTimes;
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
