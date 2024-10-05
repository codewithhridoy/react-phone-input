import React, { useState } from 'react';
import countries from './data/countries.json';
import CountryPhoneInput from './components/CountryPhoneInput.jsx';
import './App.css';

const App = () => {
    const defaultCountry = countries.find((country) => country.code === 'BD');

    const [contactInfo, setContactInfo] = useState({
        phoneNumber: '', // without country code
        fullPhoneNumber: '', // with country code
        selectedCountry: defaultCountry,
    });

    const handlePhoneNumberChange = (newContactInfo) => {
        // This function can be used for side effects if needed
        console.log('Updated contact info:', newContactInfo);
    };

    return (
        <div className="App">
            <CountryPhoneInput
                countries={countries}
                contactInfo={contactInfo}
                setContactInfo={setContactInfo}
                handlePhoneNumberChange={handlePhoneNumberChange}
            />
        </div>
    );
};

export default App;
