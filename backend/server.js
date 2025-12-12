import express from "express";
import dotenv from "dotenv";
import { connectionDb } from "./src/config/database.js";
import './src/models/index.js';
import eventRoutes from "./src/routes/event.routes.js";  
import artistsRoutes from "./src/routes/artists.routes.js";
import bookingsRoutes from "./src/routes/bookings.routes.js";


const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use('/api/event', eventRoutes);
app.use('/api/artists', artistsRoutes);
app.use('/api/bookings', bookingsRoutes);

app.listen(PORT, async () => {
  await connectionDb();
  console.log(`Serveur démarré sur le port ${PORT}`);
});