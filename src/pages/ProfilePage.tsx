
import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const ProfilePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
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
      </Box>
    </Container>
  );
};

export default ProfilePage;
