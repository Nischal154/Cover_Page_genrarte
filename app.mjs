import express from "express";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));  
app.use(express.static(path.join(_dirname, "public")));
//view engine
app.set("view engine", "ejs");
app.set("views", path.join(_dirname, "views"));

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.redirect("/form");
});

app.get("/form", (req, res) => {
    res.render("form");
});

app.get("/preview", async (req, res) => {
    let countData = { count: 1 };
    try {
        const countFilePath = path.join(_dirname, "user_count.json");
        const fileData = await fs.readFile(countFilePath, "utf8");
        countData = JSON.parse(fileData);
        countData.count += 1;
        
        // In Vercel, the file system is Read-Only. This will intentionally fail silently in production.
        try {
            await fs.writeFile(countFilePath, JSON.stringify(countData, null, 2));
        } catch(writeErr) {
            console.log("Ignored write error (Serverless Mode Active)");
        }

        res.render("preview", { ...req.query, count: countData.count });
    } catch(err) {
        // Fallback to safely render the preview even if the file is missing/broken completely
        console.error("Error updating count:", err);
        res.render("preview", { ...req.query, count: "🚀" }); 
    }
});

if (process.env.NODE_ENV !== "production" && process.env.NETLIFY !== "true") {
    app.listen(port, () => {
        console.log(`application is listening on port ${port}`);
    });
}

export default app;