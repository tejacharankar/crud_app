const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/usersapp_db" , {
   useNewUrlParser: true,
   useUnifiedTopology: true, 
   family: 4,
});

module.exports = mongoose.connection;