
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { Favorite } from '@mui/icons-material';

const ImpactReportSubmittedPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 8, textAlign: 'center' }}>
        <Favorite sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 2 }}>
          Thank You!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Your impact report has been submitted. The donor will be notified and your contribution to a more sustainable future is greatly appreciated.
        </Typography>
        <Button variant="contained" component={Link} to="/ngo/dashboard">
          Return to Dashboard
        </Button>
      </Paper>
    </Container>
  );
};

export default ImpactReportSubmittedPage;
