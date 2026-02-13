
import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box, Paper } from '@mui/material';
import { hubspotService } from '../services/hubspot';

const NgoRegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    ngoName: '',
    registrationNumber: '',
    contactPerson: '',
    email: '',
  });
  const [verificationFile, setVerificationFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setVerificationFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the full registration process
    // For now, we will just sync the contact to HubSpot
    const [firstName, ...lastName] = formData.contactPerson.split(' ');
    await hubspotService.syncContact({
      email: formData.email,
      firstName: firstName,
      lastName: lastName.join(' '),
      companyName: formData.ngoName,
    });
    console.log("NGO Registration Data:", formData);
    console.log("Verification File:", verificationFile);
    // Later, this will make an API call to register the NGO
    alert('Registration submitted for verification. Your data has been synced to HubSpot.');
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          NGO Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="NGO Name" name="ngoName" value={formData.ngoName} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Registration Number" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Contact Person" name="contactPerson" value={formData.contactPerson} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" required />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ mt: 2 }}
          >
            Upload Verification Document
            <input type="file" hidden onChange={handleFileChange} required />
          </Button>
          {verificationFile && (
            <Box mt={2}>
              <Typography>Selected File: {verificationFile.name}</Typography>
            </Box>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default NgoRegisterPage;
