const express = require("express");
const moongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
moongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Step1 - Create Test Route
//Routes will actually go in a different file using express router
// Route to '/' which is homePage
// Old method of call backs was function(){}  but with new ES6 (or 2015) arrow function
app.get("/", (req, res) => res.send("Hello !!"));

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// This line means when we are in a hosted environment like Heroku port will will
// process.env.PORT but locally it iwll 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
