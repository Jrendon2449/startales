const PORT = 8000
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import moment from 'moment';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express()
app.use(express.json())
app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// My API Key PLEASE DON'T SHARE
const apiKey = 'c4378c49-7925-4781-b3a8-47d85d277864';
const apiSecret = '572dc4dac6d2853e89b3b7ffc0ff72698ca6be81910f988b3408556afef6bed2ef072fbc947989744b4d21cbfe0b1a83520f58a0e4529c63a83f06e9a24a5f9feab041743c253ef9262b9494e2b244814f33c3a854e1465388164628289e17acc85ae225516ca997ae106daf58dfb2b9';

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});

app.get('/api/v2/bodies/positions/', async (req, res) => {
    // const { body, longitude, latitude, elevation, fromDate, toDate, time } = req.query;
    const longitude = 110.75;
    const latitude = 1.5;
    const elevation = 1000;
    const fromDate = new Date();
    const toDate = new Date();
    const time = "12:00:00";
    const url = `https://api.astronomyapi.com/api/v2/bodies/positions/Uranus`;
    const headers = {
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
    };

    try {
        const response = await axios.get(url, { 
            headers,
            params: {
                longitude: longitude,
                latitude: latitude,
                elevation: elevation,
                from_date: moment(fromDate).format("YYYY-MM-DD"),
                to_date: moment(toDate).format("YYYY-MM-DD"),
                time: moment(time, "HH:mm:ss").format("HH:mm:ss")
            }
        });
        res.json(response.data);
    } catch (error) {
        console.log(error.response.data);
        res.status(500).send('Internal Server Error');
    }
});


// Listens on Port 8000 for now
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})