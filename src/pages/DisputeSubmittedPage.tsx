
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { Gavel } from '@mui/icons-material';

const DisputeSubmittedPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 8, textAlign: 'center' }}>
        <Gavel sx={{ fontSize: 60, color: 'warning.main' }} />
        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 2 }}>
          Dispute Submitted
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Your dispute for donation ID <strong>{id}</strong> has been submitted.
          An administrator will review the case and contact you shortly. We appreciate your patience.
        </Typography>
        <Button variant="contained" component={Link} to="/ngo/dashboard">
          Return to Dashboard
        </Button>
      </Paper>
    </Container>
  );
};

export default DisputeSubmittedPage;
