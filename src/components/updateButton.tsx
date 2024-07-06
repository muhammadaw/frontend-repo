'use client';

import React from 'react';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { setLoading, setError, setUserData } from '../store/reducer';
import { updateUserData } from '../apis/userApi';

const UpdateButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, userData } = useSelector((state: RootState) => state.user);

  const handleUpdate = async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      if (!userData || !userData.uid) {
        throw new Error('No user logged in');
      }

      const updatedData = { lastUpdated: new Date().toISOString() };
      const result = await updateUserData(userData.uid, updatedData);
      
      dispatch(setUserData(result));
      console.log('User data updated successfully');
    } catch (err) {
      dispatch(setError('Failed to update user data'));
      console.error('Error updating user data:', err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Button onClick={handleUpdate} disabled={loading}>
        {loading ? 'Updating...' : 'Update User Data'}
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </>
  );
};

export default UpdateButton;