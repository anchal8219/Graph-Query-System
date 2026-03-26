import React, { useState } from "react";
import GraphView from "./GraphView";
import ChatBox from "./ChatBox";

function App() {
  const [hasQueried, setHasQueried] = useState(false);
  const [graphData, setGraphData] = useState({
    nodes: [],
    edges: []
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      {/* 🔥 TITLE */}
      <h1 style={{
  textAlign: "center",
  color: "#2c3e50",
  marginBottom: "20px"
  // fontWeight: "bold"
}}>
        Graph-Based Query System 🚀
      </h1>

      <div style={{ display: "flex", gap: "20px"}}>
        
        <div style={{ width: "70%", background: "#f9f9f9",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)" }}>
          <GraphView graphData={graphData} hasQueried={hasQueried} />
        </div>

        <div style={{ width: "30%",
          background: "#ffffff",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)" }}>
          <ChatBox setGraphData={setGraphData} setHasQueried={setHasQueried} />
        </div>

      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>✅ React App is Working</h1>
//       <p>If you see this, frontend is running correctly.</p>
//     </div>
//   );
// }

// export default App;