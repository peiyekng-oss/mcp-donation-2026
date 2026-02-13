
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography, Paper, Grid, TextField } from '@mui/material';
import { mockDonations } from '../mockData/donations';
import Map from '../components/Map';
import { googleCalendarService } from '../services/googleCalendar';

const PickupCoordinationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const donation = mockDonations.find(d => d.id === id);

  const handleConfirmPickup = () => {
    // In a real app, this would update the donation status in the backend.
    alert('Pickup confirmed! Thank you.');
    navigate(`/ngo/pickup-confirmation/${id}`);
  };

  const handleSchedulePickup = async () => {
    if (donation) {
      const event = {
        summary: `Pickup for ${donation.title}`,
        description: `Coordinating pickup for the donation of ${donation.quantity} of ${donation.title}.`,
        start: {
          dateTime: '2024-08-01T10:00:00-07:00',
          timeZone: 'America/Los_Angeles',
        },
        end: {
          dateTime: '2024-08-01T11:00:00-07:00',
          timeZone: 'America/Los_Angeles',
        },
        attendees: [
          { email: 'donor@example.com' }, // Placeholder
          { email: 'ngo@example.com' }, // Placeholder
        ],
      };
      await googleCalendarService.createEvent(event);
    }
  };

  if (!donation) {
    return <Typography>Donation not found.</Typography>;
  }

  // Hardcoded coordinates for demonstration purposes
  const pickupLocation = {
    lat: 1.3521, // Singapore latitude
    lng: 103.8198, // Singapore longitude
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Coordinate Pickup
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Donation Details</Typography>
            <Typography><strong>Item:</strong> {donation.title}</Typography>
            <Typography><strong>Quantity:</strong> {donation.quantity}</Typography>
            <Typography><strong>Description:</strong> {donation.description}</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Pickup Location</Typography>
              <Map center={pickupLocation} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Pickup Information</Typography>
            <Typography><strong>Donor:</strong> {donation.donor.name}</Typography>
            <Typography><strong>Address:</strong> {donation.donor.location}</Typography>
            <Typography><strong>Contact:</strong> (Contact info will be available here)</Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Messaging</Typography>
          <TextField
            label="Send a message to the donor"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" sx={{ mt: 2 }}>Send Message</Button>
        </Box>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" onClick={() => navigate('/ngo/accepted-donations')}>
            Back to Accepted Donations
          </Button>
          <Box>
            <Button variant="contained" color="primary" onClick={handleSchedulePickup} sx={{ mr: 2 }}>
              Schedule in Google Calendar
            </Button>
            <Button variant="contained" color="success" onClick={handleConfirmPickup}>
              Confirm Pickup
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default PickupCoordinationPage;
