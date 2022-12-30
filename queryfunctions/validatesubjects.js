const CompareSubjects = require('./comparesubjects');

function validateSubjects(query){
    query.sort( CompareSubjects.compareSubjects );
    if (query[0].name != "no_subject") {
        return false;
    }
    for (let i = 0; i < query.length; i++) {
        if (query[i].index != i) {
            return false;
        }
    }
    // console.log("Data is valid!");
    return true;
}
module.exports.validateSubjects = validateSubjects;