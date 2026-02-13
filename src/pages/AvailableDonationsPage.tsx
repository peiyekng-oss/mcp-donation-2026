
import React, { useEffect } from 'react';
import { Container, Typography, Grid, Box, CircularProgress, Paper } from '@mui/material';
import DonationCard from '../components/DonationCard';
import useDonationStore from '../stores/donationStore';

const AvailableDonationsPage: React.FC = () => {
  const { donations, loading, fetchDonations } = useDonationStore();

  useEffect(() => {
    fetchDonations();
  }, [fetchDonations]);

  const availableDonations = donations.filter(d => d.status === 'Available');

  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 4, my: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Available Donations
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Browse the list of available surplus items. New donations are added daily.
        </Typography>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {availableDonations.map((donation) => (
              <Grid item key={donation.id} xs={12} sm={6} md={4}>
                <DonationCard donation={donation} />
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </Container>
  );
};

export default AvailableDonationsPage;
