import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'
const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div className="country-wrapper">
            {
                countries.map(country => <Country country={country} ></Country>)
            }
        </div>
    );
};

export default Home;