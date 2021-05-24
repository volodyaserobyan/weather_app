import React from 'react';

import './CityInfo.scss';

interface ICityInfo {
    name: string,
    id: number,
    population: number,
    timezone: number,
    country: string
}

export const CityInfo: React.FC<ICityInfo> = ({
    name, id, population, timezone, country
}) => {
    return (
        <div className='CityInfo'>
            <p>City Name: {name}</p>
            <p>City Id: {id}</p>
            <p>City Population: {population}</p>
            <p>City timezone: {timezone}</p>
            <p>Country: {country}</p>
        </div>
    )
}