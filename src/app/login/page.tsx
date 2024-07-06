'use client';

import LoginForm from '../../components/loginForm';
import { Box, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <Box sx={{ p: 3, maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <LoginForm />
    </Box>
  );
}