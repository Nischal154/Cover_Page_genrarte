import express from "express";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));  
app.use(express.static("public"));
//view engine
app.set("view engine", "ejs");

const port = process.env.PORT || 8080;

app.get("/form", (req, res) => {
    res.render("form");
});

app.get("/preview", async (req, res) => {
    try {
        const countFilePath = path.join(__dirname, "user_count.json");
        const fileData = await fs.readFile(countFilePath, "utf8");
        const countData = JSON.parse(fileData);
        countData.count += 1;
        await fs.writeFile(countFilePath, JSON.stringify(countData, null, 2));

        res.render("preview", { ...req.query, count: countData.count });
    } catch(err) {
        console.error("Error updating count:", err);
        res.status(500).send("Server Error");
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`application is listening on port ${port}`);
});