const pool = require('../../config/db'); // Database connection
const wkx = require('wkx'); // Used for geometry parsing

exports.getControlAirspaceData = async (req, res) => {
  try {
    const query = 'SELECT * FROM controlairspace';
    const result = await pool.query(query);
    
    const geojson = {
      type: "FeatureCollection",
      features: result.rows.map(row => {
        if (row.geom) {
          return {
            type: "Feature",
            geometry: wkx.Geometry.parse(Buffer.from(row.geom, 'hex')).toGeoJSON(),
            properties: {
              id: row.id,
              AirspaceType: row.AirspaceType,
              AirspaceCenter: row.AirspaceCenter,
              ControlledAirspaceName: row.ControlledAirspaceName,
              AirspaceClassification: row.AirspaceClassification,
              LowerLimit: row.LowerLimit,
              UpperLimit: row.UpperLimit
            }
          };
        } else {
          return {
            type: "Feature",
            geometry: null,
            properties: {
              id: row.id,
              AirspaceType: row.AirspaceType,
              AirspaceCenter: row.AirspaceCenter,
              ControlledAirspaceName: row.ControlledAirspaceName,
              AirspaceClassification: row.AirspaceClassification,
              LowerLimit: row.LowerLimit,
              UpperLimit: row.UpperLimit
            }
          };
        }
      })
    };

    res.json(geojson);
  } catch (err) {
    console.error('Error executing query or processing data:', err);
    res.status(500).send('Server Error');
  }
};
