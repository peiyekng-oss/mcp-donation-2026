
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, CircularProgress, Box } from '@mui/material';

const HomePage = lazy(() => import('./pages/HomePage'));
const CreateDonationPage = lazy(() => import('./pages/CreateDonationPage'));
const DonationListPage = lazy(() => import('./pages/DonationListPage'));
const AvailableDonationsPage = lazy(() => import('./pages/AvailableDonationsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const DonationStatusPage = lazy(() => import('./pages/DonationStatusPage'));
const ImpactDashboardPage = lazy(() => import('./pages/ImpactDashboardPage'));
const NgoRegisterPage = lazy(() => import('./pages/NgoRegisterPage'));
const NgoDashboardPage = lazy(() => import('./pages/NgoDashboardPage'));
const NgoSettingsPage = lazy(() => import('./pages/NgoSettingsPage'));
const DonationDetailsPage = lazy(() => import('./pages/DonationDetailsPage'));
const AcceptedDonationsPage = lazy(() => import('./pages/AcceptedDonationsPage'));
const PickupCoordinationPage = lazy(() => import('./pages/PickupCoordinationPage'));
const ConfirmationPage = lazy(() => import('./pages/ConfirmationPage'));
const QualityCheckPage = lazy(() => import('./pages/QualityCheckPage'));
const DisputeSubmittedPage = lazy(() => import('./pages/DisputeSubmittedPage'));
const ImpactReportingPage = lazy(() => import('./pages/ImpactReportingPage'));
const ImpactReportSubmittedPage = lazy(() => import('./pages/ImpactReportSubmittedPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const DisputeResolutionPage = lazy(() => import('./pages/DisputeResolutionPage'));
const UserManagementPage = lazy(() => import('./pages/UserManagementPage'));
const PlatformAnalyticsPage = lazy(() => import('./pages/PlatformAnalyticsPage'));

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
      <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Box>}>
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
      </Suspense>
    </Router>
  );
};

export default App;
