
import React, { useEffect } from 'react';
import { Container, Typography, Grid, CircularProgress } from '@mui/material';
import useDonationStore from '../stores/donationStore';
import DonationCard from '../components/DonationCard';

const AcceptedDonationsPage: React.FC = () => {
  const { donations, loading, fetchDonations } = useDonationStore();
  const acceptedDonations = donations.slice(0, 2);

  useEffect(() => {
    fetchDonations();
  }, [fetchDonations]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        My Accepted Donations
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={4}>
          {acceptedDonations.map((donation) => (
            <Grid item key={donation.id} xs={12} sm={6} md={4}>
              <DonationCard donation={donation} isAccepted={true} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default AcceptedDonationsPage;
