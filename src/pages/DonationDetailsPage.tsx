
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography, Paper, Grid, CardMedia, CircularProgress } from '@mui/material';
import useDonationStore from '../stores/donationStore';

const DonationDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { selectedDonation, loading, fetchDonationById } = useDonationStore();

  useEffect(() => {
    if (id) {
      fetchDonationById(id);
    }
  }, [id, fetchDonationById]);

  const handleAccept = () => {
    alert(`Thank you for accepting the donation of ${selectedDonation?.title}! You can now coordinate the pickup.`);
    navigate('/ngo/accepted-donations');
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!selectedDonation) {
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
              image={selectedDonation.imageUrl || 'https://via.placeholder.com/300'}
              alt={selectedDonation.title}
              sx={{ borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" gutterBottom>
              {selectedDonation.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {selectedDonation.category}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="body1"><strong>Quantity:</strong> {selectedDonation.quantity || 'N/A'}</Typography>
              <Typography variant="body1"><strong>From:</strong> {selectedDonation.donor.name || selectedDonation.donor}</Typography>
              <Typography variant="body1"><strong>Location:</strong> {selectedDonation.location}</Typography>
            </Box>
            <Typography variant="body2" sx={{ my: 2 }}>
              {selectedDonation.description}
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
