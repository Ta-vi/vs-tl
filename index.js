const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/mapData', async (req, res) => {
  try {
    const MAPBOX_TOKEN = process.env.REACT_APP_API_KEY;
    const mapData = {
       initialViewState: {
        latitude: 45.177518,
      longitude: 28.801635,
      zoom: 14
          },
      mapStyle: mapStyle="mapbox://styles/ta-vi/clofs2sg6005d01r0c3043goq",
      mapboxAccessToken: MAPBOX_TOKEN,
      
    };
    res.json(mapData);
  } catch (error) {
    res.status(500).json({ error: 'Eroare la obtinerea datelor pentru harta' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Serverul ruleaza pe portul ${PORT}`));
