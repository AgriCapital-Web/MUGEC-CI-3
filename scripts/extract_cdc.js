import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pdfPath = path.join(__dirname, '..', 'public', 'documents', 'CDC_TECHNIQUE_INTERNE_MUGEC-CI.pdf');
const outPath = path.join(__dirname, '..', 'supabase', 'migrations', 'CDC_TECHNIQUE_INTERNE_MUGEC-CI.txt');

import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

async function extractText(pdfBuffer) {
  const loadingTask = pdfjsLib.getDocument({ data: pdfBuffer });
  const doc = await loadingTask.promise;
  let fullText = '';
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    fullText += strings.join(' ') + '\n\n';
  }
  return fullText;
}

(async () => {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const uint8 = new Uint8Array(dataBuffer.buffer, dataBuffer.byteOffset, dataBuffer.byteLength);
    const text = await extractText(uint8);
    fs.mkdirSync(path.join(__dirname, '..', 'supabase', 'migrations'), { recursive: true });
    fs.writeFileSync(outPath, text, 'utf8');
    console.log('EXTRACT_OK - extract_cdc.js:32', outPath);
  } catch (e) {
    console.error('EXTRACT_ERR - extract_cdc.js:34', e && e.message ? e.message : e);
    process.exit(2);
  }
})();
