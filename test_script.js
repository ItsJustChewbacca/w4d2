const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

function printShip(ship) {
  console.log(`- ${ship.id}: ${ship.name}, manufactured ${ship.dom}`);
}

function search(term) {
  client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM ship WHERE id = $1::int", [term], (err, result) => {
    console.log("searching...");
    if (err) {
      return console.error("error running query", err);
    }
    if (result) {
      console.log(`found ${result.rowCount} ship(s) by the id of ${term}:`);
      for( var i of result.rows) {
        printShip(i);
      }
    }
    client.end();
  });
});
}

search(process.argv[2]);