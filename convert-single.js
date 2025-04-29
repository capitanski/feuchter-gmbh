import sharp from 'sharp';

const inputPath = './src/assets/Produkte/Transportwand navy.jpg';
const outputPath = './problem.webp';

try {
    console.log('➡️ Starte Konvertierung...');
    await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
    console.log('✅ Konvertierung erfolgreich!');
} catch (err) {
    console.error('❌ Fehler bei Konvertierung:', err.message);
}
