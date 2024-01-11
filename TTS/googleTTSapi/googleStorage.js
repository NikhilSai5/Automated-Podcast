const { Storage } = require('@google-cloud/storage');

require('dotenv').config();


const projectId = process.env.PROJECT_ID;
const keyFilename = process.env.KEYFILENAME;


const storage = new Storage({ projectId, keyFilename });


async function uploadFile(bucketName, file, fileOutputName) {
    try {
        
        const bucket = storage.bucket(bucketName);

        
        const ret = await bucket.upload(file, {
            destination: fileOutputName
        });

        
        return ret;
    } catch (error) {
        console.error('Error:', error);
    }
}

// // Use an immediately-invoked function expression (IIFE) to call the uploadFile function
// (async () => {
//     // Call the uploadFile function with the specified parameters
//     const ret = await uploadFile(process.env.BUCKET_NAME, 'test.txt', 'CodingWithAdo.txt');

//     // Log the result of the upload operation to the console
//     console.log(ret);
// })();

module.exports = uploadFile