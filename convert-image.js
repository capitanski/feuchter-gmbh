import sharp from 'sharp';
import fs from 'fs';


const files = fs.readdirSync('./src/assets/Produkte')
console.log(files.length)
const convert = async (dir, name) => {
    const fullname = dir + '/' + name
    const i = sharp(fs.readFileSync(fullname));
    i.toFormat('webp', { quality: 80 })
    return i.toFile('./new/Produkte/' + name.slice(0, -4) + '.webp')
        .then(() => console.log('Converted', fullname))
        .catch(e => console.log('Failed converting', fullname, e, 'skipping...'))
}

const promises = files.map(name => convert('./src/assets/Produkte', name))



try {
    const results = await Promise.all(promises);
    console.log('✅ Done', results.length);
} catch (error) {
    console.error('❌ Error in Promise.all:', error);
}