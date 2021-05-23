import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IinitialState {
    status: null | "pending" | "fulfilled" | "rejected";
    payload: any;
    errors: any;
}

interface IGetWeatherInfo {
    city: string;
}

export const getWeatherInfo = createAsyncThunk(
    "weather/getInfo",
    async ({ city }: IGetWeatherInfo) => {
        const response = axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&mode=json&appid=bad46dfee1ae1125ec4faf31e63449de`, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return (await response).data;
    }
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        status: null,
        payload: {},
        errors: {},
    } as IinitialState,
    reducers: {},
    extraReducers: {
        [getWeatherInfo.pending.type]: (state: IinitialState, _action) => {
            state.status = 'pending';
        },
        [getWeatherInfo.fulfilled.type]: (state: IinitialState, { payload }) => {
            state.status = 'fulfilled';
            state.payload = payload;
        },
        [getWeatherInfo.rejected.type]: (state: IinitialState, _action) => {
            state.status = 'rejected';
            state.errors = 'City Not Found';
        }
    }
})