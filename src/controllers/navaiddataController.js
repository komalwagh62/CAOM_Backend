const pool = require('../../config/db');
const wkx = require('wkx');

exports.getNavaidData = async (req, res) => {
  try {
    const query = 'SELECT * FROM navaids';
    const result = await pool.query(query);
    
    const geojson = {
      type: "FeatureCollection",
      features: result.rows.map(row => ({
        type: "Feature",
        geometry: wkx.Geometry.parse(Buffer.from(row.geom, 'hex')).toGeoJSON(),
        properties: {
          id: row.id,
          airport_icao: row.airport_icao,
          navaid_information:row.navaid_information, 
          identification:row.identification, 
          frequency_and_channel:row.frequency_and_channel, 
          hours_of_operation: row.hours_of_operation,
          elevation: row.elevation, 
          service_volume_radius: row.service_volume_radius, 
          remarks: row.remarks
        }
      }))
    };

    res.json(geojson);
  } catch (err) {
    console.error('Error executing query or processing data:', err);
    res.status(500).send('Server Error');
  }
};
