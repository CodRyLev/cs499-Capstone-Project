// app_server/services/slideshowService.js
const fs = require('fs');
const path = require('path');

function getAllDestinations() {
  const filePath = path.join(__dirname, '../data/destinations.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

module.exports = {
  getAllDestinations
};
