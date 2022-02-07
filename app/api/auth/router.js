const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.post("/auth/signin", controller.signin);
router.post("/auth/signup", controller.signup);

module.exports = router;
