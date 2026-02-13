import express from 'express';
import cors from 'cors';
import { donations } from './mockDonations';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

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

app.post('/api/calendar/create-event', (req, res) => {
  const event = req.body;
  console.log('Received event:', event);
  res.status(200).send({ message: 'Event created successfully (Simulated).' });
});

app.post('/api/hubspot/sync-contact', (req, res) => {
  const contact = req.body;
  console.log('Received contact:', contact);
  res.status(200).send({ success: true, message: 'Contact synced successfully (Simulated).' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
