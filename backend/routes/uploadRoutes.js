const express = require("express");
const { upload, uploadFile } = require("../controllers/uploadController");

const router = express.Router();

// Serve static files from "upload" folder
router.use("/upload", express.static("upload"));

// Upload route
router.post("/upload", upload.single("product"), uploadFile);

module.exports = router;
