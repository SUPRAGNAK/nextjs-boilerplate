export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" })
  }

  const { html, id } = req.body

  if (!html || !id) {
    return res.status(400).json({ error: "Missing html or id" })
  }

  // Encode HTML safely
  const encoded = Buffer.from(html).toString("base64")

  return res.status(200).json({
    preview_url: `https://${req.headers.host}/preview/${id}?data=${encoded}`
  })
}
