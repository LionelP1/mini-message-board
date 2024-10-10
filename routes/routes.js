const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();

router.get("/", messageController.getMessageList);
router.post("/new", messageController.createNewMessage);

module.exports = router;
