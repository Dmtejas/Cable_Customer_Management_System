import express from 'express'
const app = express()
import path from 'path'
import router from './routes/customerRoutes.js';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'
import { errorHandler } from './middleware/errorHandler.js';
import { dbConnection } from './config/dbConnection.js';
dotenv.config()
const PORT = process.env.PORT || 3001

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dbConnection()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,"..","client", "dist")))
app.use('/api/customers', router)
app.use((req, res) => {
  res.sendFile(
    path.join(__dirname, "..","client", "dist", "index.html")
  );
});

app.use(errorHandler)

app.listen(PORT, () => {
    console.log("Server is running"); 
})