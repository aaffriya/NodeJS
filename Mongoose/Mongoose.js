const mongoose = require("mongoose")

// Database connection
mongoose.connect("mongodb://localhost:27017/users",{ 
    // useNewUrlParser: true,  
    // useCreateIndex: true,
    // useUnifiedTopology: true
})
.then(() => console.log("Connection Successful"))
.catch(() => console.log("Connection Failed"))


//Data ---------------------------------------------------------------------
const data = [
    {   id: 1,
        name: 'Om Prakash',
        present: false
    },
    {   id: 2,
        name: 'Mayank Singh',
        present: false
    },
    {   id: 3,
        name: 'Vikash',
        present: true
    },
    {   id: 4,
        name: 'Jyotika Bandil',
        present: false
    },
    {   id: 5,
        name: 'Bhupender',
        present: true
    },
    {   id: 6,
        name: 'Ravi Kumar',
        present: false
    },
    {   id: 7,
        name: 'Abhilash',
        present: true
    },
    {   id: 8,
        name: 'Rajan Yadav',
        present: true
    },
    {   id: 9,
        name: 'Gulafsa Jahan',
        present: true
    },
    {   id: 10,
        name: 'Aniket Yadav',
        present: true
    },
    {   id: 11,
        name: 'Hitesh Jatav',
        present: true
    },
    {   id: 12,
        name: 'Pragati Tiwari',
        present: true
    },
]

// // Mongoose model and Schema -------------------------------------------
const Collections_name = mongoose.model('user',{
    id: {
        type: Number,
        required: true,
        unique:true
    },
    name: String,
    present: Boolean
})

// // insert ----------------------------------------------------------------                                                 

// Collections_name.insertMany(data)
// .then(() => console.log("Data inserted"))  // Success
// .catch(() => console.log("Insert Error"))      // Failure

// // read ------------------------------------------------------------------                                                    

// parameter [query/condition]
// Collections_name.find({},{}, function (err,docs) {
//     console.log(docs)
// })

// Update -----------------------------------------------------------------                                                 

// Find all documents matching the
// This function has 4 parameters i.e.
// filter, update, options, callback
// Collections_name.updateMany({name:'Bhupender'}, {name:'Bhupender Yadav'},(err, docs) => {
//     if (err) console.log(err) // error
//     if (docs) console.log("Updated Docs : ", docs) //Success
// })


// // Delete -----------------------------------------------------------------

// Collections_name.deleteMany({present:false })
// .then(() => console.log("Deleted!"))
// .catch(() => console.log("Delete Error"))
