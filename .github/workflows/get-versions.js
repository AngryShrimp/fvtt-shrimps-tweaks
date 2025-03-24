let fs = require('fs');

let filename = './module.json';
let version = JSON.parse(fs.readFileSync(filename, 'utf8')).version;
// Read the JSON file
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        return;
    }
    
    try {
        // Parse JSON
        let jsonData = JSON.parse(data);

        let version = jsonData.version;
        jsonData.manifest = `https://github.com/AngryShrimp/fvtt-shrimps-tweaks/releases/download/${version}/module.json`;
        jsonData.download = `https://github.com/AngryShrimp/fvtt-shrimps-tweaks/releases/download/${version}/module.zip`;

        // Convert back to JSON string with formatting
        const updatedJson = JSON.stringify(jsonData, null, 2);

        // Write back to the file
        fs.writeFile(filename, updatedJson, 'utf8', (writeErr) => {
            if (writeErr) {
                return;
            }
        });

    } catch (parseErr) {
        return;
    }
});

console.log(version);