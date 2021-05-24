import React from 'react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';
import { useAppSelector } from '../../redux/store';
import { CityInfo } from '../CityInfo/CityInfo';

import './Chart.scss';

export const Chart: React.FC = () => {
    const data = useAppSelector((state) => state.weatherInfo.payload) || [];
    const status = useAppSelector((state) => state.weatherInfo.status);
    const errors = useAppSelector((state) => state.weatherInfo.errors);
    return (
        <>
            {
                status === 'pending' ?
                    <div className='cont'>
                        <p>
                            Loading...
                        </p>
                    </div>
                    :
                    status === 'fulfilled' ?
                        <>
                            <CityInfo
                                id={data.city.id}
                                name={data.city.name}
                                population={data.city.population}
                                timezone={data.city.timezone}
                                country={data.city.country} />
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={40} data={data.list.map((item: any) => item.main)}>
                                    <Bar dataKey="temp" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </> :
                        status === 'rejected' &&
                        <div className='cont'>
                            <p className='text-danger'>{errors}</p>
                        </div>
            }
        </>
    )
}