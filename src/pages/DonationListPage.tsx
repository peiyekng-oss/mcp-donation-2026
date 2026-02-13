
import React, { useEffect } from 'react';
import { Box, Button, CircularProgress, Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useDonationStore from '../stores/donationStore';

const DonationListPage: React.FC = () => {
  const { donations, loading, fetchDonations } = useDonationStore();

  useEffect(() => {
    fetchDonations();
  }, [fetchDonations]);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Donations
        </Typography>
        <Paper>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <List>
              {donations.map((donation) => (
                <ListItem
                  key={donation.id}
                  secondaryAction={
                    <Button component={Link} to={`/donations/${donation.id}`} variant="outlined">
                      View Status
                    </Button>
                  }
                >
                  <ListItemText
                    primary={donation.title}
                    secondary={`Status: ${donation.status} ${donation.donor ? `| Donor: ${donation.donor}` : ''}`}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default DonationListPage;
