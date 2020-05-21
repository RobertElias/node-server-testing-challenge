const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(201).json({ router: "cohort" });
});

module.exports = router;