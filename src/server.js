const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./config/databaseConnection");
const routesV1 = require("./routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1", routesV1);
// app.use("/api/v2", routesV2);

// health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the MERN E-commerce Backend API" });
});

// start server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// db connection
sequelize
  .authenticate()
  .then(() => {
    console.log("PostgreSQL connected");
    return sequelize.sync({ alter: false });
  })
  .then(() => console.log("PostgreSQL synchronized"))
  .catch((err) => console.error(" Database error:", err.message));

// graceful shutdown
const shutdown = async () => {
  console.log("Shutting down server...");
  await sequelize.close();
  server.close(() => process.exit(0));
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

module.exports = app;
