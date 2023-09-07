import { createAsyncThunk } from '@reduxjs/toolkit';
import articlesApiTopView from '../api/topViewApi';

export const getTopView = createAsyncThunk(
    'topview',
    async (params, thunkAPI) => {
        const response = await articlesApiTopView.getData();  
        return response;
    }
)