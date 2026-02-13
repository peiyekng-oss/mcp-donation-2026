
import React from 'react';
import { Box, Button, Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const donations = [
  {
    id: 1,
    title: 'Surplus from Corporate Event',
    status: 'Accepted',
    ngo: 'FoodBank SG',
  },
  {
    id: 2,
    title: 'Unused Office Supplies',
    status: 'Active',
    ngo: null,
  },
  {
    id: 3,
    title: 'Catering leftovers',
    status: 'Picked Up',
    ngo: 'Brighten Lives',
  },
];

const DonationListPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Donations
        </Typography>
        <Paper>
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
                  secondary={`Status: ${donation.status} ${donation.ngo ? `| NGO: ${donation.ngo}` : ''}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default DonationListPage;
