const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute =
  'mongodb+srv://subashcs:subash123@cluster0-tioky.mongodb.net/visitorentry?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
router.post('/getTodaysData', (req, res) => {
  console.log('request for data received');
  const today = new Date();
  var date= today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
      
  Data.find({entrydate:date},'name address phone department purpose entrydate entrytime',(err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, entries: data });
  });
});

//the following will get all data and also handle search results fetch
router.post('/getAllData', (req, res) => {
  console.log('request for data received');
      
  Data.find('name address phone department purpose entrydate entrytime',(err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, entries: data });
  });
});



// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post('/putData', (req, res) => {
  let data = new Data();
  console.log("data in server");
  
  console.log(data);
  const { id, name , address, phone , department , purpose , entrytime , entrydate } = req.body;

  if ((!id && id !== 0) || !name ) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  data.name = name;
  data.address =address;
  data.phone = phone;
  data.department = department;
  data.purpose = purpose;
  data.entrytime = entrytime;
  data.entrydate =entrydate;
  data.id = id;

  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true ,message:'Successfully Saved to DB' });
  });
  
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));