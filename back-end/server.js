const express = require('express');
const cors = require('cors');
const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// const dotenv = require('dotenv');

// ROUTES
// const tasksRoute = require('./routes/tasksRoute');
const usersRoute = require('./routes/api/usersRoute');
// const authRoute = require('./routes/authRoute');
// const clientsRoute = require('./routes/clientsRoute');

// dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// USING TASKS ROUTE
// app.use('/api', tasksRoute);

// USING USERS ROUTES
app.use('/api', usersRoute);

// USING USERS ROUTES
// app.use('/api', clientsRoute);

app.get('/', (req, res) => {
  res.status(200).send('Simple get request on route /api');
});

module.exports = app;
