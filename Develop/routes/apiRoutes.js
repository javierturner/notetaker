var notesData = require("../db/db.json");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res) {
        notesData.push(req.body);
        res.json(true);
    });

    app.post("/api/clear", function(req, res) {
        notesData.length = 0;

        res.json({ ok: true});
    });
};