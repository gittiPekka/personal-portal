const CompareSubjects = require('./comparesubjects');

function getSubjectAndRest(query, id){
    let result = [];
    let toResult = false;
    query.sort( CompareSubjects.compareSubjects );
    for (let i = 0; i < query.length; i++) {
        if (query[i]._id == id) {
            toResult = true;
        }
        if (toResult) {
            result.push({id: query[i]._id.toString(),name: query[i].name ,index: query[i].index, links: query[i].links});
        }
    }
    return result;
}
module.exports.getSubjectAndRest = getSubjectAndRest;