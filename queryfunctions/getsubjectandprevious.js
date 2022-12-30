const CompareSubjects = require('./comparesubjects');

function getSubjectAndPrevious(query, id){
    let result = [];
    query.sort( CompareSubjects.compareSubjects );
    for (let i = 2; i < query.length; i++) {
        if (query[i]._id == id) {
            result.push({id: query[i - 1]._id.toString(),name: query[i - 1].name ,index: query[i - 1].index, links: query[i - 1].links});
            result.push({id: query[i]._id.toString(),name: query[i].name ,index: query[i].index, links: query[i].links});
            break;
        }
    }
    return result;
}
module.exports.getSubjectAndPrevious = getSubjectAndPrevious;