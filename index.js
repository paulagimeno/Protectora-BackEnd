const express = require('express');
const { connectDb } = require('./src/utils/database');
const routeUsers = require('./src/api/routes/users.routes');
const routePets = require('./src/api/routes/pets.routes')
const env = require('dotenv');
env.config();
const cors = require('cors');

const app = express();
connectDb();
app.use(express.json());
app.use(cors());

const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

app.use('/users', routeUsers);
app.use('/pets', routePets)

const PORT = 5055;
app.listen(PORT, () => {
console.log('escuchando por el puerto ' + PORT);
});