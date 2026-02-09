const multer = require("multer");
const storage = multer.memoryStorage();
const allowImg = ["image/png", "image/jpg", "image/jpeg", "image/webp"]
const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 2
    },
    fileFilter: (req, file, cb) => {
        if (allowImg.includes(file.mimetype)) {
            cb(null, true)
        }
        else {
            throw new Error("please upload valid format img"),
            false
        }
    }
})

module.exports = upload