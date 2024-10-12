const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();

router.get("/", messageController.getMessageList);

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", messageController.createNewMessage);

module.exports = router;
