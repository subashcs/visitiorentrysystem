const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const VisitorSchema = new Schema(
  {
    id: Number,
    name: String,
    address:String,
    phone:String,
    department:String,
    purpose:String,
    entrydate:String,
    entrytime:String,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Visitor", VisitorSchema);