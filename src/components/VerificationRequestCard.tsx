
import React from 'react';
import { Card, CardContent, Typography, Button, Box, Link } from '@mui/material';
import { CheckCircleOutline, HighlightOff } from '@mui/icons-material';

interface VerificationRequest {
  id: string;
  ngoName: string;
  registrationNumber: string;
  submittedDate: string;
  documentUrl: string;
}

interface VerificationRequestCardProps {
  request: VerificationRequest;
}

const VerificationRequestCard: React.FC<VerificationRequestCardProps> = ({ request }) => {

  const handleApprove = () => {
    // In a real app, this would update the NGO's status in the database.
    alert(`Approved ${request.ngoName}.`);
  };

  const handleReject = () => {
    // In a real app, this would update the NGO's status and potentially notify them.
    alert(`Rejected ${request.ngoName}.`);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{request.ngoName}</Typography>
        <Typography variant="body2" color="text.secondary">Registration #: {request.registrationNumber}</Typography>
        <Typography variant="body2" color="text.secondary">Submitted: {request.submittedDate}</Typography>
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href={request.documentUrl} target="_blank" rel="noopener noreferrer">
            View Documents
          </Link>
          <Box>
            <Button 
              variant="contained" 
              color="success" 
              startIcon={<CheckCircleOutline />} 
              sx={{ mr: 1 }}
              onClick={handleApprove}
            >
              Approve
            </Button>
            <Button 
              variant="contained" 
              color="error" 
              startIcon={<HighlightOff />} 
              onClick={handleReject}
            >
              Reject
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VerificationRequestCard;
