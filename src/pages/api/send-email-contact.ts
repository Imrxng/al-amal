import { log } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type FormData = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  type: string;
  messageText: string;
};

const sendEmail = async (formData: FormData) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.APP_MAIL_GMAIL,
      pass: process.env.APP_PASSWORD_GMAIL,
    },
  });

  const adminMailOptions = {
    from: process.env.APP_MAIL_GMAIL,
    to: 'moskee.alamal@gmail.com',
    subject: 'Nieuw formulier ontvangen',
    html: `
 <div style="
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #FFFFFF;
  color: #1F4E5F;
  padding: 24px;
  max-width: 600px;
  margin: auto;
  border-radius: 8px;
  border: 2px solid #1F4E5F;
">
  <p style="font-size: 16px; margin-bottom: 16px; color: #58595b;">
    De volgende gegevens zijn verzonden via het contactformulier:
  </p>
  <table role="presentation" style="width: 100%; border-collapse: collapse; font-size: 16px; color: #1F4E5F;">
    <tbody>
      <tr style="background-color: #e2e0e0;">
        <td style="padding: 12px; font-weight: 600; width: 150px;">Naam:</td>
        <td style="padding: 12px;">${formData.name} ${formData.surname}</td>
      </tr>
      <tr>
        <td style="padding: 12px; font-weight: 600;">Telefoon:</td>
        <td style="padding: 12px;">${formData.phone}</td>
      </tr>
      <tr style="background-color: #e2e0e0;">
        <td style="padding: 12px; font-weight: 600;">E-mail:</td>
        <td style="padding: 12px;">${formData.email}</td>
      </tr>
      <tr>
        <td style="padding: 12px; font-weight: 600;">Type vraag:</td>
        <td style="padding: 12px;">${formData.type}</td>
      </tr>
      <tr style="background-color: #e2e0e0;">
        <td style="padding: 12px; font-weight: 600; vertical-align: top;">Bericht:</td>
        <td style="padding: 12px; white-space: pre-wrap;">${formData.messageText}</td>
      </tr>
    </tbody>
  </table>
</div>

`,
  };

  const userMailOptions = {
    from: process.env.APP_MAIL_GMAIL,
    to: formData.email,
    subject: 'Bedankt voor je bericht',
    html: `
   <div style="
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #FFFFFF;
  color: #1F4E5F;
  padding: 24px;
  max-width: 600px;
  margin: auto;
  border-radius: 8px;
  border: 2px solid #1F4E5F;
">
  <p style="font-size: 16px; margin-bottom: 16px; color: #1F4E5F;">
    Beste ${formData.name},
  </p>
  <p style="font-size: 16px; margin-bottom: 16px; color: #58595b;">
    Bedankt voor het invullen van het contactformulier. We hebben je bericht goed ontvangen en nemen zo snel mogelijk contact met je op.
  </p>
  <p style="font-size: 16px; color: #1F4E5F;">
    Met vriendelijke groet,<br>
    <strong>Ecc De Hoop</strong>
  </p>
</div>

  `,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    console.log('E-mail naar admin verzonden');
    await transporter.sendMail(userMailOptions);
    console.log('Bevestiging naar gebruiker verzonden');
  } catch (error) {
    console.error('Fout bij het verzenden van de e-mails:', error);
    throw error;
  }
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, surname, phone, email, type, messageText }: FormData = req.body.formData;
    const { token } = req.body;


    if (!name || !email || !messageText) {
      return res.status(400).json({ message: 'Alle verplichte velden moeten worden ingevuld.' });
    }

    if (!token) {
      return res.status(400).json({ message: 'Captcha-token ontbreekt.' });
    }
    try {
      const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || '',
          response: token,
        }),
      });

      const captchaData = await captchaResponse.json();

      const { success } = captchaData;

      if (!success) {
        return res.status(403).json({ message: 'Captcha-validatie mislukt.' });
      }

    } catch (captchaError) {
      return res.status(500).json({ message: 'Fout bij captcha-validatie.' });
    }

    try {
      await sendEmail({ name, surname, phone, email, type, messageText });
      return res.status(200).json({ message: 'Formulier succesvol verzonden!' });
    } catch (error) {
      return res.status(500).json({ message: 'Er is een fout opgetreden bij het verzenden van het formulier.' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}