
import React from 'react';
import { Card, CardContent, Typography, Button, Box, Link } from '@mui/material';

interface Dispute {
  id: string;
  donationId: string;
  ngoName: string;
  donorName: string;
  disputeDate: string;
  reason: string;
  photoUrl: string;
}

interface DisputeCardProps {
  dispute: Dispute;
}

const DisputeCard: React.FC<DisputeCardProps> = ({ dispute }) => {

  const handleVoidDonation = () => {
    alert(`Donation ${dispute.donationId} has been voided.`);
  };

  const handleIssueCredit = () => {
    alert(`Partial credit has been issued to the donor, ${dispute.donorName}.`);
  };
  
  const handleWarnDonor = () => {
    alert(`A warning has been issued to the donor, ${dispute.donorName}.`);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Donation ID: {dispute.donationId}</Typography>
        <Typography variant="body2" color="text.secondary">NGO: {dispute.ngoName}</Typography>
        <Typography variant="body2" color="text.secondary">Donor: {dispute.donorName}</Typography>
        <Typography variant="body2" color="text.secondary">Dispute Date: {dispute.disputeDate}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>Reason: {dispute.reason}</Typography>
        <Link href={dispute.photoUrl} target="_blank" rel="noopener noreferrer" sx={{ mt: 1, display: 'block' }}>
          View Photo Evidence
        </Link>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" color="warning" sx={{ mr: 1 }} onClick={handleWarnDonor}>
            Warn Donor
          </Button>
          <Button variant="outlined" color="secondary" sx={{ mr: 1 }} onClick={handleIssueCredit}>
            Issue Partial Credit
          </Button>
          <Button variant="contained" color="error" onClick={handleVoidDonation}>
            Void Donation
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DisputeCard;
