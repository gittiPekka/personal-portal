const Subject = require('../models/subject');

async function updateIndex(id, index){
  const query =  await Subject.findByIdAndUpdate(id, { "index": index });
  // console.log("id: ", id);
  // console.log("index: ", index);
  if (!query) {
    throw 'Id not found!';
  }
}
module.exports.updateIndex = updateIndex;