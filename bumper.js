#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const [, , sourceFile, incrementType] = process.argv;

if (!sourceFile || !incrementType) {
    console.error(
        "Error: both sourceFile and incrementType arguments are required."
    );
    process.exit(1);
}

function bumper(sourceFile, incrementType) {
    const filePath = path.join(process.cwd(), sourceFile);
    let file;

    try {
        file = fs.readFileSync(filePath, "utf8");
    } catch (err) {
        console.error("Error reading file:", err);
        return;
    }

    const versionLine = file.match(/Version:\s*(\d+\.\d+\.\d+)/);
    if (!versionLine) {
        console.error(`Version not found in ${sourceFile}`);
        return;
    }

    let [major, minor, patch] = versionLine[1].split(".").map(Number);
    if (incrementType === "major") {
        major++;
        minor = 0;
        patch = 0;
    } else if (incrementType === "minor") {
        minor++;
        patch = 0;
    } else if (incrementType === "patch") {
        patch++;
    }
    const newVersion = `${major}.${minor}.${patch}`;

    file = file.replace(/(Version:\s*)\d+\.\d+\.\d+/, `$1${newVersion}`);

    try {
        fs.writeFileSync(filePath, file);
    } catch (err) {
        console.error("Error writing file:", err);
        return;
    }

    return newVersion;
}

bumper(sourceFile, incrementType);
