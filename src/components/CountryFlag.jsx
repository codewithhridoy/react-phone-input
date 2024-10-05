import React from 'react';

function CountryFlag({countryCode}) {
    return (
        <>
            <img
                src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
                width="30"
                alt={countryCode}
            />

        </>
    );
}

export default CountryFlag;