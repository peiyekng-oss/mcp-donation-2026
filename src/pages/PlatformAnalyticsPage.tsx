
import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, CircularProgress } from '@mui/material';
import UserGrowthChart from '../components/UserGrowthChart';
import DonationVolumeChart from '../components/DonationVolumeChart';
import CategoryDistributionChart from '../components/CategoryDistributionChart';
import useAnalyticsStore from '../stores/analyticsStore';

const PlatformAnalyticsPage: React.FC = () => {
  const {
    userGrowth,
    donationVolume,
    categoryDistribution,
    loading,
    fetchUserGrowth,
    fetchDonationVolume,
    fetchCategoryDistribution,
  } = useAnalyticsStore();

  useEffect(() => {
    fetchUserGrowth();
    fetchDonationVolume();
    fetchCategoryDistribution();
  }, [fetchUserGrowth, fetchDonationVolume, fetchCategoryDistribution]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Platform Analytics
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          An overview of key platform metrics.
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <UserGrowthChart data={userGrowth} />
            </Grid>
            <Grid item xs={12} md={6}>
              <DonationVolumeChart data={donationVolume} />
            </Grid>
            <Grid item xs={12}>
              <CategoryDistributionChart data={categoryDistribution} />
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default PlatformAnalyticsPage;
