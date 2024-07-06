
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserDataApi } from '../apis/userApi';
import { setLoading, setUserData, setError } from './reducer';

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const data = await fetchUserDataApi();
      dispatch(setUserData(data));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }
);