const express = require("express");
const router = express.Router();
const {InsertImage}=require("../controllers/Image");

router.route("/uploads").post(InsertImage);

module.exports = router;