
import fs from "fs/promises"
import path from "path"

async function listFilesRecursive(dir, exts) {
    let results = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            const subResults = await listFilesRecursive(fullPath, exts);
            results = results.concat(subResults);
        } else if (exts.includes(path.extname(entry.name))) {
            results.push(fullPath);
        }
    }

    return results;
}

async function replaceImageImports(filePath) {
    let content = await fs.readFile(filePath, 'utf8');

    // Regex für .jpg/.png in Imports oder require(...)
    const regex = /(['"])([^'"]+?\.(?:jpg|png))\1/g;

    const replacedContent = content.replace(regex, (match, quote, filename) => {
        const newFilename = filename.replace(/\.(jpg|png)$/, '.webp');
        return `${quote}${newFilename}${quote}`;
    });

    if (content !== replacedContent) {
        console.log(`➡️  Aktualisiere: ${filePath}`);
        await fs.writeFile(filePath, replacedContent, 'utf8');
    }
}

async function main() {
    const targetDir = './src'; // <-- Pfad anpassen
    const fileExtensions = ['.js', '.ts', '.astro'];

    const files = await listFilesRecursive(targetDir, fileExtensions);

    for (const file of files) {
        await replaceImageImports(file);
    }

    console.log('✅ Fertig!');
}

main().catch(console.error);
