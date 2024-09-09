const pool = require('../../config/db');
const wkx = require('wkx');

exports.getRestrictedAirspaceData = async (req, res) => {
  try {
    const query = 'SELECT * FROM restricted_airspace';
    const result = await pool.query(query); 
    const geojson = {
      type: "FeatureCollection",
      features: result.rows.map(row => ({
        type: "Feature",
        geometry: wkx.Geometry.parse(Buffer.from(row.UR_restrictive, 'hex')).toGeoJSON(),
        properties: {
          id: row.id,
          RestrictivAirspaceDesgination: row.RestrictiveAirspaceDesignation,
          MultipleCode: row.MultipleCode
        }
      }))
    };
    res.json(geojson);
  } catch (err) {
    console.error('Error executing query or processing data:', err);
    res.status(500).send('Server Error');
  }
};
