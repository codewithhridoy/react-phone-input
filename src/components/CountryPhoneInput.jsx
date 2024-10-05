import React from 'react';
import CountryFlag from './CountryFlag.jsx';
import useCountryPhoneInput from '../hooks/use-country-phone-input.js';

const CountryPhoneInput = ({ countries, contactInfo, setContactInfo, handlePhoneNumberChange }) => {
    const { isOpen, toggleDropdown, selectCountry, handleInputChange } = useCountryPhoneInput(
        countries,
        setContactInfo,
        handlePhoneNumberChange
    );

    return (
        <div className="country-phone-input">
            <div className="dropdown">
                <button onClick={toggleDropdown} className="dropdown-button">
                    <CountryFlag countryCode={contactInfo.selectedCountry.code} />
                    <span>({contactInfo.selectedCountry.dial_code})</span>
                </button>
                {isOpen && (
                    <ul className="dropdown-menu">
                        {countries.map((country) => (
                            <li
                                key={country.code}
                                onClick={() => selectCountry(country)}
                                className="dropdown-item"
                            >
                                <CountryFlag countryCode={country.code} />
                                <span>
                                    {country.name} ({country.dial_code})
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <input
                type="text"
                value={contactInfo.phoneNumber}
                onChange={handleInputChange}
                className="phone-input"
                placeholder="000-0000"
            />
        </div>
    );
};

export default CountryPhoneInput;
