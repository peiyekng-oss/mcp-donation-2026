
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography, Paper, TextField, CircularProgress } from '@mui/material';
import useDonationStore from '../stores/donationStore';

const ImpactReportingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { selectedDonation: donation, loading, fetchDonationById } = useDonationStore();

  useEffect(() => {
    if (id) {
      fetchDonationById(id);
    }
  }, [id, fetchDonationById]);

  const handleSubmitReport = () => {
    // In a real app, this would submit the impact report to the backend.
    alert('Impact report submitted. Thank you for making a difference!');
    navigate(`/ngo/impact-report-submitted/${id}`);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!donation) {
    return <Typography>Donation not found.</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Report Impact
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Report on the distribution and impact of the donation of <strong>{donation.title}</strong>.
          This information will be shared with the donor.
        </Typography>
        <TextField
          label="Describe how the items were distributed and the impact they had"
          multiline
          rows={8}
          variant="outlined"
          fullWidth
          sx={{ my: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmitReport}>
            Submit Impact Report
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ImpactReportingPage;
