import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

function GraphView({ graphData , hasQueried}) {
  const nodes = graphData?.nodes || [];
  const edges = graphData?.edges || [];

  // 🔥 Initial state (before any query)
  if (!hasQueried) {
    return (
      <div style={{
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dashed #ccc",
        borderRadius: "10px"
      }}>
        <p>Ask a question to visualize the graph 🔍</p>
      </div>
    );
  }
  // 🔹 After query but no graph
  if (nodes.length === 0) {
    return (
      <div style={{
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dashed #ccc",
        borderRadius: "10px"
      }}>
        <p>No graph available for this query 📊</p>
      </div>
    );
  }

// 🔹 Show graph
  return (
    <div style={{ height: "500px" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
}

export default GraphView;