export default async function handler(req, res) {
  const response = await fetch(
    `https://api.airtable.com/v0/appglQTlLLI5lYdIr/Dogs`,
    { headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` } }
  );
  const data = await response.json();
  res.json(data);
}