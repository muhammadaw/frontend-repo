import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../store/userThunk';
import { RootState, AppDispatch } from '../store/store';

const FetchButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, userData } = useSelector((state: RootState) => state.user);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const handleFetch = async () => {
    try {
      setFetchError(null);
      await dispatch(fetchUserData()).unwrap();
    } catch (error) {
      setFetchError(`Fetch failed: ${error.message}`);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleFetch} disabled={loading}>
        Fetch User Data
      </Button>
      {loading && <Typography>Loading...</Typography>}
      {fetchError && <Typography color="error">{fetchError}</Typography>}
      {userData && <Typography>User Data: {JSON.stringify(userData)}</Typography>}
    </div>
  );
};

export default FetchButton;