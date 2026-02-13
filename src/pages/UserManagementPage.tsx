
import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import UserTable from '../components/UserTable';
import { mockUsers } from '../mockData/users';

const UserManagementPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          User Management
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          View and manage all platform users.
        </Typography>

        <Paper sx={{ p: 2 }}>
          <UserTable users={mockUsers} />
        </Paper>
      </Box>
    </Container>
  );
};

export default UserManagementPage;
