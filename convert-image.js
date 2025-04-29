import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import pLimit from 'p-limit';

const inputDir = './src/assets/Produkte';
const outputDir = './new/Produkte';
fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir)
    .filter(name => /\.(jpe?g|png)$/i.test(name));

const limit = pLimit(1); // Nur eine Datei zur Zeit

const convert = async (name) => {
    const inputPath = path.join(inputDir, name);
    const { name: baseName, ext } = path.parse(name);
    const safeName = `${baseName}_${ext.replace('.', '')}.webp`;
    const outputPath = path.join(outputDir, safeName);

    try {
        console.log('➡️ Konvertiere:', name);

        const meta = await sharp(inputPath).metadata();

        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);

        console.log('✅ Fertig:', outputPath);
    } catch (e) {
        console.error('❌ Fehler bei:', name, e.message);
    }
};

await Promise.all(files.map(name => limit(() => convert(name))));

console.log('🎉 Alle Bilder fertig verarbeitet.');
