const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');
const connectDB = require('./db/db');

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use('/users', userRoutes);
// app.use('/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// ye change kiya