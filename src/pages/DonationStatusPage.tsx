
import React from 'react';
import { Box, Button, Container, Paper, Step, StepLabel, Stepper, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const steps = ['Active', 'Accepted', 'Pickup Scheduled', 'Picked Up', 'Confirmed', 'Closed'];

const DonationStatusPage: React.FC = () => {
  // For now, we'll use a static active step
  const activeStep = 2;

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Donation Status
        </Typography>
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6">Donation to FoodBank SG</Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>Status: {steps[activeStep]}</Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Pickup Coordination</Typography>
            <Paper sx={{ p: 2 }}>
              <Typography variant="body1"><strong>NGO:</strong> FoodBank SG</Typography>
              <Typography variant="body1"><strong>Pickup Address:</strong> 123 Food Street, Singapore</Typography>
              <Typography variant="body1"><strong>Pickup Window:</strong> 2024-07-28, 2:00 PM - 5:00 PM</Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained">Message NGO</Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Actions</Typography>
            <Paper sx={{ p: 2 }}>
              <Button variant="contained" fullWidth sx={{ mb: 1 }}>Mark as Ready for Pickup</Button>
              <Button variant="outlined" color="error" fullWidth>Report a No-Show</Button>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button component={Link} to="/donations" variant="outlined">
            Back to My Donations
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default DonationStatusPage;
