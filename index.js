import 'dotenv/config';
import './config/db.js';
import express, { Router } from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import env from "./config/env.js";
import apiRoutes from "./routes/api.js";

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

app.listen(env.PORT, () => {
    console.log(`Server running on port: ${env.PORT}`);
});