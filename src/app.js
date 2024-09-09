const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;

app.use(cors());

// Import routes
const convLineDataRoutes = require('./routes/convlinedataRoutes');
const nonConvLineDataRoutes = require('./routes/nonconvlinedataRoutes');
const waypointDataRoutes = require('./routes/waypointdata');
const navaidDataRoutes = require('./routes/navaiddataRoutes');
const controlAirspaceDataRoutes = require('./routes/controlairspacedataRoutes');
const restrictedAirspaceDataRoutes = require('./routes/restrictedAirspaceRoutes');
const aerodromeObstacleRoutes = require('./routes/aerodromeObstacleRoutes')
// Use routes
app.use('/api', convLineDataRoutes);
app.use('/api', nonConvLineDataRoutes);
app.use('/api', waypointDataRoutes);
app.use('/api', navaidDataRoutes);
app.use('/api', controlAirspaceDataRoutes);
app.use('/api', restrictedAirspaceDataRoutes);
app.use('/api', aerodromeObstacleRoutes);

app.listen(port, () => {
  // console.log(`Server running at http://mydb.cxeos2wmmsqf.us-east-2.rds.amazonaws.com:${port}`);
});
