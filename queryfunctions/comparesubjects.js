function compareSubjects(firstSubject, secondSubject){
    if ( firstSubject.index < secondSubject.index ){
        return -1;
      }
      if ( firstSubject.index > secondSubject.index ){
        return 1;
      }
      return 0;
}
module.exports.compareSubjects = compareSubjects;