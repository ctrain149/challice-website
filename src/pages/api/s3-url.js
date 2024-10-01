import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
});

export default async function handler(req, res) {
  const { version } = req.query;

  if (!version) {
    return res.status(400).json({ error: 'Missing version parameter' });
  }

  try {
    const params = { Bucket: 'challices-website', Key: version };
    const s3Response = await s3.getObject(params).promise();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${version}`);
    res.status(200).send(s3Response.Body);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching object from S3' });
  }
}
