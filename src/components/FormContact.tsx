import { FormData } from '@/types/types';
import dynamic from 'next/dynamic';
import React, { useMemo, useState } from 'react';

const FormContact = () => {
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [messageText, setMessageText] = useState<string>('');

  const DynamicMap = useMemo(() => dynamic(() => import('@/components/Map'), { ssr: false }), []);
  
  const submitHandler: React.MouseEventHandler<HTMLButtonElement> = async () => {
    setLoading(true);
    setMessage('');

    const trimmedName = name.trim();
    const trimmedSurName = surname.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = messageText.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+]+$/;

    if (!trimmedName) {
      setLoading(false);
      setError(true);
      setMessage('Voornaam is verplicht.');
      return;
    }

    if (!trimmedSurName) {
      setLoading(false);
      setError(true);
      setMessage('Achternaam is verplicht.');
      return;
    }

    if (!trimmedEmail) {
      setLoading(false);
      setError(true);
      setMessage('E-mailadres is verplicht.');
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setLoading(false);
      setError(true);
      setMessage('Voer een geldig e-mailadres in.');
      return;
    }

    if (phone && !phoneRegex.test(phone)) {
      setLoading(false);
      setError(true);
      setMessage('Telefoonnummer mag alleen cijfers en '+' bevatten.');
      return;
    }

    if (!type) {
      setLoading(false);
      setError(true);
      setMessage('Selecteer een type vraag.');
      return;
    }

    if (!trimmedMessage) {
      setLoading(false);
      setError(true);
      setMessage('Bericht mag niet leeg zijn.');
      return;
    }

    setMessage('Verzenden..');

    const formData: FormData = {
      name: trimmedName,
      surname,
      phone,
      email: trimmedEmail,
      type,
      messageText: trimmedMessage,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Er is iets mis gegaan bij het verzenden.');
      }

      const result = await response.json();
      if (result.success) {
        setMessage('Bericht succesvol verzonden!');
        setError(false);
      } else {
        setMessage('Er is een fout opgetreden.');
        setError(true);
      }
    } catch (error) {
      console.error('Fout bij verzenden:', error);
      setMessage('Er is een fout opgetreden.');
      setError(true);
    } finally {
      setLoading(false);
      setName('');
      setSurname('');
      setPhone('');
      setEmail('');
      setType('');
      setMessageText('');
    }
  };

  return (
    <div id='form-contact-container'>
      <div id='form-contact-content'>
        <label htmlFor='name'>Voornaam <span id='red'>*</span></label>
        <input id='name' type='text' name='name' value={name} required onChange={(e) => setName(e.target.value)} />
        
        <label htmlFor='surname'>Achternaam <span id='red'>*</span></label>
        <input id='surname' type='text' name='surname' required value={surname} onChange={(e) => setSurname(e.target.value)} />
        
        <label htmlFor='phone'>Telefoonnummer</label>
        <input id='phone' type='text' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
        
        <label htmlFor='email'>E-mailadres <span id='red'>*</span></label>
        <input id='email' type='email' name='email' value={email} required onChange={(e) => setEmail(e.target.value)} />
        
        <label htmlFor='type'>Type vraag <span id='red'>*</span></label>
        <select id='type' name='type' required onChange={(e) => setType(e.target.value)}>
          <option value='' selected={type === ''} disabled hidden>-- Geselecteerd --</option>
          <option value='Religieuze en persoonlijke vraagstukken' selected={type === 'Religieuze en persoonlijke vraagstukken'}>Religieuze en persoonlijke vraagstukken</option>
          <option value='Weekendonderwijs' selected={type === 'Weekendonderwijs'}>Weekendonderwijs</option>
          <option value='Volwassenenonderwijs' selected={type === 'Volwassenenonderwijs'}>Volwassenenonderwijs</option>
          <option value='Islamsponsoren' selected={type === 'Islamsponsoren'}>Islamsponsoren</option>
          <option value='Begeleiding van nieuwe moslims' selected={type === 'Begeleiding van nieuwe moslims'}>Begeleiding van nieuwe moslims</option>
          <option value='Rondleidingen' selected={type === 'Rondleidingen'}>Rondleidingen</option>
          <option value='ICT en techniek' selected={type === 'ICT en techniek'}>ICT en techniek</option>
          <option value='Bestuurlijke zaken' selected={type === 'Bestuurlijke zaken'}>Bestuurlijke zaken</option>
          <option value='Anders..' selected={type === 'Anders..'}>Anders..</option>
        </select>
        
        <label htmlFor='message'>Bericht <span id='red'>*</span></label>
        <textarea id='message' name='message' required cols={30} rows={10} value={messageText} onChange={(e) => setMessageText(e.target.value)}></textarea>
        
        <button id='formbutton' onClick={submitHandler}>Verzenden</button>
        
        <div id='message-container'>
          <p style={{
            color: message === 'Verzenden..' ? 'black' : (error ? 'red' : 'green'),
            marginTop: '10px'
          }}>
            {message}
            {loading && <span className='spinner'></span>}
          </p>
        </div>      
      </div>

      <div id='map-container'>
        <div id='map-content'>
          <h3>CONTACT INFO</h3>
          <h2>ECC De Hoop</h2>
          <div id='map-content-info'>
            <h3>Handelsnaam:</h3>
            <p>Educatief en Cultureel Centrum De Hoop vzw</p>
            <h3>Vestigingsadres:</h3>
            <p>Palinckstraat 124,</p>
            <p>2100 Deurne</p>
            <h3>Telefoonnummer:</h3>
            <p>+32488413095</p>
            <h3>E-mailadres:</h3>
            <p>moskee.alamal@gmail.com</p>
            <h3>Bankrekeningnummer:</h3>
            <p>BE60 0004 6421 0270</p>
          </div>
        </div>
        <DynamicMap />
      </div>
    </div>
  );
};

export default FormContact;
