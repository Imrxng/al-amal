import React, { useState } from 'react';
import ContainerTitle from './ContainerTitle';
import LinkButton from './LinkButton';
import HomeHadieth from './HomeHadieth';

const IntroDoneren = () => {
  const [amount, setAmount] = useState<string>('');
  const [method, setMethod] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  const [cardHolder, setCardHolder] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const submitHandler: React.MouseEventHandler<HTMLButtonElement> = async () => {
    if (!amount || !method) {
      setMessage('Alle velden zijn verplicht');
      setError(true);
      return;
    }

    if (method === 'kaart' && (!cardNumber || !expiry || !cvc || !cardHolder)) {
      setMessage('Vul alle kaartgegevens in');
      setError(true);
      return;
    }

    setLoading(true);
    setMessage('Verzenden..');
    setError(false);

    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          method,
          cardNumber,
          expiry,
          cvc,
          cardHolder,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Betaling succesvol');
        setError(false);
      } else {
        setMessage(result.error || 'Er is iets mis gegaan');
        setError(true);
      }
    } catch (err) {
      setMessage('Netwerkfout, probeer het opnieuw');
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
      .slice(0, 19);
  };

  const formatExpiry = (value: string) => {
    let formattedValue = value.replace(/\D/g, '');
    if (formattedValue.length >= 2 && formattedValue.length <= 4) {
      formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
    }
    return formattedValue.slice(0, 5);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedAmount = inputValue.replace(/[^\d,]/g, '');
    setAmount(formattedAmount);
  };

  const handleBlur = () => {
    const parsedAmount = parseFloat(amount.replace(',', '.'));

    if (isNaN(parsedAmount)) {
      setError(true);
      setMessage('Ongeldig bedrag.');
    } else if (parsedAmount < 2) {
      setError(true);
      setMessage('Het ingevoerde bedrag voldoet niet aan het minimum van 2 euro.');
    } else if (parsedAmount > 5000) {
      setError(true);
      setMessage('Het ingevoerde bedrag is groter dan de limiet van 5000.');
    } else {
      setError(false);
      setMessage('');
      setAmount(parsedAmount.toFixed(2).replace('.', ','));
    }
  };


  return (
    <div>
      <ContainerTitle link={'/doneren'} title={'Doneren'} />
      <div id='doneren-container'>
        <div id='doneren-payment'>
          <h2>Hoe wilt u doneren?</h2>
          <div id='buttons-doneren'>
            <LinkButton href={'/doneren'} content={'Eenmalig'} />
            <LinkButton href={'/lid-worden'} content={'Maandelijks'} />
          </div>
          <label htmlFor='amount'>Bedrag in &euro; <span id='red'>*</span></label>
          <input
            type='text'
            id='amount'
            value={amount ? `€ ${amount}` : ''}
            onChange={handleAmountChange}
            onBlur={handleBlur}
            required
          />
          <label htmlFor='method'>Betaalmethode</label>
          <select name='method' id='method' onChange={(e) => setMethod(e.target.value)}>
            <option value="" selected={method === ''} disabled hidden >--Geselecteerd--</option>
            <option value='kbc' selected={method === 'kbc'}>KBC/CBC-Betaalknop</option>
            <option value='belfius' selected={method === 'belfius'} >Belfius Pay Button</option>
            <option value='bancontact' selected={method === 'bancontact'} >Bancontact</option>
            <option value='ideal' selected={method === 'ideal'} >iDEAL</option>
            <option value='kaart' selected={method === 'kaart'} >Kaart</option>
          </select>
          {method === 'kaart' ? (
            <>
              <label htmlFor='card-number'>Kaartnummer <span id='red'>*</span></label>
              <input
                type='tel'
                inputMode='numeric'
                pattern='[0-9]{13,19}'
                maxLength={19}
                placeholder='1234 5678 9012 3456'
                autoComplete='cc-number'
                required
                name='card-number'
                id='card-number'
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              />
              <label htmlFor='expiry'>Vervaldatum <span id='red'>*</span></label>
              <input
                type='text'
                inputMode='numeric'
                autoComplete='cc-exp'
                placeholder='MM/YY'
                id='expiry'
                value={expiry}
                name='expiry'
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              />
              <label htmlFor="cvc">Beveiligingscode <span id='red'>*</span></label>
              <input
                type="text"
                placeholder="CVV"
                name='cvc'
                id='cvc'
                maxLength={4}
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
              />
              <label htmlFor="cardHolder">Naam kaarthouder <span id='red'>*</span></label>
              <input
                type="text"
                placeholder="Naam zoals op de kaart"
                name='cardHolder'
                id='cardHolder'
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
              />
            </>
          ) : null}
          <button id='formbutton' onClick={submitHandler}>Verzenden</button>
          <div id="message-container">
            <p style={{
              color: message === 'Verzenden..' ? 'black' : (error ? 'red' : 'green'),
              marginTop: '10px', fontSize: '16px'
            }}>
              {message}
              {loading && <span className="spinner"></span>}
            </p>
          </div>
        </div>
        <HomeHadieth containerHeight={'40rem'} padding={'2rem 2rem 5rem 5rem'} hadieth={'De Profeet (vrede zij met hem) zei: "Bewaak jezelf tegen de Hel, zelfs door het geven van de helft van een dadel in liefdadigheid."'} overgeleverd={'Overgeleverd door Al-Bukhari en Muslim'} />
      </div>
    </div>
  );
};

export default IntroDoneren;
