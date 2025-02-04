const mongoose = require('mongoose')
const Autoincrement = require('mongoose-sequence')(mongoose)

const studentSchema = new mongoose.Schema({
    Student_Name: {
        type: String,
        required: true
    },
    Roll_Number: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    Profile_Photo:{
        type:String,
        required:false
    },
    Report_Card:{
        type:String,
        required:false
    },
    Class: {
        type: String,
        required: false
    },
    School: {
        type: String,
        required: false
    },
    Fathers_Name: {
        type: String,
        required: true
    },
    Fathers_Occupation: {
        type: String,
        required: false
    },
    Mothers_Name: {
        type: String,
        required: false
    },
    Mothers_Occupation: {
        type: String,
        required: false
    },
    Centre: {
        type: String,
        required: true
    },
    Address:{
        type:String,
        required: false
    },
    Contact_No:{
        type:String,
        required: false
    },
    Annual_Income:{
        type:Number,
        required:false
    },
    Curr_Session:{
        type:String,
        required:false
    },
    Sponsorship_Status:{
        type:Boolean,
        required:false,
        default: false
    },
    Annual_Fees: {
        type: Number,
        required: false
    },
    Sponsor_Id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref:'Child_Sponsors'
    },
    Sponsorship_Percent:{
        type:Number,
        required:false,
        default: 0
    },
    Active_Status: {
        type: Boolean,
        required: false,
        default: true
    }
})

module.exports = mongoose.model('Students', studentSchema)