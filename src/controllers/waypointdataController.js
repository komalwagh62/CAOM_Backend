const pool = require('../../config/db');
const wkx = require('wkx');

exports.getWaypointData = async (req, res) => {
  try {
    const query = 'SELECT * FROM significantpoints';
    const result = await pool.query(query);
    
    const geojson = {
      type: "FeatureCollection",
      features: result.rows.map(row => ({
        type: "Feature",
        geometry: wkx.Geometry.parse(Buffer.from(row.geom, 'hex')).toGeoJSON(),
        properties: {
          id: row.id,
          waypoints: row.waypoints,
          name_of_routes: row.name_of_routes
        }
      }))
    };

    res.json(geojson);
  } catch (err) {
    console.error('Error executing query or processing data:', err);
    res.status(500).send('Server Error');
  }
};
