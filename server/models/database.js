const mongoose = require('mongoose');

main().catch((error) => console.log(error));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/writing-block');
  console.log('Successfully connected to database.');
}

module.exports = mongoose;