require("dotenv").config();

const path = require("path");
const { loadAllData } = require("./loadData");
const { handleSmartQuery } = require("./queryEngine");

function formatResponse(question, result) {
  const q = question.toLowerCase();

  if (Array.isArray(result)) {
    if (q.includes("cancelled")) {
      return `There are ${result.length} cancelled billing documents in the dataset.`;
    }

    if (q.includes("company")) {
      return `Found ${result.length} invoices for the given company.`;
    }

    return `Found ${result.length} matching records.`;
  }

  if (typeof result === "number") {
    return `Total revenue is ${result.toFixed(2)}.`;
  }

  return result;
}

async function test() {
  const dataPath = path.join(__dirname, "../data");

  const data = await loadAllData(dataPath);

  const question = "Give me cancelled billing documents";

  const result = await handleSmartQuery(question, data);

  // 🔥 Clean final answer
  const finalAnswer = formatResponse(question, result);

  console.log("\n✅ Final Answer:");
  console.log(finalAnswer);

  // 🔍 Optional: show small sample (for debugging/demo)
  if (Array.isArray(result)) {
    console.log("\n📊 Sample Records:");
    console.log(result.slice(0, 3));
  }
}

test();

// require("dotenv").config();
// const path = require("path");
// const { loadAllData } = require("./loadData");
// const { handleSmartQuery } = require("./queryEngine");

// async function test() {
//   const dataPath = path.join(__dirname, "../data");

//   const data = await loadAllData(dataPath);

//   // 🔥 AI-based query
//   const result = await handleSmartQuery(
//     "Give me cancelled billing documents",
//     data
//   );
//   if (Array.isArray(result)) {
//   console.log("Total cancelled invoices:", result.length);

//   console.log("Sample records:");
//   console.log(result.slice(0, 3)); // show only 3
// } else {
//   console.log(result);
// }

// //   console.log("Result count:", Array.isArray(result) ? result.length : result);
// }

// test();



// const path = require("path");
// const { loadAllData } = require("./loadData");
// const { handleQuery } = require("./queryEngine");

// async function test() {
//   const dataPath = path.join(__dirname, "../data");

//   const data = await loadAllData(dataPath);

//   // 🔹 Test 1: Cancelled invoices
//   const result1 = handleQuery("Show cancelled invoices", data);
//   console.log("Cancelled invoices count:", result1.length);

//   // 🔹 Test 2: Total revenue
//   const result2 = handleQuery("Total revenue", data);
//   console.log("Total revenue:", result2);

//   // 🔹 Test 3: Invalid query (guardrail)
//   const result3 = handleQuery("Who is the Prime Minister?", data);
//   console.log("Invalid query response:", result3);
// }

// test();



// 2nd
// const path = require("path");
// const { loadAllData } = require("./loadData");
// const { buildGraph } = require("./graphBuilder");

// async function test() {
//   const dataPath = path.join(__dirname, "../data");

//   const data = await loadAllData(dataPath);

//   const graph = buildGraph(data);

//   console.log("Nodes count:", graph.nodes.length);
//   console.log("Edges count:", graph.edges.length);

//   console.log("Sample node:", graph.nodes[0]);
//   console.log("Sample edge:", graph.edges[0]);
// }

// test();




// 1st
// const path = require("path");
// const { loadAllData } = require("./loadData");

// async function test() {
//   const dataPath = path.join(__dirname, "../data");

//   const data = await loadAllData(dataPath);

//   console.log("Sample data:", data[0]);
// }

// test();



//for procesing the loaded data
// const path = require("path");
// const { loadAllData } = require("./loadData");
// const { processData } = require("./processData");

// async function test() {
//   const dataPath = path.join(__dirname, "../data");

//   // Step 1: Load raw data
//   const data = await loadAllData(dataPath);

//   // Step 2: Process data into readable text
//   const processed = processData(data);

//   // Step 3: Print one sample
//   console.log("Processed sample:\n", processed[0]);
// }

// test();