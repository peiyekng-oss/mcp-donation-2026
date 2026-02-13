
import React, { useEffect } from 'react';
import { Container, Typography, Grid, CircularProgress, Paper, Box } from '@mui/material';
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
      <Paper sx={{ p: 4, my: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Accepted Donations
        </Typography>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {acceptedDonations.map((donation) => (
              <Grid item key={donation.id} xs={12} sm={6} md={4}>
                <DonationCard donation={donation} isAccepted={true} />
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </Container>
  );
};

export default AcceptedDonationsPage;
