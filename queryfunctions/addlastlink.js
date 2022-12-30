const Subject = require('../models/subject');

async function addLastLink(id, link){
  const query = await Subject.find({_id: id});
  if (!query) {
    throw 'Id not found!';
  }
  query[0].links.push(link);
  const updated = Subject.findOneAndUpdate({ _id: id }, { 'links': query[0].links});
  if (!updated) {
    throw 'Couldnt add link!';
  }
  return updated;
}
module.exports.addLastLink = addLastLink;