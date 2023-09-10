///////////////////////
// DEPENDENCIES
///////////////////////

require('dotenv').config();

require('./config/database');

const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

const exhibitRouter = require('./routes/exhibit');

const cors = require('cors');
const morgan = require('morgan');

///////////////////////
// APP CONFIG
///////////////////////
const { PORT } = process.env

const app = express()
// console.log(PORT);

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

///////////////////////
// MIDDLEWARE
///////////////////////

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

///////////////////////
// ROUTER MIDDLEWARE
///////////////////////
app.use('/exhibit', exhibitRouter);

app.get('/', (req, res)=>{
    res.send('hello world!');
});

app.post('/upload', upload.single('image'), async (req, res) => {
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

///////////////////////
// SERVER
///////////////////////

app.listen(PORT, ()=>console.log(`Listen on port: ${PORT}`));