
import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import DisputeCard from '../components/DisputeCard';
import { mockDisputes } from '../mockData/disputes';

const DisputeResolutionPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dispute Resolution Center
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Review and resolve quality disputes raised by NGOs.
        </Typography>

        <Paper sx={{ p: 2 }}>
          {
            mockDisputes.map(dispute => (
              <DisputeCard key={dispute.id} dispute={dispute} />
            ))
          }
        </Paper>
      </Box>
    </Container>
  );
};

export default DisputeResolutionPage;
