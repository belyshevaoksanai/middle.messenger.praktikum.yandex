import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('/*', (req, res) => {
  res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
