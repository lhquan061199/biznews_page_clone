import { createAsyncThunk } from '@reduxjs/toolkit';
import categoryApi from '../api/categoryApi';
import axios from 'axios';


export const getCategory = createAsyncThunk(
    'category',
    async (params, thunkAPI) => {
        const response = await categoryApi.getData();  
        return response;
    }
)