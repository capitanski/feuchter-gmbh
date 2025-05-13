import fs from "fs/promises"
import path from "path"

async function countFiles(folder) {
    let results = []
    try {
        let entries = await fs.readdir(folder, { withFileTypes: true })
        for (const entry of entries) {
            if (entry.isDirectory()) {
                const subResults = await countFiles(path.join(folder, entry.name))
                results = results.concat(subResults)
            } else {
                results.push(path.join(folder, entry.name))
            }
        }
        return results
    } catch (e) {
        console.error(e.message)
        return results
    }


}

async function main() {
    let output = await countFiles("./srx")
    return output.length
}

const output = await main()
console.log(output)