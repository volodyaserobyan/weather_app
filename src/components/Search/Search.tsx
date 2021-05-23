import React, { FormEvent } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useInput } from '../../hooks/utils.js';
import { getWeatherInfo } from '../../redux/slices';
import { useAppDispatch } from '../../redux/store';
import './Search.scss'

export const Search: React.FC = () => {

    const [city, bindCity, resetCity] = useInput('');

    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(getWeatherInfo({ city }));
        resetCity();
    }

    return (
        <Form onSubmit={handleSubmit} className='Search'>
            <Form.Group controlId="formBasicEmail" className='Search__group'>
                <Form.Label>Search</Form.Label>
                <Form.Control {...bindCity} type="search" placeholder="Enter city" />
            </Form.Group>
            <Button variant="primary" type="submit" className='Search__button'>
                Submit
            </Button>
        </Form>
    )
}