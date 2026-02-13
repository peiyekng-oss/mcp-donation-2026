
import React from 'react';
import { Box, Button, Container, Typography, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const NgoDashboardPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          NGO Dashboard
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Welcome to your dashboard. From here you can manage your settings, view available donations, and coordinate pickups.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h6" gutterBottom align="center">
                Browse Available Donations
              </Typography>
              <Typography sx={{ mb: 2, textAlign: 'center' }}>
                Find surplus goods from businesses in your area that match your needs.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/available-donations"
              >
                View Donations
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h6" gutterBottom align="center">
                Manage Accepted Donations
              </Typography>
              <Typography sx={{ mb: 2, textAlign: 'center' }}>
                Coordinate pickup times and communicate with donors for the items you've accepted.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/ngo/accepted-donations"
              >
                Coordinate Pickups
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h6" gutterBottom align="center">
                Report on Completed Donations
              </Typography>
              <Typography sx={{ mb: 2, textAlign: 'center' }}>
                Share the impact of your recent donations to keep donors informed and engaged.
              </Typography>
              <Button
                variant="contained"
                color="success"
                component={Link}
                to="/ngo/impact-reporting/d1"
              >
                Report Impact
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom>
                Configure Your Preferences
              </Typography>
              <Typography sx={{ mb: 2, textAlign: 'center' }}>
                Set your accepted donation types, service area, and capacity to receive relevant donation alerts.
              </Typography>
              <Button
                variant="outlined"
                component={Link}
                to="/ngo/settings"
              >
                Go to Settings
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NgoDashboardPage;
