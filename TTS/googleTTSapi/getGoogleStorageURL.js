const { Storage } = require('@google-cloud/storage');
require('dotenv').config();

const projectId = process.env.PROJECT_ID;
const keyFilename = process.env.KEYFILENAME;
const storage = new Storage({ projectId, keyFilename });

async function getSignedUrl(bucketName, fileName) {
    const bucket = storage.bucket(bucketName);
    const file = bucket.file(fileName);

    // Generate a signed URL that allows access to the file for 48 hours (or your desired duration)
    const expiresAt = Date.now() + 48 * 60 * 60 * 1000; // 48 hours in milliseconds
    const signedUrl = await file.getSignedUrl({
        action: 'read',
        expires: expiresAt,
    });

    return signedUrl[0];
}

module.exports = getSignedUrl;
