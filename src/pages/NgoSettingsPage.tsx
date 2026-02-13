
import React, { useState } from 'react';
import { Box, Button, Container, Typography, Paper, TextField, FormGroup, FormControlLabel, Checkbox, Slider } from '@mui/material';

const categories = ['Food', 'Clothing', 'Electronics', 'Furniture', 'Office Supplies'];

const NgoSettingsPage: React.FC = () => {
  const [preferences, setPreferences] = useState({
    acceptedCategories: [] as string[],
    maxIntake: 50, // Default value
    pickupRadius: 10, // Default value in km
  });

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setPreferences(prev => ({
      ...prev,
      acceptedCategories: checked
        ? [...prev.acceptedCategories, name]
        : prev.acceptedCategories.filter(cat => cat !== name),
    }));
  };

  const handleSliderChange = (name: string) => (event: Event, value: number | number[]) => {
    setPreferences(prev => ({
      ...prev,
      [name]: value as number,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Saving NGO Preferences:', preferences);
    // Later, this will make an API call to save the settings
    alert('Settings saved successfully!');
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Donation Preferences & Capacity
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Accepted Categories</Typography>
            <FormGroup row>
              {categories.map(category => (
                <FormControlLabel
                  key={category}
                  control={<Checkbox checked={preferences.acceptedCategories.includes(category)} onChange={handleCategoryChange} name={category} />}
                  label={category}
                />
              ))}
            </FormGroup>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" id="pickup-radius-slider">
              Pickup Radius ({preferences.pickupRadius} km)
            </Typography>
            <Slider
              aria-labelledby="pickup-radius-slider"
              value={preferences.pickupRadius}
              onChange={handleSliderChange('pickupRadius')}
              step={5}
              marks
              min={5}
              max={50}
              valueLabelDisplay="auto"
            />
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Maximum Weekly Intake (in cubic meters)</Typography>
            <TextField
              type="number"
              value={preferences.maxIntake}
              onChange={(e) => setPreferences(prev => ({ ...prev, maxIntake: parseInt(e.target.value, 10) }))}
              fullWidth
            />
          </Box>

          {/* Placeholder for operating hours and blackout dates */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            * More settings for operating hours and blackout dates will be added here soon.
          </Typography>

          <Button type="submit" variant="contained" color="primary" size="large">
            Save Settings
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default NgoSettingsPage;
