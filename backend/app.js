require('dotenv').config();
const express = require('express');
const cors = require('cors');
const searchController = require('./controller/search');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/search', searchController.search);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});