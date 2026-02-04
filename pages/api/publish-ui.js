import fs from "fs"
import path from "path"

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" })
  }

  const { html, id } = req.body

  if (!html || !id) {
    return res.status(400).json({ error: "Missing html or id" })
  }

  const dir = path.join(process.cwd(), "public/generated")

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  const filePath = path.join(dir, `${id}.html`)
  fs.writeFileSync(filePath, html)

  return res.status(200).json({
    preview_url: `https://${req.headers.host}/generated/${id}.html`
  })
}
