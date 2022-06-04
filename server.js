const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));

let rappers = {
  "21 savage": {
    age: 29,
    birthName: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
    origin: "Atlanta, Georgia",
    genre: "hip hop, trap, rap, horrorcore",
    occupation: "rapper, songwriter, record producer",
    yearsActive: "2013-present",
    labels: "Epic, Slaughter Gang",
    children: 3,
  },
  "chance the rapper": {
    age: 29,
    birthName: "Chancelor Bennett",
    birthdate: "April 16, 1993",
    birthLocation: "London, England",
    origin: "Chicago, Illinois",
    genre: "hip hop, alternative hip hop, r & b",
    occupation:
      "rapper, singer, song writer, record producer, activist, actor, philanthropist",
    yearsActive: "2011-present",
    labels: "none",
    children: 0,
  },
  unknown: {
    age: 0,
    birthName: "unknown",
    birthdate: "unknown",
    birthLocation: "unknown",
    origin: "unknown",
    genre: "unknown",
    occupation: "unknown",
    yearsActive: "unknown",
    labels: "unknown",
    children: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const rapperName = req.params.name.toLowerCase();
  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
    //res.json(rappers[rapperName].birthName)
  } else {
    res.json(rappers["unknown"]);
  }
});
//try using heroku's port, if its not possible then use ours
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
