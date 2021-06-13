const express = require('express');
const app = express();
// const dotenv = require('dotenv');

// ROUTES
const tasksRoute = require('./routes/tasksRoute');
// const usersRoute = require('./routes/usersRoute');
// const authRoute = require('./routes/authRoute');
// const clientsRoute = require('./routes/clientsRoute');

// dotenv.config();

app.use(express.json());

// USING TASKS ROUTE
app.use('/api', tasksRoute);

// USING USERS ROUTES
// app.use('/api', usersRoute);

// USING USERS ROUTES
// app.use('/api', clientsRoute);

app.get('/', (req, res) => {
  res.status(200).send('Simple get request on route /');
});

module.exports = app;
