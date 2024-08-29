const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;

app.use(cors());

// Import routes
const convLineDataRoutes = require('./routes/convlinedata');
const nonConvLineDataRoutes = require('./routes/nonconvlinedata');
const waypointDataRoutes = require('./routes/waypointdata');
const navaidDataRoutes = require('./routes/navaiddata');

// Use routes
app.use('/api', convLineDataRoutes);
app.use('/api', nonConvLineDataRoutes);
app.use('/api', waypointDataRoutes);
app.use('/api', navaidDataRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
