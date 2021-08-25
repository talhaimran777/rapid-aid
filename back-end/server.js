const express = require('express')
const cors = require('cors')
const app = express()

//use cors to allow cross origin resource sharing
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   })
// )

// const dotenv = require('dotenv');

// ROUTES

const authRoute = require('./routes/api/auth/authRoute')
const taskRoute = require('./routes/api/task/taskRoute')
// const usersRoute = require('./routes/api/usersRoute');
// const tasksRoute = require('./routes/api/tasksRoute');
// const authRoute = require('./routes/authRoute');
// const clientsRoute = require('./routes/clientsRoute');

// dotenv.config();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/tasks', taskRoute)

// USING AUTH ROUTE
// app.post('/login', (req, res) => {
//   res.send({ status: 200, message: 'Login successful' })
// })

// USING TASKS ROUTE
// app.use('/api', tasksRoute);

// USING USERS ROUTES
// app.use('/api', clientsRoute);

app.get('/', (req, res) => {
  res.status(200).send('Simple get request on route /api')
})

module.exports = app
