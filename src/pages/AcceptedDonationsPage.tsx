
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { mockDonations } from '../mockData/donations';
import DonationCard from '../components/DonationCard';

const AcceptedDonationsPage: React.FC = () => {
  const acceptedDonations = mockDonations.slice(0, 2);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        My Accepted Donations
      </Typography>
      <Grid container spacing={4}>
        {acceptedDonations.map((donation) => (
          <Grid item key={donation.id} xs={12} sm={6} md={4}>
            <DonationCard donation={donation} isAccepted={true} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AcceptedDonationsPage;
