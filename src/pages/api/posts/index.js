export default async function handler(req, res) {
  try {
    const response = await fetch(`${process.env.CHALLICE_API_URL}/api/posts`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    return res.status(200).json({ data, error: '' });
  } catch (e) {
    console.error(e);
    return res.status(e.statusCode || 500).json({ error: e.message });
  }
}
