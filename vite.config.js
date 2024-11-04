import { rm } from "node:fs/promises";
import { extname } from "node:path";
import Twig from "twig";
import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";

Twig.cache(false);

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    base: "",
    build: {
      rollupOptions: {
        input: {
          404: "404.html",
          catalog: "catalog.html",
          index: "index.html",
          programs: "programs.html",
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          silenceDeprecations: ["import", "mixed-decls"],
        },
      },
    },
    plugins: [
      {
        handleHotUpdate({ file, server }) {
          if (extname(file) === ".twig") {
            server.ws.send({ type: "full-reload" });
          }
        },
        name: "twig",
        transformIndexHtml: {
          async handler(_html, { originalUrl, path }) {
            const url = originalUrl || path;
            let page = url.slice(1).replace(".html", "") || "index";

            let pageData = {};
            try {
              pageData = (await import(`./src/data/pages/${page}.js`)).default;
            } catch {
              page = "404";
              pageData = (await import("./src/data/pages/404.js")).default;
            }
            const layoutData = (await import(`./src/data/layout.js`)).default(
              page,
            );

            const result = await new Promise((resolve, reject) => {
              Twig.renderFile(
                `${page}.html`,
                { isDev, page, ...layoutData, ...pageData },
                (err, html) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(html);
                  }
                },
              );
            });
            return result;
          },
          order: "pre",
        },
      },
      {
        apply: "build",
        name: "clean",
        async renderStart() {
          await rm("dist/pixelperfect", { force: true, recursive: true });
        },
      },
      ViteMinifyPlugin(),
    ],
  };
});
