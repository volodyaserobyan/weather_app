import React from 'react';
import { Chart } from '../../components/Chart/Chart';
import { Search } from '../../components/Search/Search';

import './WeatherContainer.scss'


export const WeatherContainer: React.FC = () => {
    return (
        <section className='WeatherContainer'>
            <Search />
                <Chart />
        </section>
    );
}