import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import pLimit from 'p-limit';

const inputDir = './src/assets/Produkte';
const outputDir = './src/assets/team';
let filePaths;
const limit = pLimit(1); // Nur eine Datei zur Zeit

const files = await fs.readdir(inputDir)
console.log(files)
filePaths = files.map((file) => {
    console.log(file)
    return path.join(inputDir, file)
    //console.log(path.join(inputDir, file))
})


const convert = async (file) => {

    try {
        console.log('➡️ Konvertiere:', file);
        let outFile;
        if (file.includes(".jpg")) {
            outFile = file.replace(".jpg", ".webp")
        }
        if (file.includes(".jpeg")) {
            outFile = file.replace(".jpeg", ".webp")
        }
        if (file.includes(".png")) {
            outFile = file.replace(".png", ".webp")
        }
        if (file.includes(".svg")) {
            return
        }
        if (file.includes(".webp")) {
            return
        }


        await sharp(file)
            .webp({ quality: 80 })
            .toFile(outFile);


    } catch (e) {
        console.error('❌ Fehler bei:', file, e.message);
    }
};


const tasks = []
try {
    for (const file of filePaths) {
        const task = limit(async () => await convert(file))
        tasks.push(task)
    }
} catch (e) {
    console.log(e.message)
}

Promise.all(tasks).then(() => {
    console.log('Alle promises fertig')
})
