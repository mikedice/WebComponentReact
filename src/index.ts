import express from "express";
import path from "path"

const app = express();
const port = 3000;

const staticPath = path.join(__dirname, "../public");
const distPath = path.join(__dirname, "../dist");
app.use(express.static(staticPath));
app.use('/dist', express.static(distPath, {}));

app.listen(port, () => {
  console.log(`The app is listening for HTTP requests using express at http://localhost:${port}`);
});
