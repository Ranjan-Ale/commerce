import multer from "multer";
import path from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },

    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);

        crypto.randomBytes(16, (err, raw) => {
            if (err) {
                return cb(err);
            }

            cb(null, raw.toString("hex") + extension);
        });
    }
});

const upload = multer({
    storage: storage
});

export default upload;