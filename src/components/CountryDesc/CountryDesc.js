import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'
import './CountryDesc.css'
const CountryDesc = () => {
    const {countryName} = useParams()

    // console.log(countryName);
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(response => response.json())
        .then(data => setCountries(data[0]))
    },[])
    const {flag, name, capital, population, region, area} = countries;
    return (
        <div className="description">
            <img src={flag} alt=""/>
            <h4>Name : {name}</h4>
            <h4>Capital : {capital}</h4>
            <h4>Population : {population}</h4>
            <h4>Region : {region}</h4>
            <h4>Area : {area}</h4>
            <Link to={`/Home`}>
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default CountryDesc;