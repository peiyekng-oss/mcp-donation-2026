
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateDonationPage from './pages/CreateDonationPage';
import DonationListPage from './pages/DonationListPage';
import AvailableDonationsPage from './pages/AvailableDonationsPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import DonationStatusPage from './pages/DonationStatusPage';
import ImpactDashboardPage from './pages/ImpactDashboardPage';
import NgoRegisterPage from './pages/NgoRegisterPage';
import NgoDashboardPage from './pages/NgoDashboardPage';
import NgoSettingsPage from './pages/NgoSettingsPage';
import DonationDetailsPage from './pages/DonationDetailsPage';
import AcceptedDonationsPage from './pages/AcceptedDonationsPage';
import PickupCoordinationPage from './pages/PickupCoordinationPage';
import ConfirmationPage from './pages/ConfirmationPage';
import QualityCheckPage from './pages/QualityCheckPage';
import DisputeSubmittedPage from './pages/DisputeSubmittedPage';
import ImpactReportingPage from './pages/ImpactReportingPage';
import ImpactReportSubmittedPage from './pages/ImpactReportSubmittedPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import DisputeResolutionPage from './pages/DisputeResolutionPage';
import UserManagementPage from './pages/UserManagementPage';
import PlatformAnalyticsPage from './pages/PlatformAnalyticsPage';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WeGive
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/register">Donor Register</Button>
          <Button color="inherit" component={Link} to="/ngo/register">NGO Register</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
          <Button color="inherit" component={Link} to="/create">Create Donation</Button>
          <Button color="inherit" component={Link} to="/donations">My Donations</Button>
          <Button color="inherit" component={Link} to="/dashboard">Impact Dashboard</Button>
          <Button color="inherit" component={Link} to="/available-donations">Available Donations</Button>
          <Button color="inherit" component={Link} to="/ngo/accepted-donations">Accepted Donations</Button>
          <Button color="inherit" component={Link} to="/ngo/settings">NGO Settings</Button>
          <Button color="inherit" component={Link} to="/admin/dashboard">Admin Dashboard</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create" element={<CreateDonationPage />} />
        <Route path="/donations" element={<DonationListPage />} />
        <Route path="/donations/:id" element={<DonationStatusPage />} />
        <Route path="/dashboard" element={<ImpactDashboardPage />} />
        <Route path="/available-donations" element={<AvailableDonationsPage />} />
        <Route path="/available-donations/:id" element={<DonationDetailsPage />} />
        <Route path="/ngo/register" element={<NgoRegisterPage />} />
        <Route path="/ngo/dashboard" element={<NgoDashboardPage />} />
        <Route path="/ngo/accepted-donations" element={<AcceptedDonationsPage />} />
        <Route path="/ngo/pickup-coordination/:id" element={<PickupCoordinationPage />} />
        <Route path="/ngo/pickup-confirmation/:id" element={<ConfirmationPage />} />
        <Route path="/ngo/quality-check/:id" element={<QualityCheckPage />} />
        <Route path="/ngo/dispute-submitted/:id" element={<DisputeSubmittedPage />} />
        <Route path="/ngo/impact-reporting/:id" element={<ImpactReportingPage />} />
        <Route path="/ngo/impact-report-submitted/:id" element={<ImpactReportSubmittedPage />} />
        <Route path="/ngo/settings" element={<NgoSettingsPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/disputes" element={<DisputeResolutionPage />} />
        <Route path="/admin/users" element={<UserManagementPage />} />
        <Route path="/admin/analytics" element={<PlatformAnalyticsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
