function getIndexById(query, id){
    let result;

    for (let i = 0; i < query.length; i++) {
        if (query[i]._id == id) {
            result = query[i].index;
            break;
        }
    }
    return result;
}
module.exports.getIndexById = getIndexById;