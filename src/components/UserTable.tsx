
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  Chip 
} from '@mui/material';

interface User {
  id: string;
  name: string;
  type: 'Donor' | 'NGO';
  email: string;
  registrationDate: string;
  status: 'Active' | 'Pending' | 'Suspended';
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {

  const handleSuspend = (userId: string) => {
    alert(`User ${userId} has been suspended.`);
  };

  const handleReactivate = (userId: string) => {
    alert(`User ${userId} has been reactivated.`);
  };

  const getStatusChipColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Suspended':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Registration Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell>{user.type}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.registrationDate}</TableCell>
              <TableCell>
                <Chip label={user.status} color={getStatusChipColor(user.status)} />
              </TableCell>
              <TableCell align="right">
                {user.status === 'Active' &&
                  <Button variant="outlined" color="error" onClick={() => handleSuspend(user.id)}>
                    Suspend
                  </Button>
                }
                {user.status === 'Suspended' &&
                  <Button variant="outlined" color="success" onClick={() => handleReactivate(user.id)}>
                    Reactivate
                  </Button>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
