import { Server } from "http";
import app from "./app";
import cors from 'cors';
import config from "./app/config";
import cron from "node-cron";
import clearOldOtps from "./app/utils/clearOldOtps";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import * as dotenv from 'dotenv';
import express from "express";

// Load environment variables from .env file
dotenv.config();

const port = config.port || 9000;

let server: Server;
app.use(cors());
app.use(express.json());
async function main() {
  try {
    // Serve the Swagger UI at the /api-docs route
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    server = app.listen(port, () => {
      console.log(`Wolfstudios server is running on port ${port}`);
    });

    // cron schedule to clear OTP
    cron.schedule("0 12 * * *", () => {
      clearOldOtps();
    });
  } catch (error) {
    console.error(error);
  }
}

// handle unhandled rejection
process.on("unhandledRejection", () => {
  console.log(`Unhandled rejection detected. shutting down...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// handle uncaught exception
process.on("uncaughtException", () => {
  console.log(`Uncaught exception detected. shutting down...`);
  process.exit(1);
});

main();
