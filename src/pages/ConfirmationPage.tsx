
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { mockDonations } from '../mockData/donations';

const ConfirmationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const donation = mockDonations.find(d => d.id === id);

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 8, textAlign: 'center' }}>
        <CheckCircleOutline sx={{ fontSize: 60, color: 'success.main' }} />
        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 2 }}>
          Pickup Confirmed!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          You have successfully confirmed the pickup of <strong>{donation?.title}</strong>.
          The next step is to perform a quality check within 24 hours.
        </Typography>
        <Button variant="contained" component={Link} to="/ngo/dashboard" sx={{ mr: 1 }}>
          Back to Dashboard
        </Button>
        <Button variant="outlined" component={Link} to={`/ngo/quality-check/${id}`} >
          Start Quality Check
        </Button>
      </Paper>
    </Container>
  );
};

export default ConfirmationPage;
