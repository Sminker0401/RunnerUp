const express = require('express');
const sequelize = require('./config/connection');

const User = require('./models/user');
const Entry = require('./models/entry');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});