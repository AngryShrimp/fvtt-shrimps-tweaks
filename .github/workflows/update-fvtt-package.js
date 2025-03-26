const secretKey = process.env.FVTT_SECRET;
const version = process.env.VERSION;

if (!secretKey) {
    console.error("Secret is not defined!");
    process.exit(1);
}

if (!version) {
    console.error("Version is not defined!");
    process.exit(1);
}

console.log("Secret is securely loaded (but not printed for security reasons).");
console.log("Version is ", version);

let response = await fetch("https://api.foundryvtt.com/_api/packages/release_version/", {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': secretKey
    },
    method: "POST",
    body: JSON.stringify({
        "id": "shrimps-tweaks",
        "dry-run": true,
        "release": {
            "version": version,
            "manifest": "https://github.com/AngryShrimp/fvtt-shrimps-tweaks/releases/latest/download/module.json",
            "notes": "https://github.com/AngryShrimp/fvtt-shrimps-tweaks/releases/latest",
            "compatibility": {
                "minimum": "12",
                "verified": "12",
                "maximum": ""
            }
        }
    })
});
response_data = await response.json();
console.log(response_data);
