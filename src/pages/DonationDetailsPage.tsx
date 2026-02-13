
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography, Paper, Grid, CardMedia } from '@mui/material';
import { mockDonations } from '../mockData/donations';

const DonationDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const donation = mockDonations.find(d => d.id === id);

  const handleAccept = () => {
    // This simulates the "First-to-Accept" model.
    // In a real app, this would trigger a backend process to lock the donation.
    alert(`Thank you for accepting the donation of ${donation?.title}! You can now coordinate the pickup.`);
    navigate('/ngo/accepted-donations');
  };

  if (!donation) {
    return <Typography>Donation not found.</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="300"
              image={donation.imageUrl}
              alt={donation.title}
              sx={{ borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" gutterBottom>
              {donation.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {donation.category}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="body1"><strong>Quantity:</strong> {donation.quantity}</Typography>
              <Typography variant="body1"><strong>From:</strong> {donation.donor.name}</Typography>
              <Typography variant="body1"><strong>Location:</strong> {donation.donor.location}</Typography>
            </Box>
            <Typography variant="body2" sx={{ my: 2 }}>
              {donation.description}
            </Typography>
            <Button variant="contained" color="primary" size="large" onClick={handleAccept} fullWidth>
              Accept Donation
            </Button>
            <Button variant="outlined" size="large" onClick={() => navigate('/available-donations')} sx={{ mt: 1 }} fullWidth>
              Back to List
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default DonationDetailsPage;
