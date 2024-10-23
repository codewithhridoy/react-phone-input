import React, {useState} from 'react';
import {Link} from "react-router-dom";
import countries from "../../data/countries.json";
import CountryPhoneInput from "../../components/CountryPhoneInput.jsx";
import './index.css'

function ReactPhoneInput(props) {
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
        <>
            <div className={'phone-input-wrapper'}>
                <Link to={'/'}>Home</Link>

                <CountryPhoneInput
                    countries={countries}
                    contactInfo={contactInfo}
                    setContactInfo={setContactInfo}
                    handlePhoneNumberChange={handlePhoneNumberChange}
                />
            </div>
        </>
    );
}

export default ReactPhoneInput;