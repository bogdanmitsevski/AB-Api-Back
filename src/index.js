require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('../models');
const port = process.env.PORT | 3000;
app.use(express.text());
app.use(express.json());


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.use('/api', require('../routes/indexRouter'));
        app.listen(port, () => {
            console.log(`Server is working on PORT: ${port}`);
        })
    }
    catch (e) {
        console.log(e);
    }
};

start();