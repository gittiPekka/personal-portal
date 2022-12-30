const Subject = require('../models/subject');

async function deleteLink(id, index){
    const query = await Subject.find({_id: id});
    if (!query) {
      throw 'Id not found!';
    }
    query[0].links.splice(index, 1);
    const updated = await Subject.findOneAndUpdate({ _id: id }, { 'links': query[0].links});
    if (!updated) {
      throw 'Couldnt delete link!';
    }
  }
module.exports.deleteLink = deleteLink;