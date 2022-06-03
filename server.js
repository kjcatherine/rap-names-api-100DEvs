const { request } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(cors());
const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    age: 29,
    birthName: "Chancelor Bennett",
    birthLocation: "Chicago, Illinois",
  },
  unknown: {
    age: 0,
    birthName: "unknown",
    birthLocation: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const rapperName = request.params.name.toLowerCase();
  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
    //res.json(rappers[rapperName].birthName)
  } else {
    res.json(rappers["unknown"]);
  }
});
//try using heroku's port, if its not possible then use ours
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is now running on port ${PORT}`);
});
