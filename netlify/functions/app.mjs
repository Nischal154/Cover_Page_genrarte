import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { getStore } from "@netlify/blobs";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viewsDir = path.join(__dirname, "../../views");

async function renderTemplate(name, data = {}) {
  const templatePath = path.join(viewsDir, `${name}.ejs`);
  const template = await fs.readFile(templatePath, "utf8");
  return ejs.render(template, data, { filename: templatePath });
}

export default async (req) => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  if (pathname === "/form") {
    const html = await renderTemplate("form");
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  }

  if (pathname === "/preview") {
    const store = getStore({ name: "app-data", consistency: "strong" });

    let count = 0;
    const existing = await store.get("user_count", { type: "json" });
    if (existing && typeof existing.count === "number") {
      count = existing.count;
    }
    count += 1;
    await store.setJSON("user_count", { count });

    const params = Object.fromEntries(url.searchParams.entries());
    const html = await renderTemplate("preview", { ...params, count });
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  }

  return new Response("Not Found", { status: 404 });
};

export const config = {
  path: ["/form", "/preview"],
};
