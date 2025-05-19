import sharp from 'sharp';

const inputPath = './src/assets/Produkte/haube_dokumententasche.png';
const outputPath = './src/assets/Produkte/haube_dokumententasche.webp';

try {
    console.log('➡️ Starte Konvertierung...');
    await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
    console.log('✅ Konvertierung erfolgreich!');
} catch (err) {
    console.error('❌ Fehler bei Konvertierung:', err.message);
}
