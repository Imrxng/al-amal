import React, { useState } from 'react';
import ContainerTitle from './ContainerTitle';
import LinkButton from './LinkButton';

const IntroLidWorden = () => {
    const [selectedAmount, setSelectedAmount] = useState<string>('');
    const [customAmount, setCustomAmount] = useState<string>('');

    const handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        if (event.target.value === 'other') {
            setSelectedAmount(event.target.value);
        } else {
            setSelectedAmount(event.target.value);
        }
    };

    const formatAmount = (amount: string) => {
        let cleanAmount = amount.replace(/[^0-9,]/g, '');
        cleanAmount = cleanAmount.replace(/^0+/, '');
        const parts = cleanAmount.split(',');

        if (parts.length > 2) return parts[0] + ',' + parts[1].slice(0, 2);
        if (parts.length === 2 && parts[1].length > 2) return parts[0] + ',' + parts[1].slice(0, 2);
        return cleanAmount;
    };
    const handleCustomAmountChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const inputValue = event.target.value;
        const formattedValue = formatAmount(inputValue);

        if (formattedValue === '' || formattedValue === '€ ') {
            setCustomAmount('0');
        } else {
            const numericValue = parseFloat(formattedValue.replace(',', '.'));
            if (numericValue <= 1000) {
                setCustomAmount(formattedValue);
            }
        }
    };
    return (
        <div>
            <ContainerTitle link={'/lid-worden'} title={'Word jij ons sponsor?'} linkTitle={'lid-worden'} />
            <div id='lid-worden-container'>
                <div id='lid-worden-form'>
                    <h2>Doorlopende machtiging</h2>
                    <div className="lid-worden-form-container" >
                        <div className='lid-worden-form-column'>
                            <div className='lid-worden-form-info'>
                                <p>Naam:</p>
                            </div>
                            <div className='lid-worden-form-info'>
                                <p>Adres:</p>
                            </div>
                            <div className='lid-worden-form-info'>
                                <p>Postcode:</p>
                            </div>
                            <div className='lid-worden-form-info'>
                                <p>Plaats, land:</p>
                            </div>
                            <div className='lid-worden-form-info'>
                                <p>Incassant ID:</p>
                            </div>
                            <div className='lid-worden-form-info'>
                                <p>Reden:</p>
                            </div>
                        </div>
                        <div className='lid-worden-form-column'>
                            <div className='lid-worden-form-info'>
                                <p>Educatief en Cultureel Centrum De Hoop vzw</p>
                            </div>
                            <div className='lid-worden-form-info'>
                                <p>Palinckstraat 124</p>
                            </div>
                            <div className='lid-worden-form-info'>
                                <p>2100</p>
                            </div>
                            <div className='lid-worden-form-info'>
                                <p>Deurne, België</p>
                            </div>
                            <div className='lid-worden-form-info'>
                                <p>BE43RANDOM345</p>
                            </div>
                            <div className='lid-worden-form-info'>
                                <p>Lidgeld</p>
                            </div>
                        </div>
                    </div>
                    <div id='incasso-info'>
                        <p>
                            Door ondertekening van dit formulier geeft u toestemming aan Educatief en Cultureel Centrum de Hoop om doorlopende incassopdrachten te sturen naar uw bank om een bedrag van uw rekening af te schrijven en aan uw bank om doorlopend een bedrag van uw rekening af te schrijven overeenkomstig de opdracht van Educatief en Cultureel Centrum de Hoop. Als u het niet eens bent met deze afschrijving kunt u deze laten terugboeken. Neem hiervoor binnen 8 weken na afschrijving contact op met uw bank. Vraag uw bank naar de voorwaarden.
                        </p>
                        <p>
                            Als u zich wilt afmelden als donateur, stuurt u dan een e-mail naar <a href="mailto:info@dehoop.nl">info@dehoop.nl</a>. Als u dat doet voor de 20e van de lopende maand, stopt de afschrijving nog diezelfde maand. Als u zich afmeldt na de 20e wordt die lopende maand nog wel afgeschreven. Dit hangt samen met de datum waarop we onze bank de opdracht voor de incasso geven. We danken u voor uw begrip.
                        </p>
                        <p>
                            Ondergetekende geeft, totdat de machtiging wordt ingetrokken, toestemming het navolgende bedrag maandelijks af te schrijven:
                        </p>
                    </div>

                    <label htmlFor="amount">Bedrag <span id='red'>*</span></label>
                    <div id='checkboxes-lid-worden'>
                        <label>
                            <input
                                type="radio"
                                name="amount"
                                value="10"
                                checked={selectedAmount === '10'}
                                onChange={handleCheckboxChange}
                            />
                            Maandelijkse sponsoring met €10
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="amount"
                                value="20"
                                checked={selectedAmount === '20'}
                                onChange={handleCheckboxChange}
                            />
                            Maandelijkse sponsoring met €20
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="amount"
                                value="50"
                                checked={selectedAmount === '50'}
                                onChange={handleCheckboxChange}
                            />
                            Maandelijkse sponsoring met €50
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="amount"
                                value="other"
                                checked={selectedAmount === 'other'}
                                onChange={handleCheckboxChange}
                            />
                            Anders, maandelijkse sponsoring met ander bedrag ...
                        </label>
                        {selectedAmount === 'other' && (
                            <div>
                                <label htmlFor="customAmount">Voer hier het bedrag in wat u maandelijks wilt sponsoren: <span id='red'>*</span></label>
                                <input
                                    type="text"
                                    id="customAmount"
                                    value={'€ ' + customAmount}
                                    onChange={handleCustomAmountChange}
                                    required
                                />
                                <p>Het minimale bedrag is €10,00 en het maximum is €1000,00.</p>
                            </div>
                        )}
                    </div>
                    <label htmlFor="name">Naam <span id='red'>*</span></label>
                    <label htmlFor="surname"></label>
                    <div id='lid-worden-naam-container'>
                        <input type="text" name="name" id="lid-worden-naam" placeholder='Voornaam' />
                        <input type="text" name="surname" id="lid-worden-naam" placeholder='Achternaam' />
                    </div>
                </div>
                <div id='buttons-lid-worden'>
                    <LinkButton href={'/doneren'} content={'Eenmalig'} />
                    <LinkButton href={'/lid-worden'} content={'Maandelijks'} />
                </div>
            </div>
        </div>
    );
}

export default IntroLidWorden;