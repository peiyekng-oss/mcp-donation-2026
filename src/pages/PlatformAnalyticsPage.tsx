
import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, CircularProgress, Paper } from '@mui/material';
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
      <Paper sx={{ p: 4, my: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Platform Analytics
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          An overview of key platform metrics.
        </Typography>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
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
      </Paper>
    </Container>
  );
};

export default PlatformAnalyticsPage;
