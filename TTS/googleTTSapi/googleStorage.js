const { Storage } = require('@google-cloud/storage');
require('dotenv').config();

const projectId = process.env.PROJECT_ID;
const keyFilename = process.env.KEYFILENAME;
const storage = new Storage({ projectId, keyFilename });

async function uploadFile(bucketName, fileContent, fileOutputName) {
    try {
        const bucket = storage.bucket(bucketName);

        const file = bucket.file(fileOutputName);
        const stream = file.createWriteStream({
            metadata: {
                contentType: 'audio/mpeg', 
            },
        });

        
        stream.end(fileContent);

        // Wait for the upload to complete
        await new Promise((resolve, reject) => {
            stream.on('finish', resolve);
            stream.on('error', reject);
        });

        return { name: fileOutputName }; // Return the file name or any other relevant information
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

module.exports = uploadFile;
