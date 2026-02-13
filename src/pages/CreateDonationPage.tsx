
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Container, TextField, Box, Paper } from '@mui/material';
import useDonationStore from '../stores/donationStore';

const steps = ['Item Details', 'Pickup Information', 'Upload Photos'];

const CreateDonationPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    quantity: '',
    expiryDate: '',
    storageCondition: '',
    location: '',
    pickupDate: '',
    pickupTimeWindow: '',
    status: 'Available',
    donor: 'Anonymous' // Or get the logged in user
  });
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const createDonation = useDonationStore((state) => state.createDonation);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", { ...formData, files: selectedFiles });
    // Later, this will make an API call to save the draft
  };

  const handlePublish = () => {
    createDonation(formData);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField label="Item Name" name="title" value={formData.title} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Description" name="description" value={formData.description} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Category" name="category" value={formData.category} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Quantity" name="quantity" value={formData.quantity} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Expiry Date" name="expiryDate" type="date" value={formData.expiryDate} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
            <TextField label="Storage Condition" name="storageCondition" value={formData.storageCondition} onChange={handleChange} fullWidth margin="normal" />
          </>
        );
      case 1:
        return (
          <>
            <TextField label="Pickup Address" name="location" value={formData.location} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Pickup Date" name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
            <TextField label="Pickup Time Window" name="pickupTimeWindow" value={formData.pickupTimeWindow} onChange={handleChange} fullWidth margin="normal" />
          </>
        );
      case 2:
        return (
          <>
            <Button
              variant="contained"
              component="label"
              fullWidth
            >
              Upload Photos
              <input type="file" hidden onChange={handleFileChange} multiple />
            </Button>
            {selectedFiles && (
              <Box mt={2}>
                <Typography>Selected Files:</Typography>
                <ul>
                  {Array.from(selectedFiles).map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </Box>
            )}
          </>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, my: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create a New Donation
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography variant="h5">Donation Listing Published!</Typography>
              <Typography>Thank you for your contribution. NGOs will be notified.</Typography>
            </Box>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (
                  <>
                    <Button variant="outlined" color="primary" onClick={handleSaveDraft} sx={{ mr: 1 }}>
                      Save as Draft
                    </Button>
                    <Button variant="contained" color="primary" onClick={handlePublish}>
                      Publish
                    </Button>
                  </>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                  </Button>
                )}
              </Box>
            </>
          )}
        </>
      </Paper>
    </Container>
  );
};

export default CreateDonationPage;
