const fs = require('fs');

// Path to your JSON file
const filePath = './module.json'; // Change this to your actual JSON file

// Read and parse the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        if (jsonData.version) {
            console.log('Version:', jsonData.version);
        } else {
            console.error('Version key not found in JSON file.');
        }
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});