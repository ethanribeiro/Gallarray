const express = require('express');
const router = express.Router();
const exhibitCtrl = require("../controllers/exhibit-controller");
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

////////////////////////////////////
// ROUTES - RESTful routes
////////////////////////////////////

////////////////////////////////////
// INDEX - GET
////////////////////////////////////

router.get('/', exhibitCtrl.index);

////////////////////////////////////
// SHOW - DETAIL - GET
////////////////////////////////////

router.get('/:id', exhibitCtrl.show);

////////////////////////////////////
// CREATE - POST
////////////////////////////////////

router.post('/', exhibitCtrl.create);

////////////////////////////////////
// UPLOAD IMAGE - POST
////////////////////////////////////

router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        
        const stream = streamifier.createReadStream(req.file.buffer);
        
        const cloudinaryResponse = await cloudinary.uploader.upload_stream(
            {
                folder: 'gallarray',
                use_filename: true
            },
            async (error, result) => {
                if (error) {
                    return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
                }
                res.status(200).json({ imageUrl: result.secure_url });
            }
        );
        
        stream.pipe(cloudinaryResponse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

////////////////////////////////////
// DESTROY - DELETE
////////////////////////////////////

router.delete('/:id', exhibitCtrl.delete);

////////////////////////////////////
// UPDATE - PUT
////////////////////////////////////

router.put('/:id', exhibitCtrl.update);

module.exports = router