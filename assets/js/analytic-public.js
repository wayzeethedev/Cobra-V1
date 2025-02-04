const express = require('express');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const app = express();
const PORT = 3000;

// Path to your service account key file
const KEY_FILE_PATH = 'path/to/your/service-account-key.json';

// Your Google Analytics 4 Property ID
const GA4_PROPERTY_ID = 'properties/YOUR_PROPERTY_ID';

// Initialize Google Analytics Data API client
const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: KEY_FILE_PATH,
});

// API route to fetch all-time users
app.get('/api/get-all-time-users', async (req, res) => {
  try {
    // Query Google Analytics for all-time users
    const [response] = await analyticsDataClient
