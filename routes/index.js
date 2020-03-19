var express = require("express");
var router = express.Router();
var fs = require("fs");
var dataPath = "./data/cases.json";

/* GET home page. */
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
router.get("/api/data", function(req, res, next) {
  if (req.header("secret") == "CoolSecret123") {
    let cases = JSON.parse(fs.readFileSync(dataPath));

    res.json(cases);
  } else {
    res.json({ result: "You don't have permission to access this view!" });
  }
});
router.post("/api/data", function(req, res, next) {
  if (req.header("secret") == "CoolSecret123") {
    let data = JSON.stringify(req.body);
    fs.writeFileSync(dataPath, data);

    let cases = JSON.parse(fs.readFileSync(dataPath));

    res.json(cases);
  } else {
    res.json({ result: "You don't have permission to access this view!" });
  }
});
module.exports = router;
