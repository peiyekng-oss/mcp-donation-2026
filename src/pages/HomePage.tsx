import React from 'react';
import { Box, Button, Container, Typography, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        background: 'linear-gradient(to bottom, #f0f4f8, #ffffff)',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom color="#333">
            Welcome to WeGive
          </Typography>
          <Typography variant="h5" component="p" color="#666">
            Connecting corporate donors with NGOs to make a difference.
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 4, textAlign: 'center', background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <Typography variant="h4" gutterBottom>For Donors</Typography>
              <Typography sx={{ mb: 3 }}>Make a meaningful impact by donating surplus items to NGOs in need.</Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/create"
              >
                Donate Now
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 4, textAlign: 'center', background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <Typography variant="h4" gutterBottom>For NGOs</Typography>
              <Typography sx={{ mb: 3 }}>Register your organization to receive donations from our corporate partners.</Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={Link}
                to="/ngo/register"
              >
                Register as an NGO
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;