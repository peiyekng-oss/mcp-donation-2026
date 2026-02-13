
import React, { useEffect } from 'react';
import { Box, Container, Typography, Paper, Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import VerificationRequestCard from '../components/VerificationRequestCard';
import useVerificationRequestStore from '../stores/verificationRequestStore';

const AdminDashboardPage: React.FC = () => {
  const { requests, loading, fetchRequests } = useVerificationRequestStore();

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Review and approve pending NGO verification requests.
        </Typography>

        <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
          <Button component={Link} to="/admin/disputes" variant="contained">
            View Open Disputes
          </Button>
          <Button component={Link} to="/admin/users" variant="contained">
            Manage Users
          </Button>
          <Button component={Link} to="/admin/analytics" variant="contained">
            Platform Analytics
          </Button>
        </Box>

        <Paper sx={{ p: 2, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          {loading ? (
            <CircularProgress />
          ) : (
            requests.map(request => (
              <VerificationRequestCard key={request.id} request={request} />
            ))
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default AdminDashboardPage;
