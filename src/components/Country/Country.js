import React from 'react';
import './Country.css'
import {Link} from 'react-router-dom'
const Country = (props) => {
    const {name, flag, capital, area, population, region} = props.country;
    // console.log(props.country)
    return (
        <div className="country-info">
            <img src={flag} alt=""/>
            <h4>Name : {name}</h4>
            <h4>Capital : {capital}</h4>
            <h4>Population : {population}</h4>
            <h4>Region : {region}</h4>
            <h4>Area : {area}</h4>
            {

            }
            <Link to={`/country/name/${name}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default Country;