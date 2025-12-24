require("dotenv").config();

const express = require("express");
const sequelize = require("./config/database");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("User CRUD API is running");
});

sequelize.authenticate()
    .then(() => console.log("MySQL Database connected"))
    .catch((err) => console.error("Unable to connect to the database:", err));

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

