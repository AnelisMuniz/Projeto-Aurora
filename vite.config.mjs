import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import fs from "node:fs";

const projetoRoot = fileURLToPath(new URL(".", import.meta.url));

const arquivosJS = [
    "storage.js",
    "script.js",
    "templates.js",
    "router.js"
];

export default defineConfig({

    root: fileURLToPath(
        new URL("./html", import.meta.url)
    ),

    base: "./",

    plugins: [

        {
            name: "conecta-js-bundle",

            resolveId(id) {

                if (id === "virtual:conecta-js") {
                    return "\0conecta-js";
                }

            },

            load(id) {

                if (id !== "\0conecta-js") {
                    return;
                }

                return arquivosJS
                    .map(arquivo =>
                        fs.readFileSync(
                            new URL(`./js/${arquivo}`, import.meta.url),
                            "utf8"
                        )
                    )
                    .join("\n\n");

            }
        }

    ],

    build: {

        outDir: "../dist",

        emptyOutDir: true

    }

});