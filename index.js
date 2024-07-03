// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const errorHandler = require('./middleware/errorHandler');
// const PORT = 4000;
// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(errorHandler);


// mongoose
// .connect("mongodb://127.0.0.1:27017/TaskManager")
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.log("Mongo Error",err));

// app.use('/tasks', require('./routes/taskRoutes'));

// app.listen( PORT,() => console.log("server started on port",PORT));


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const PORT = 4000;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(errorHandler); // Assuming errorHandler is correctly defined

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/TaskManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error", err));

// Routes
app.use('/tasks', require('./routes/taskRoutes'));

// Server Start
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


