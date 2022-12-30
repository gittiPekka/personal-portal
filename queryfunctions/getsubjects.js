function getSubjects(query){
    const result = [];
    query.forEach(element => result[element.index] = {id: element._id.toString(),name: element.name ,links: element.links, index: element.index});
    return result;
}
module.exports.getSubjects = getSubjects;