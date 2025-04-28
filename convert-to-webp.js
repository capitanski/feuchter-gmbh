import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceDir = './src/assets/Produkte';
const targetDir = './src/assets-webp/Produkte';

function ensureDirExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function convertFolder(currentSource, currentTarget) {
    console.log(`🗂 Scanning folder: ${currentSource}`);

    const entries = fs.readdirSync(currentSource, { withFileTypes: true });

    if (entries.length === 0) {
        console.log(`⚠️ Folder ${currentSource} is empty`);
    }

    entries.forEach((entry) => {
        const sourcePath = path.join(currentSource, entry.name);
        const ext = path.extname(entry.name).toLowerCase();

        if (entry.isDirectory()) {
            const nestedTarget = path.join(currentTarget, entry.name);
            console.log(`📁 Entering directory: ${sourcePath}`);
            convertFolder(sourcePath, nestedTarget);
        } else {
            console.log(`📄 Found file: ${sourcePath}`);

            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                console.log(`🎯 Valid image file: ${sourcePath}`);

                const outputFileName = path.basename(entry.name, ext) + '.webp';
                const outputPath = path.join(currentTarget, outputFileName);

                ensureDirExists(currentTarget);

                console.log(`📄 Source: ${sourcePath}`);
                console.log(`💾 Target: ${outputPath}`);

                sharp(sourcePath)
                    .webp({ quality: 80 })
                    .toFile(outputPath)
                    .then(() => console.log(`✅ Success: ${outputPath}`))
                    .catch((err) => console.error(`❌ Sharp Error converting: ${sourcePath}`, err));

            } else {
                console.log(`🚫 Skipping unsupported file: ${sourcePath}`);
            }
        }
    });
}

convertFolder(sourceDir, targetDir);
