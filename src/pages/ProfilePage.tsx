
import React from 'react';
import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';

const ProfilePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, my: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Company Profile
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Default Pickup Address"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Operating Hours"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Contact Person"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Preferred Donation Categories"
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save Profile
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
