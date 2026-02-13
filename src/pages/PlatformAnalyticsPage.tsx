
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import UserGrowthChart from '../components/UserGrowthChart';
import DonationVolumeChart from '../components/DonationVolumeChart';
import CategoryDistributionChart from '../components/CategoryDistributionChart';
import { userGrowthData, donationVolumeData, categoryDistributionData } from '../mockData/analytics';

const PlatformAnalyticsPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Platform Analytics
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          An overview of key platform metrics.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <UserGrowthChart data={userGrowthData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <DonationVolumeChart data={donationVolumeData} />
          </Grid>
          <Grid item xs={12}>
            <CategoryDistributionChart data={categoryDistributionData} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PlatformAnalyticsPage;
