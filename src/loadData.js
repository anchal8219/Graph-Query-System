const fs = require("fs");
const path = require("path");
const readline = require("readline");

// 🔹 Get all JSONL files recursively
function getAllJSONLFiles(dirPath, filesList = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      getAllJSONLFiles(fullPath, filesList);
    } else if (file.endsWith(".jsonl")) {
      filesList.push(fullPath);
    }
  });

  return filesList;
}

// 🔹 Read one JSONL file
async function readJSONL(filePath) {
  const stream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  const data = [];

  for await (const line of rl) {
    if (line.trim()) {
      try {
        data.push(JSON.parse(line));
      } catch (err) {
        console.error("Invalid JSON line:", line);
      }
    }
  }

  return data;
}

// 🔹 Load all data from all files
async function loadAllData(dataDir) {
  const allFiles = getAllJSONLFiles(dataDir);

  console.log("Found files:", allFiles.length);

  let allData = [];

  for (const file of allFiles) {
    const fileData = await readJSONL(file);
    allData = allData.concat(fileData);
  }

  console.log("Total records loaded:", allData.length);

  return allData;
}

module.exports = { loadAllData };