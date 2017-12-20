const settings = require("./settings");
var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
  }
});



// knex.select('*').from('ship').asCallback((error, results) => {
//   console.log(results);
// });

// knex.select('*').from('ship').where('id = $1::int'), process.argv[2];

knex('ship').insert({id: process.argv[2],
  name: process.argv[3],
  dom: process.argv[4],
  fleet_id: process.argv[5]}).asCallback((error, results) => {
    console.log(results);
});

