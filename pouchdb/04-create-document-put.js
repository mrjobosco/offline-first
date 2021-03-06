// Create a new document and specify its ID
var db = new PouchDB("smart-meter");
console.log("Local database created");
db.put({
  _id: "2014-11-12T23:27:03.794Z",
  kilowatt_hours: 14
}).then(function() {
  console.log("Document created");
  // Delete the database
  return db.destroy();
}).then(function() {
  console.log("Local database deleted");
}).catch(function(error) {
  console.log(error);
});
