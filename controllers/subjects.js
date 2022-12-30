const subjectsRouter = require('express').Router();
const Subject = require('../models/subject');
const GetSubjects = require('../queryfunctions/getsubjects');
const GetSubjectAndRest = require('../queryfunctions/getsubjectandrest');
const GetSubjectAndPrevious = require('../queryfunctions/getsubjectandprevious');
const GetSubjectAndRestByIndex = require('../queryfunctions/getsubjectandrestbyindex');
const GetIndexById = require('../queryfunctions/getindexbyid');
const UpdateIndex = require('../queryfunctions/updateindex');
const PrintSubjects = require('../queryfunctions/printsubjects');
const DeleteLink = require('../queryfunctions/deletelink');
const AddLastLink = require('../queryfunctions/addlastlink');
const ValidateSubjects = require('../queryfunctions/validatesubjects');
const ValidateIndex = require('../queryfunctions/validateindex');
// const ROWS = 10;
// const COLUMNS = 10;


//Get all subjects
subjectsRouter.get('/', async (request, response, next) => {
  try {
    const query = await Subject.find({});
    // PrintSubjects.printSubjects(query);
    let subjects = GetSubjects.getSubjects(query);
    if (subjects) {
      if (!ValidateSubjects.validateSubjects(query)) {
        return response.status(400).json({ error: 'Returned data is corrupted' });
      }
      response.json(subjects);
      response.status(204).end();
    } else {
              response.status(404).end();
            }
  }catch (exception) {
    next(exception);
  }
})

//Get other links
// subjectsRouter.get('/:id', async (request, response, next) => {
//   try {
//     const query = await Subject.find({_id: request.params.id})
//     console.log("query oli: ", query)
//   }catch (exception) {
//     next(exception)
//   }
// })

//Add one subject with subjectname to place index
subjectsRouter.post('/admin/:subjectname/:index', async (request, response, next) => {
  try {
    const query = await Subject.find({});
    if (!ValidateSubjects.validateSubjects(query)) {
      return response.status(400).json({ error: 'Returned data is corrupted' })
    }
    if (!ValidateIndex.validateIndex(query, request.params.index)) {
      return response.status(400).json({ error: 'Inserted index is not correct' });
    }
    let subjects = GetSubjectAndRestByIndex.getSubjectAndRestByIndex(query, request.params.index)
    const subject = new Subject({
      name: request.params.subjectname,
      links: [],
      index: request.params.index
    });
    const savedSubject = await subject.save();
    if (!savedSubject) {
      return response.status(400).json({ error: 'Couldnt save the subject' });
    }
    // console.log("savedsubject: ", savedSubject)
    response.json(savedSubject);
    let i = 0;
    while (i < subjects.length) {
      UpdateIndex.updateIndex(subjects[i].id, subjects[i].index + 1);
      i++;
    }
    response.status(204).end();
  }catch (exception) {
    next(exception);
  }
})
  
//Delete one subject with id
subjectsRouter.delete('/admin/:id', async (request, response, next) => { 
  try {
    const query = await Subject.find({})
    if (!ValidateSubjects.validateSubjects(query)) {
      return response.status(400).json({ error: 'Returned data is corrupted' });
    }
    if (!ValidateIndex.validateIndex(query, request.params.index)) {
      return response.status(400).json({ error: 'Inserted index is not correct' });
    }
    let subjects = GetSubjectAndRest.getSubjectAndRest(query, request.params.id)
    const toBeRemoved = await Subject.findByIdAndRemove(request.params.id);
    if (!toBeRemoved) {
      return response.status(404).json({ error: 'Subject to be removed not found' });
    }
    const linksToNoSubject = await Subject.findByIdAndUpdate(query[0].id, { "links": query[0].links.concat(subjects[0].links) })
    if (!linksToNoSubject) {
      return response.status(404).json({ error: 'Cannot move links' });
    }
    let i = 1;
    while (i < subjects.length) {
      UpdateIndex.updateIndex(subjects[i].id, subjects[i].index - 1);
      i++;
    }
    response.json(toBeRemoved);
    response.status(204).end();
  }catch (exception) {
    next(exception);
  }
})

  // Change subject name
  subjectsRouter.put('/admin/name/:id/:name', async (request, response, next) => {
    try {
      const updated = await Subject.findOneAndUpdate({ _id: request.params.id }, { 'name': request.params.name});
      if (!updated) {response.status(404).end();}
      response.json(updated);
      response.status(204).end();
    }catch (exception) {
      next(exception);
    }
  })  


  // Change subject index
  subjectsRouter.put('/admin/index/:id/:index', async (request, response, next) => { 
    try {
      const query = await Subject.find({});
      if (!ValidateSubjects.validateSubjects(query)) {
        return response.status(400).json({ error: 'Returned data is corrupted' });
      }
      if (!ValidateIndex.validateIndex(query, request.params.index)) {
        return response.status(400).json({ error: 'Inserted index is not correct' });
      }
      let subjects = GetSubjectAndRest.getSubjectAndRest(query, request.params.id);
      let toBeMoved = subjects[0];
      const deleteQuery = await Subject.findByIdAndRemove(subjects[0].id);
      if (!deleteQuery) {
        return response.status(404).json({ error: 'Subject to be removed not found' });
      }
      let i = 1;
      while (i < subjects.length) {
        UpdateIndex.updateIndex(subjects[i].id, subjects[i].index - 1);
        i++;
      }
      toBeSaved = new Subject({"name": toBeMoved.name, "links": toBeMoved.links, "index": request.params.index});
      const saveObject = await toBeSaved.save();
      if (!saveObject) {
        return response.status(400).json({ error: 'Couldnt save the subject' });
      }
      const newQuery = await Subject.find({});
      if (!ValidateSubjects.validateSubjects(newQuery)) {
        return response.status(400).json({ error: 'Returned data is corrupted' });
      }
      subjects = GetSubjectAndRestByIndex.getSubjectAndRestByIndex(newQuery, request.params.index);
      let j = 1;
      while (j < subjects.length) {
        UpdateIndex.updateIndex(subjects[j].id, subjects[j].index + 1);
      j++;
      }
      response.json(saveObject);
      response.status(204).end(); 
    }catch (exception) {
      next(exception);
    }
  })

  // decrease subject index by one
  subjectsRouter.put('/admin/index/:id/', async (request, response, next) => { 
    try {
      const query = await Subject.find({});
      if (!ValidateSubjects.validateSubjects(query)) {
        return response.status(400).json({ error: 'Returned data is corrupted 160' });
      }
      const index = GetIndexById.getIndexById(query, request.params.id);
      if (!ValidateIndex.validateIndex(query, index)) {
        return response.status(400).json({ error: 'Inserted index is not correct' });
      }
      if (!ValidateIndex.validateIndex(query, index - 1)) {
        return response.status(400).json({ error: 'Inserted index is not correct' });
      }
      let subjects = GetSubjectAndPrevious.getSubjectAndPrevious(query, request.params.id);
      // console.log(subjects);
      const deleteQuery = await Subject.findByIdAndRemove(subjects[0].id);
      if (!deleteQuery) {
        return response.status(404).json({ error: 'Subject to be removed not found' });
      }
      const secondDeleteQuery = await Subject.findByIdAndRemove(subjects[1].id);
      if (!secondDeleteQuery) {
        return response.status(404).json({ error: 'Subject to be removed not found' });
      }
      subjects[0].index++;
      subjects[1].index--;
      toBeSavedPrevious = new Subject({"name": subjects[0].name, "links": subjects[0].links, "index": subjects[0].index});
      const savePreviousObject = await toBeSavedPrevious.save();
      if (!savePreviousObject) {
        return response.status(400).json({ error: 'Couldnt save the subject' });
      }
      toBeSaved = new Subject({"name": subjects[1].name, "links": subjects[1].links, "index": subjects[1].index});
      const saveObject = await toBeSaved.save();
      if (!saveObject) {
        return response.status(400).json({ error: 'Couldnt save the subject' });
      }
      response.json(saveObject);
      response.status(204).end();
    }catch (exception) {
      next(exception);
    }
  }) 

  // Move link from no_subject links element index to subject id as last element
  subjectsRouter.patch('/admin/subject/:index/:id/', async (request, response, next) => {
    try {
      const query = await Subject.find({name: "no_subject"});
      if (!query) {
        return response.status(404).json({ error: 'Subject not found' });
      }
      let link = query[0].links[request.params.index];
      DeleteLink.deleteLink(query[0]._id, request.params.index);
      const updatedSubject = AddLastLink.addLastLink(request.params.id, link);
      console.log("Link moved!");
      response.json(updatedSubject);
      response.status(204).end();
    }catch (exception) {
      next(exception);
    }
  })

  // Move link to index
  subjectsRouter.patch('/admin/index/:newindex/:index/:id/', async (request, response, next) => {
    try {
      const query = await Subject.find({_id: request.params.id});
      if (!query) {
        return response.status(404).json({ error: 'Subject not found' });
      }
      // console.log(query[0].links)
      let link = query[0].links[request.params.index];
      query[0].links.splice(request.params.index, 1);
      query[0].links.splice(request.params.newindex, 0, link);
      const updated = await Subject.findOneAndUpdate({ _id: request.params.id }, { 'links': query[0].links});
      if (!updated) {
        return response.status(404).json({ error: 'Coulndnt update subject' });
      }
      response.json(updated);
      response.status(204).end();
    }catch (exception) {
      next(exception);
    }
  })

  // Change link name
  subjectsRouter.patch('/admin/name/:newname/:index/:id/', async (request, response, next) => {
    try {
      const query = await Subject.find({_id: request.params.id});
      if (!query) {
        return response.status(404).json({ error: 'Subject not found' });
      }
      query[0].links[request.params.index].name = request.params.newname;
      const updated = await Subject.findOneAndUpdate({ _id: request.params.id }, { 'links': query[0].links});
      if (!updated) {
        return response.status(404).json({ error: 'Coulndnt update subject' });
      }
      response.json(updated);
      response.status(204).end();
    }catch (exception) {
      next(exception);
    }
  })    

//   // Add link
//   app.patch('/admin/:id/:index/', (request, response) => { 
//     // body homma
//   })

//   // Toggle link live
//   app.patch('/admin/live/:id/', (request, response) => { 

//   })

  // Delete link
  subjectsRouter.patch('/admin/delete/:id/:index/', async (request, response, next) => {
    try {
      const query = await Subject.find({_id: request.params.id});
      if (!query) {
        return response.status(404).json({ error: 'Subject not found' });
      }
      query[0].links.splice(request.params.index, 1);
      const updated = await Subject.findOneAndUpdate({ _id: request.params.id }, { 'links': query[0].links});
      if (!updated) {
        return response.status(404).json({ error: 'Coulndnt update subject' });
      }
      response.json(updated);
      response.status(204).end();
    }catch (exception) {
      next(exception);
    }
  })

  //   // Move link to another subject as last
  subjectsRouter.patch('/admin/subject/:id/:newid/:index/', async (request, response, next) => {
    try {
      const query = await Subject.find({_id: request.params.id});
      if (!query) {
        return response.status(404).json({ error: 'Subject not found' });
      }
      let link = query[0].links[request.params.index];
      query[0].links.splice(request.params.index, 1);
      const deleted = await Subject.findOneAndUpdate({ _id: request.params.id }, { 'links': query[0].links});
      if (!deleted) {
        return response.status(404).json({ error: 'Coulndnt update subject' });
      }
      const newQuery = await Subject.find({_id: request.params.newid});
      if (!newQuery) {
        return response.status(404).json({ error: 'Subject not found' });
      }
      newQuery[0].links.push(link);
      const updated = await Subject.findOneAndUpdate({ _id: request.params.newid }, { 'links': newQuery[0].links});
      if (!updated) {
        return response.status(404).json({ error: 'Coulndnt update subject' });
      }
      response.json(updated);
      response.status(204).end();
    }catch (exception) {
      next(exception);
    }
  })

module.exports = subjectsRouter;