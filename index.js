const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler')
const logger = require('./middleware/logger');
const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(errorHandler);

mongoose
.connect("mongodb://127.0.0.1:27017/TaskManager")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error",err));

app.use('./tasks' , require('./routes/taskRoutes'));
app.listen( PORT,() => console.log("server started on port",PORT));
