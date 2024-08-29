const pool = require('../../config/db');
const wkx = require('wkx');

exports.getConvLineData = async (req, res) => {
  const { track_magnetic } = req.query;

  try {
    let query = 'SELECT * FROM convlinedata';
    let values = [];

    if (track_magnetic) {
      query += ' WHERE LOWER(track_magnetic) = LOWER($1)';
      values.push(track_magnetic);
    }

    const result = await pool.query(query, values);

    const geojson = {
      type: "FeatureCollection",
      features: result.rows.map(row => ({
        type: "Feature",
        geometry: wkx.Geometry.parse(Buffer.from(row.geomcolumn, 'hex')).toGeoJSON(),
        properties: {
          airway_id: row.airway_id,
          start_point: row.start_point,
          end_point: row.end_point,
          track_magnetic: row.track_magnetic,
          reverse_magnetic: row.reverse_magnetic,
          radial_distance: row.radial_distance,
          upper_limit: row.upper_limit,
          lower_limit: row.lower_limit,
          airspace: row.airspace,
          mea: row.mea,
          lateral_limits: row.lateral_limits,
          direction_of_cruising_levels: row.direction_of_cruising_levels,
          type: row.type,
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
