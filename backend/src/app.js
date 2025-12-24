require("dotenv").config();

const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");



require("./models/User");

const app = express();

app.use(express.json());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("User CRUD API is running");
});

sequelize.sync()
    .then(() => console.log("Database synced"))
    .catch((err) => console.error("Error syncing database:", err));

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

