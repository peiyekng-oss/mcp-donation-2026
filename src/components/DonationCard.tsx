
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { Donation } from '../mockData/donations';

interface DonationCardProps {
  donation: Donation;
  isAccepted?: boolean;
}

const DonationCard: React.FC<DonationCardProps> = ({ donation, isAccepted = false }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="190"
        image={donation.imageUrl}
        alt={donation.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {donation.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {donation.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Category: {donation.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity: {donation.quantity}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
          From: {donation.donor.name} ({donation.donor.location})
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color={isAccepted ? "secondary" : "primary"}
          component={Link}
          to={isAccepted ? `/ngo/pickup-coordination/${donation.id}` : `/available-donations/${donation.id}`}
        >
          {isAccepted ? 'Coordinate Pickup' : 'View Details'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default DonationCard;
