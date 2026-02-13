
import React, { useEffect } from 'react';
import { Box, Container, Typography, Paper, CircularProgress } from '@mui/material';
import UserTable from '../components/UserTable';
import useUserStore from '../stores/userStore';

const UserManagementPage: React.FC = () => {
  const { users, loading, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          User Management
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          View and manage all platform users.
        </Typography>

        <Paper sx={{ p: 2, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          {loading ? <CircularProgress /> : <UserTable users={users} />}
        </Paper>
      </Box>
    </Container>
  );
};

export default UserManagementPage;
