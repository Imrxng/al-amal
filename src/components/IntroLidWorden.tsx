import React, { useRef, useState } from 'react';
import ContainerTitle from './ContainerTitle';
import LinkButton from './LinkButton';
import HomeHadieth from './HomeHadieth';
import ReCAPTCHA from 'react-google-recaptcha';

const IntroLidWorden = () => {
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const [verified, setVerified] = useState<boolean>(false);
    const [formErrors, setFormErrors] = useState<string[]>([]);
    const [selectedAmount, setSelectedAmount] = useState<string>('');
    const [customAmount, setCustomAmount] = useState<string>('');
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        address: '',
        postcode: '',
        stad: '',
        country: 'België',
        telefoon: '',
        email: '',
        iban: '',
        ibanTen: '',
        bic: '',
        toestemming: false
    });

    const countries = ["Afghanistan", "Aland-eilanden", "Albanië", "Algerije", "Amerikaans Samoa", "Amerikaanse Maagdeneilanden", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua en Barbuda", "Arabische Republiek Syrië", "Argentinië", "Armenië", "Aruba", "Australië", "Azerbeidzjan", "Bahama's", "Bahrein", "Bangladesh", "Barbados", "België", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Sint Eustatius en Saba", "Bosnië en Herzegovina", "Botswana", "Bouvet eiland", "Brazilië", "Brits-Indisch oceaan gebied", "Britse Maagdeneilanden", "Brunei Darussalam", "Bulgarije", "Burkina Faso", "Burundi", "Cambodja", "Canada", "Centraal-Afrikaanse Republiek", "Chili", "China", "Cocoseilanden", "Colombia", "Comoren", "Congo", "Congo, Democratische Republiek", "Cook eilanden", "Costa Rica", "Cuba", "Curaçao", "Cyprus", "Denemarken", "Djibouti", "Dominica", "Dominicaanse Republiek", "Duitsland", "Ecuador", "Egypte", "El Salvador", "Equatoriaal-Guinea", "Eritrea", "Estland", "Eswatini", "Ethiopië", "Faeröer", "Falkland eilanden", "Fiji", "Filipijnen", "Finland", "Frankrijk", "Frans Guyana", "Frans-Polynesië", "Franse zuidelijke gebieden", "Gabon", "Gambia", "Georgië", "Ghana", "Gibraltar", "Grenada", "Griekenland", "Groenland", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinee", "Guinee-Bissau", "Guyana", "Haïti", "Heard Eiland en McDonald Eilanden", "Honduras", "Hong Kong", "Hongarije", "IJsland", "Ierland", "India", "Indonesië", "Irak", "Iran", "Israël", "Italië", "Ivoorkust", "Jamaica", "Japan", "Jersey", "Jordanië", "Kaaimaneilanden", "Kaapverdië", "Kameroen", "Kazachstan", "Kenia", "Kersteiland", "Kirgizië", "Kiribati", "Kleine eilanden van de Verenigde Staten", "Koeweit", "Korea, Democratische Volksrepubliek", "Korea, Republiek van", "Kroatië", "Lao Democratische Volksrepubliek", "Lesotho", "Letland", "Libanon", "Liberia", "Libië", "Liechtenstein", "Litouwen", "Luxemburg", "Macau", "Madagaskar", "Malawi", "Maldiven", "Maleisië", "Mali", "Malta", "Man", "Marokko", "Marshalleilanden", "Martinique", "Mauritanië", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldavië", "Monaco", "Mongolië", "Montenegro", "Montserrat", "Mozambique", "Myanmar", "Namibië", "Nauru", "Nederland", "Nepal", "Nicaragua", "Nieuw-Caledonië", "Nieuw-Zeeland", "Niger", "Nigeria", "Niue", "Noord-Macedonië", "Noordelijke Marianen", "Noorwegen", "Norfolk eiland", "Oeganda", "Oekraïne", "Oezbekistan", "Oman", "Oostenrijk", "Pakistan", "Palau", "Palestina, Staat", "Panama", "Papoea-Nieuw-Guinea", "Paraguay", "Peru", "Pitcairn", "Polen", "Portugal", "Puerto Rico", "Qatar", "Roemenië", "Russische Federatie", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Kitts en Nevis", "Saint Lucia", "Saint Pierre en Miquelon", "Saint Vincent en de Grenadines", "Salomonseilanden", "Samoa", "San Marino", "Sao Tomé en Principe", "Saoedi-Arabië", "Senegal", "Servië", "Seychellen", "Sierra Leone", "Singapore", "Sint Maarten", "Sint-Helena, Hemelvaart en Tristan da Cunha", "Slovenië", "Slowakije", "Soedan"];
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id.replace('address-lid-', '')]: type === 'checkbox' ? checked : value
        }));
    };

    const handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSelectedAmount(e.target.value);
    };

    const formatAmount = (amount: string) => {
        let clean = amount.replace(/[^0-9,]/g, '').replace(/^0+/, '');
        const parts = clean.split(',');
        if (parts.length > 2) return parts[0] + ',' + parts[1].slice(0, 2);
        return parts[0] + (parts[1] ? ',' + parts[1].slice(0, 2) : '');
    };

    const handleCustomAmountChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const formatted = formatAmount(e.target.value);
        const numericValue = parseFloat(formatted.replace(',', '.')) || 0;
        if (numericValue <= 1000) {
            setCustomAmount(formatted);
        }
    };

    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id.replace('address-lid-', '')]: value
        }));
    };
    const validateFields = (token: string | null) => {
        const errors = [];

        if (!selectedAmount || (selectedAmount === 'other' && !customAmount)) errors.push('Bedrag is verplicht');
        if (!formData.name.trim()) errors.push('Voornaam is verplicht');
        if (!formData.surname.trim()) errors.push('Achternaam is verplicht');
        if (!formData.address.trim()) errors.push('Adres is verplicht');
        if (!formData.postcode.trim()) errors.push('Postcode is verplicht');
        if (!formData.stad.trim()) errors.push('Stad is verplicht');
        if (selectedAmount === 'other') {
            const numericValue = parseFloat(customAmount.replace(',', '.'));
            if (numericValue < 10) {
                errors.push('Minimaal bedrag is €10,00');
            }
        }
        if (!/^\+?[0-9]{6,15}$/.test(formData.telefoon.trim())) {
            errors.push('Ongeldig telefoonnummer');
        }
        if (!formData.telefoon.match(/^(\+32|0)4\d{8}$/)) errors.push('Ongeldig telefoonnummer');
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.push('Ongeldig e-mailadres');
        if (!formData.iban.trim()) errors.push('IBAN is verplicht');
        if (!formData.ibanTen.trim()) errors.push('IBAN ten name van is verplicht');
        if (!formData.toestemming) errors.push('Toestemming is verplicht');
        if (!selectedAmount) {
            errors.push('Kies een bedrag');
        } else if (selectedAmount === 'other') {
            const numericValue = parseFloat(customAmount.replace(',', '.'));
            if (isNaN(numericValue)) {
                errors.push('Vul een geldig bedrag in');
            } else if (numericValue < 10) {
                errors.push('Minimaal bedrag is €10,00');
            } else if (numericValue > 1000) {
                errors.push('Maximaal bedrag is €1000,00');
            }
        }
        if (!token) {
            errors.push('ReCAPTCHA verificatie is verplicht');
        }
        return errors;
    };

    const handleSubmit = async () => {
        const token = recaptchaRef.current?.getValue() ?? null;

        const errors = validateFields(token);
        if (errors.length > 0) {
            setFormErrors(errors);
            return;
        }
        setFormErrors([]);

        const payload = {
            ...formData,
            bedrag: selectedAmount === 'other' ? customAmount : selectedAmount,
            token: token
        };

        console.log('Verzonden data:', payload);
    };

    return (
        <div>
            <ContainerTitle link={'/lid-worden'} title={'Word jij ons sponsor?'} linkTitle={'lid-worden'} />
            <div id='lid-worden-container'>
                <div id='lid-worden-form'>
                    <div id='buttons-lid-worden'>
                        <LinkButton href={'/doneren'} content={'Eenmalig'} />
                        <LinkButton href={'/lid-worden'} content={'Maandelijks'} />
                    </div>
                    <h2>Doorlopende machtiging</h2>
                    <div className="lid-worden-form-container">
                        <div className='lid-worden-form-column'>
                            <div className='lid-worden-form-info'><p>Naam:</p></div>
                            <div className='lid-worden-form-info'><p>Adres:</p></div>
                            <div className='lid-worden-form-info'><p>Postcode:</p></div>
                            <div className='lid-worden-form-info'><p>Plaats, land:</p></div>
                            <div className='lid-worden-form-info'><p>Incassant ID:</p></div>
                            <div className='lid-worden-form-info'><p>Reden:</p></div>
                        </div>
                        <div className='lid-worden-form-column'>
                            <div className='lid-worden-form-info'><p>Educatief en Cultureel Centrum De Hoop vzw</p></div>
                            <div className='lid-worden-form-info'><p>Palinckstraat 124</p></div>
                            <div className='lid-worden-form-info'><p>2100</p></div>
                            <div className='lid-worden-form-info'><p>Deurne, België</p></div>
                            <div className='lid-worden-form-info'><p>BE43RANDOM345</p></div>
                            <div className='lid-worden-form-info'><p>Lidgeld</p></div>
                        </div>
                    </div>
                    <div id='incasso-info'>
                        <p>Door ondertekening van dit formulier geeft u toestemming aan Educatief en Cultureel Centrum de Hoop om doorlopende incassopdrachten ...</p>
                        <p>Als u zich wilt afmelden ...</p>
                        <p>Ondergetekende geeft, totdat de machtiging wordt ingetrokken, toestemming het navolgende bedrag maandelijks af te schrijven:</p>
                    </div>

                    <label htmlFor="amount">Bedrag <span id='red'>*</span></label>
                    <div id='checkboxes-lid-worden'>
                        {['10', '20', '50', 'other'].map((val) => (
                            <label key={val}>
                                <input
                                    type="radio"
                                    name="amount"
                                    value={val}
                                    checked={selectedAmount === val}
                                    onChange={handleCheckboxChange}
                                />
                                {val === 'other' ? 'Anders, maandelijkse sponsoring met ander bedrag ...' : `Maandelijkse sponsoring met €${val}`}
                            </label>
                        ))}
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
                    <div id='lid-worden-two-inputs-container'>
                        <input
                            type="text"
                            name="name"
                            id="lid-worden-naam"
                            className='lid-worden-two-inputs'
                            placeholder='Voornaam'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="surname"
                            id="lid-worden-naam"
                            className='lid-worden-two-inputs'
                            placeholder='Achternaam'
                            value={formData.surname}
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="name">Adres <span id='red'>*</span></label>

                    <div>
                        <br />
                        <label htmlFor="address">Straat + huisnummer</label>
                        <div id='lid-worden-two-inputs-container'>
                            <input
                                type="text"
                                name="address"
                                id="address-lid-address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div id='lid-worden-two-inputs-container'>
                        <div className='lid-worden-two-inputs-container-inside-div'>
                            <label htmlFor="postcode">Postcode</label>
                            <input
                                type="text"
                                name="postcode"
                                id="address-lid-postcode"
                                className='lid-worden-two-inputs'
                                value={formData.postcode}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='lid-worden-two-inputs-container-inside-div'>
                            <label htmlFor="stad">Stad</label>
                            <input
                                type="text"
                                name="stad"
                                id="address-lid-stad"
                                className='lid-worden-two-inputs'
                                value={formData.stad}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='lid-worden-two-inputs-container-inside-div'>
                        <label htmlFor="address">Land </label>
                        <div id='lid-worden-two-inputs-container'>
                            <select
                                id="address-lid-country"
                                value={formData.country}
                                onChange={handleSelectChange}
                            >
                                <option value="Land">Land</option>
                                {countries.map((country, i) => (
                                    <option key={i} value={country}>{country}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <label htmlFor="telefoon">Telefoon <span id="red">*</span></label>
                    <div id="lid-worden-two-inputs-container">
                        <input
                            type="tel"
                            name="telefoon"
                            id="address-lid-telefoon"
                            value={formData.telefoon}
                            onChange={handleChange}
                        />
                    </div>

                    <label htmlFor="E-mailadres">E-mailadres <span id="red">*</span></label>
                    <div id="lid-worden-two-inputs-container">
                        <input
                            type="email"
                            name="E-mailadres"
                            id="address-lid-email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <label htmlFor="iban">IBAN <span id='red'>*</span></label>
                    <div id='lid-worden-two-inputs-container'>
                        <input
                            type="text"
                            name="iban"
                            id="address-lid-iban"
                            value={formData.iban}
                            onChange={handleChange}
                        />
                    </div>

                    <label htmlFor="iban-ten">IBAN ten name van: <span id='red'>*</span></label>
                    <div id='lid-worden-two-inputs-container'>
                        <input
                            type="text"
                            name="iban-ten"
                            id="address-lid-ibanTen"
                            value={formData.ibanTen}
                            onChange={handleChange}
                        />
                    </div>

                    <label htmlFor="bic">BIC (i.h.g.v buitenlandse rekening) </label>
                    <div id='lid-worden-two-inputs-container'>
                        <input
                            type="text"
                            name="bic"
                            id="address-lid-bic"
                            value={formData.bic}
                            onChange={handleChange}
                        />
                    </div>

                    <label htmlFor="toestemming">Toestemming <span id="red">*</span></label>
                    <div id='lid-worden-two-inputs-container'>
                        <input
                            type="checkbox"
                            id="toestemming"
                            name="toestemming"
                            checked={formData.toestemming}
                            onChange={handleChange}
                        />
                        <p>Hierbij machtig ik Ecc De Hoop om maandelijks het aangegeven bedrag te incasseren.</p>
                    </div>
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                        ref={recaptchaRef}
                        onChange={() => setVerified(true)}
                        style={{ paddingBottom: '1rem' }}
                    />

                    {formErrors.length > 0 && <p id='lid-worden-error-message'>{formErrors[0]}</p>}
                    <button className='button' disabled={!verified} onClick={handleSubmit}>Sponsor</button>
                    <div id='lid-worden-warning'>
                        <h2>Goed om te weten:</h2>
                        <p>
                            Na je aanmelding krijg je van ons een mail waarin wij jou welkom heten.<br /><br />
                            LET OP! Deze mail kan in je spambox terechtkomen. Je kunt deze mail aanmerken als GEEN spam. Zo voorkom je dat toekomstige (belangrijke) mailtjes van Ecc De Hoop niet mist.
                        </p>
                    </div>
                </div>
                <div id='lid-worden-container-right'>
                    <HomeHadieth
                        containerHeight={'40rem'}
                        padding={'0rem'}
                        hadieth={'De Profeet (vrede zij met hem) zei: "Bewaak jezelf tegen de Hel, zelfs door het geven van de helft van een dadel in liefdadigheid."'}
                        overgeleverd={'Overgeleverd door Al-Bukhari en Muslim'}
                    />
                </div>
            </div>
        </div>
    );
};

export default IntroLidWorden;
