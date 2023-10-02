const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const conn = require("./db");

conn.on("connected", () => {
    console.log("Connected To MondoDB!")
});

app.use(express.json());
app.use(cors());

//routes
app.use("/users", require("./routes/users"));

app.listen(PORT, () => console.log("Sever Is Running On Port " + PORT));