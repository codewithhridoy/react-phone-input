import { useState, useCallback } from 'react';

const useCountryPhoneInput = (countries, setContactInfo, handlePhoneNumberChange) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

    const selectCountry = useCallback((country) => {
        setContactInfo(prev => ({
            ...prev,
            selectedCountry: country,
            fullPhoneNumber: `${country.dial_code}${prev.phoneNumber}`, // Update full number with new country code
        }));
        setIsOpen(false);
    }, [setContactInfo]);

    const handleInputChange = useCallback((e) => {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9]/g, '');

        // Update phone number in parent state
        setContactInfo(prev => {
            const newContactInfo = {
                ...prev,
                phoneNumber: numericValue,
                fullPhoneNumber: `${prev.selectedCountry.dial_code}${numericValue}`, // Update full phone number
            };

            // Call the optional handler if provided
            if (handlePhoneNumberChange) {
                handlePhoneNumberChange(newContactInfo);
            }

            return newContactInfo;
        });
    }, [setContactInfo, handlePhoneNumberChange]);

    return {
        isOpen,
        toggleDropdown,
        selectCountry,
        handleInputChange,
    };
};

export default useCountryPhoneInput;
