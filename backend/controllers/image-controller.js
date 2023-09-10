// we remove the upload option demonstrated earlier so that the default datatype Multer provides is a buffer which will be captured by streamifier

const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const { clConfig } = require("../config/cloudinary.js");

console.log(clConfig);

const Exhibit = require('../models/Exhibit.js')

// establishes a connection to our service, verifies credentials, and continues the rest of the code execution
cloudinary.config(clConfig);

module.exports = { uploadPhoto };

async function uploadPhoto(req, res, next) {
  // console.log(req.file, "the file data")
  // console.log(req.body, "form data from non-file inputs")

  // res.redirect("/");
  try {
    // 1. stream data from req.files.buffer to cloudinary service

    let response = await streamUpload(req);
    // console.log(response);
    
    const foundPost = await Post.findById(req.params.id)
    // console.log(foundPost)

    // data parsing from the response to communicate with db!
    const photoData = {...req.body, url: response.url}
    // create new subdocument (object) from the req.body data + cloudinary service response

    // mutate document array
    foundPost.images.push(photoData)
    
    // write changes to db
    await foundPost.save()

    // take user back to detail page to see updated content
    res.redirect(`/posts/${req.params.id}`);
    
  } catch (err) {
    console.log(err);
    next(Error(err));
  }
}

function streamUpload(req) {
  return new Promise(function (resolve, reject) {
    let stream = cloudinary.uploader.upload_stream((error, result) => {
      if (result) {
        console.log(result);
        resolve(result);
      } else {
        reject(error);
      }
    });

    streamifier.createReadStream(req.file.buffer).pipe(stream);
  });
}
