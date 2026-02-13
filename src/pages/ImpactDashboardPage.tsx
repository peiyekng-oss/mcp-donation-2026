
import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { exportService } from '../services/exportService';
import { mockDonations } from '../mockData/donations';

const ImpactDashboardPage: React.FC = () => {

  const handleExport = () => {
    const dataToExport = mockDonations.map(donation => ({
      ID: donation.id,
      Title: donation.title,
      Quantity: donation.quantity,
      Status: donation.status,
      DonatedTo: donation.ngo?.name || 'N/A',
      DonationDate: new Date().toLocaleDateString(), // Placeholder
    }));
    exportService.exportToExcel(dataToExport, 'DonationHistory');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Impact Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h5">Total Donations</Typography>
              <Typography variant="h3" color="primary">{mockDonations.length}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h5">Estimated Value</Typography>
              <Typography variant="h3" color="primary">$5,400</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h5">Carbon Saved (est.)</Typography>
              <Typography variant="h3" color="primary">1.2 tCO₂e</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5">Donation History</Typography>
            <Button variant="contained" onClick={handleExport}>
              Export to Excel
            </Button>
          </Box>
          <Paper sx={{ p: 2 }}>
            {mockDonations.map(donation => (
              <Typography key={donation.id}>
                {donation.title} to {donation.ngo?.name || 'N/A'} - {donation.status}
              </Typography>
            ))}
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default ImpactDashboardPage;
