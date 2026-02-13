
import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { mockDonations } from '../mockData/donations';
import DonationCard from '../components/DonationCard';

const AvailableDonationsPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Available Donations
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Browse the list of available surplus items. New donations are added daily.
        </Typography>
        <Grid container spacing={4}>
          {mockDonations.map((donation) => (
            <Grid item key={donation.id} xs={12} sm={6} md={4}>
              <DonationCard donation={donation} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AvailableDonationsPage;
