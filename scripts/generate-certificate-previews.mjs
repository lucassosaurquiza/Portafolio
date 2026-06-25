import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { basename, extname, join } from 'node:path'
import { createCanvas } from '@napi-rs/canvas'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'

const certificatesDir = join(process.cwd(), 'public', 'certificates')
const previewsDir = join(certificatesDir, 'previews')

await mkdir(previewsDir, { recursive: true })

const files = (await readdir(certificatesDir)).filter((file) => extname(file).toLowerCase() === '.pdf')

for (const file of files) {
  const pdfPath = join(certificatesDir, file)
  const outputPath = join(previewsDir, `${basename(file, '.pdf')}.png`)
  const data = new Uint8Array(await readFile(pdfPath))
  const pdf = await getDocument({ data, disableWorker: true }).promise
  const page = await pdf.getPage(1)
  const viewport = page.getViewport({ scale: 1.65 })
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height))
  const context = canvas.getContext('2d')

  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, canvas.width, canvas.height)

  await page.render({ canvasContext: context, viewport }).promise
  await writeFile(outputPath, canvas.toBuffer('image/png'))

  console.log(`Generated ${outputPath}`)
}
