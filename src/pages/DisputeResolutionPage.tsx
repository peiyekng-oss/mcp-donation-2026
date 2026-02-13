
import React, { useEffect } from 'react';
import { Box, Container, Typography, Paper, CircularProgress } from '@mui/material';
import DisputeCard from '../components/DisputeCard';
import useDisputeStore from '../stores/disputeStore';

const DisputeResolutionPage: React.FC = () => {
  const { disputes, loading, fetchDisputes } = useDisputeStore();

  useEffect(() => {
    fetchDisputes();
  }, [fetchDisputes]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dispute Resolution Center
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Review and resolve quality disputes raised by NGOs.
        </Typography>

        <Paper sx={{ p: 2, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          {loading ? (
            <CircularProgress />
          ) : (
            disputes.map(dispute => (
              <DisputeCard key={dispute.id} dispute={dispute} />
            ))
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default DisputeResolutionPage;
