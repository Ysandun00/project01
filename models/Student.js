const mongoose = require("mongoose");

const schema = mongoose.schema;

const studentschema = new schema ({

    name:{
        type: String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    gender:{
        type:String,
        required: true
    }
})

const student = mongoose.model("student",studentschema);
module.export = student;





