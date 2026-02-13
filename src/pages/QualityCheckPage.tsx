
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography, Paper, TextField, Input, CircularProgress } from '@mui/material';
import useDonationStore from '../stores/donationStore';

const QualityCheckPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { selectedDonation: donation, loading, fetchDonationById } = useDonationStore();

  useEffect(() => {
    if (id) {
      fetchDonationById(id);
    }
  }, [id, fetchDonationById]);

  const handleDisputeSubmit = () => {
    // In a real app, this would submit the dispute to the backend.
    alert('Dispute submitted. An administrator will review the case.');
    navigate(`/ngo/dispute-submitted/${id}`);
  };

  const handleConfirmQuality = () => {
    // In a real app, this would finalize the donation status.
    alert('Thank you for confirming the donation quality!');
    navigate('/ngo/dashboard');
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (!donation) {
    return <Typography>Donation not found.</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Quality Check
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          You have 24 hours to report any issues with the donation of <strong>{donation.title}</strong>.
          If the items are as described, please confirm their quality.
        </Typography>
        <Box sx={{ my: 3 }}>
          <Typography variant="h6">Report an Issue</Typography>
          <TextField
            label="Describe the issue in detail"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
          />
          <Typography variant="body2" sx={{ mb: 1 }}>Upload photographic evidence:</Typography>
          <Input type="file" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button variant="contained" color="error" onClick={handleDisputeSubmit}>
            Submit Dispute
          </Button>
          <Button variant="contained" color="success" onClick={handleConfirmQuality}>
            Confirm Quality
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default QualityCheckPage;
