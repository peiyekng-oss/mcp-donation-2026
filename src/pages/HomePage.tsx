import React from 'react';
import { Box, Button, Container, Typography, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardGiftcard, Group } from '@mui/icons-material';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        background: 'url(https://images.unsplash.com/photo-1593113589675-75b69c750ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80) no-repeat center center',
        backgroundSize: 'cover',
        py: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8, backgroundColor: 'rgba(255, 255, 255, 0.8)', p: 4, borderRadius: 2 }}>
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
              <CardGiftcard sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
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
              <Group sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
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