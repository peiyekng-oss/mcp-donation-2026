import express from 'express';
import cors from 'cors';
import { donations } from './mockDonations';
import { mockUsers } from './mockUsers';
import { mockVerificationRequests } from './mockVerificationRequests';
import { userGrowthData, donationVolumeData, categoryDistributionData } from './mockAnalytics';
import { mockDisputes } from './mockDisputes';
import { google } from 'googleapis';
import { Client } from '@hubspot/api-client';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// --- Google Calendar API ---
// TODO: Replace with your actual credentials
// 1. Create a service account with Google Calendar API enabled in your Google Cloud Platform project.
// 2. Download the service account key file (a JSON file).
// 3. Set the GOOGLE_APPLICATION_CREDENTIALS environment variable to the path of your key file.
//    Alternatively, you can load the credentials directly in the code.
const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/calendar'],
});

const calendar = google.calendar({ version: 'v3', auth });

// --- HubSpot API ---
// TODO: Replace with your actual HubSpot API key
// 1. Create a HubSpot developer account.
// 2. Create a private app and get your API key.
// 3. Set the HUBSPOT_API_KEY environment variable to your API key.
const hubspotClient = new Client({ apiKey: process.env.HUBSPOT_API_KEY });


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/donations', (req, res) => {
  res.json(donations);
});

app.get('/api/donations/:id', (req, res) => {
  const donation = donations.find(d => d.id === req.params.id);
  if (donation) {
    res.json(donation);
  } else {
    res.status(404).send('Donation not found');
  }
});

app.post('/api/donations', (req, res) => {
  const newDonation = req.body;
  newDonation.id = (donations.length + 1).toString();
  donations.push(newDonation);
  res.status(201).json(newDonation);
});

app.get('/api/users', (req, res) => {
  res.json(mockUsers);
});

app.get('/api/verification-requests', (req, res) => {
  res.json(mockVerificationRequests);
});

app.get('/api/analytics/user-growth', (req, res) => {
  res.json(userGrowthData);
});

app.get('/api/analytics/donation-volume', (req, res) => {
  res.json(donationVolumeData);
});

app.get('/api/analytics/category-distribution', (req, res) => {
  res.json(categoryDistributionData);
});

app.get('/api/disputes', (req, res) => {
  res.json(mockDisputes);
});

app.post('/api/calendar/create-event', async (req, res) => {
  const event = req.body;
  try {
    const createdEvent = await calendar.events.insert({
      calendarId: 'primary', // or your calendar ID
      requestBody: event,
    });
    res.status(201).json(createdEvent);
  } catch (error) {
    console.error('Error creating calendar event:', error);
    res.status(500).send('Error creating calendar event');
  }
});

app.post('/api/hubspot/sync-contact', async (req, res) => {
  const { email, firstname, lastname } = req.body;
  const properties = {
    email,
    firstname,
    lastname,
  };
  const simplePublicObjectInput = { properties };

  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.create(simplePublicObjectInput);
    res.status(201).json(apiResponse);
  } catch (error) {
    console.error('Error creating HubSpot contact:', error);
    res.status(500).send('Error creating HubSpot contact');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
