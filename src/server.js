require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const { loadAllData } = require("./loadData");
const { buildGraph } = require("./graphBuilder");
const { handleSmartQuery } = require("./queryEngine");

const app = express();
app.use(cors());
app.use(express.json());

let data = [];
let graph = {};

async function init() {
  const dataPath = path.join(__dirname, "../data");

  data = await loadAllData(dataPath);
  graph = buildGraph(data);

  console.log("Server ready");
}

app.post("/ask", async (req, res) => {
  const { question } = req.body;

  const result = await handleSmartQuery(question, data);
    let nodes = [];
let edges = [];

const nodeMap = new Map(); // 🔥 prevents duplicates

if (Array.isArray(result)) {
  result.slice(0, 20).forEach((item, index) => {
    const billingId = item.billingDocument;
    const customerId = item.soldToParty;

    // ✅ Add Customer Node (only once)
    if (!nodeMap.has(customerId)) {
      nodeMap.set(customerId, true);

      nodes.push({
        id: customerId,
        data: { label: `Customer ${customerId}` },
        position: {
          x: Math.random() * 400,
          y: Math.random() * 400,
        },
        style: {
            background: "#2ecc71", // GREENy
            color: "white",
            padding: 10,
        }
      });
    }

    // ✅ Add Invoice Node (only once)
    if (!nodeMap.has(billingId)) {
      nodeMap.set(billingId, true);

      nodes.push({
        id: billingId,
        data: { label: `Invoice ${billingId}` },
        position: {
          x: Math.random() * 400,
          y: Math.random() * 400,
        },
        style: {
        background: "#3498db", // BLUE
        color: "white",
        padding: 10,
        }
      });
    }
    else if (typeof result === "number") {
  // 🔥 Revenue node
  nodes.push({
    id: "revenue",
    data: { label: `Revenue: ₹${result.toFixed(2)}` },
    position: { x: 200, y: 200 },
    style: {
      background: "#f39c12",
      color: "white",
      padding: 10,
      fontWeight: "bold"
    }
  });
}

    // ✅ Always add edge
    edges.push({
      id: `e-${customerId}-${billingId}-${index}`,
      source: customerId,
      target: billingId,
    });
  });
}
  

  res.json({
    answer: Array.isArray(result)
      ? `Found ${result.length} matching records`
      : result,
    graph: {
      nodes,
      edges,
    },
  });
});

init();

app.listen(3000, () => console.log("Server running on 3000"));