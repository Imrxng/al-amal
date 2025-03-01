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
    service: 'gmail', 
    auth: {
      user: 'imrantetouane@gmail.com',
      pass: '',
    },
  });

  const mailOptions = {
    from: 'imrantetouane@gmail.com',
    to: 'imgha@hotmail.com', 
    subject: 'Nieuw formulier verzonden',
    html: `
      <h3>Nieuwe formuliergegevens:</h3>
      <ul>
        <li>Naam: ${formData.name} ${formData.surname}</li>
        <li>Telefoon: ${formData.phone}</li>
        <li>E-mail: ${formData.email}</li>
        <li>Type vraag: ${formData.type}</li>
        <li>Bericht: ${formData.messageText}</li>
      </ul>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('E-mail succesvol verzonden!');
  } catch (error) {
    console.error('Fout bij het verzenden van de e-mail:', error);
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, surname, phone, email, type, messageText }: FormData = req.body;

    if (!name || !email || !messageText) {
      return res.status(400).json({ message: 'Alle verplichte velden moeten worden ingevuld.' });
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