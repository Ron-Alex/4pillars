import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 6767;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, obamna!');
});

app.post('/api/notes', (req, res) => {
  JSON.parse(req.body);
  res.status(201).send({ message: 'Note saved successfully' });
  console.log(req.body);
});

app.get('/api/notes', (req, res) => {
  // Logic to retrieve notes would go here
  res.send("NOTES ARE UP");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

