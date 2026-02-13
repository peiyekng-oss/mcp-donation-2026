
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';
import { hubspotService } from '../services/hubspot';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    uen: '',
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the full registration process
    // For now, we will just sync the contact to HubSpot
    await hubspotService.syncContact({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
    });
    alert('Registration submitted! Your data has been synced to HubSpot.');
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, my: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register Your Business
        </Typography>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Company Name"
            margin="normal"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Business Registration Number (UEN)"
            margin="normal"
            name="uen"
            value={formData.uen}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="First Name"
            margin="normal"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            margin="normal"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ mt: 2 }}
          >
            Upload Supporting Documents
            <input type="file" hidden multiple />
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
