import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 6767;
app.use(express.json());

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? process.env.ALLOWED_ORIGINS
        ? process.env.ALLOWED_ORIGINS.split(",")
        : true
      : process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello, obamna!');
});

app.post('/api/notes', (req, res) => {
  const data = req.body;
  
  res.status(201).send()
  console.log(req.body);
});

app.post('/api/stats', (req, res) => {
  const stats = req.body;
  
  console.log("Received stats:", stats);
  
  // increment each stat by 2
  const updatedStats = {
    mental: stats.mental + 2,
    physical: stats.physical + 2,
    spiritual: stats.spiritual + 2,
    social: stats.social + 2,
  };
  
  res.status(201).json(updatedStats);
});

app.get('/api/notes', (req, res) => {
  // Logic to retrieve notes would go here
  res.send("NOTES ARE UP");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

