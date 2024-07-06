'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import UpdateButton from '../../components/updateButton';
import FetchButton from '@/components/fetchButton';

export default function MainPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Main Page
      </Typography>
      <UpdateButton />
      <FetchButton />
    </Box>
  );
}