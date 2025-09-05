const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./upload",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: "No file uploaded" });
  }

  res.json({
    success: 1,
    image: `http://localhost:${process.env.PORT}/upload/${req.file.filename}`,
  });
};

module.exports = { upload, uploadFile };
