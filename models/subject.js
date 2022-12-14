const mongoose = require('mongoose');
const subjectSchema = new mongoose.Schema({
  name: String,
  links: [],
  index: Number
},{ collection : 'subjects' });

module.exports = mongoose.model('Subject', subjectSchema);