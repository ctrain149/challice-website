export default async function handler(req, res) {
  try {
    // eslint-disable-next-line no-console
    console.log('req.body :>> ', req.body);

    const response = await fetch(`${process.env.FLASK_EMAIL_API_URL}/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    return res.status(200).json({ data, error: '' });
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
