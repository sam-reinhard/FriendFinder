var path = require("path");

module.exports = function(app){
    // Route to the survey page
    app.get("/survey.html", function (req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Default route to the home page
    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};    