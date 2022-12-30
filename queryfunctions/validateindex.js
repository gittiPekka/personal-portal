function validateIndex(query, index){
    console.log("indeksi oli: ", index);
    if (index < 1) {
        return false;
    }
    if (index > query.length - 1) {
        return false;
    }
    return true;
}
module.exports.validateIndex = validateIndex;