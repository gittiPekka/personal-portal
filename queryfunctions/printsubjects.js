const CompareSubjects = require('./comparesubjects');

function printSubjects(query){
    query.sort( CompareSubjects.compareSubjects );
    console.log(query);
}
module.exports.printSubjects = printSubjects;