import React, { useState } from "react";
import axios from "axios";

function ChatBox({ setGraphData, setHasQueried }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    console.log("Button clicked");
    if (!question) return;

    setHasQueried(true);
    setLoading(true);

    const res = await axios.post("https://graph-query-backend-ipxw.onrender.com/", {
      question,
    });
    console.log("API RESPONSE:", res.data);
    setAnswer(res.data.answer);

    // optional: update graph
    // if (res.data.graph) {
    setGraphData(res.data.graph);
    setLoading(false);
    // }
  };

  return (
    <div>
        <h3 style={{ marginBottom: "10px" }}>Ask a Question 💬</h3>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="e.g. Show cancelled invoices..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />
      <button onClick={askQuestion}
      style={{
          width: "100%",
          padding: "10px",
          background: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >Ask</button>

      {loading && <p style={{ marginTop: "10px" }}>Loading...</p>}

      {answer && (
        <div style={{
          marginTop: "15px",
          padding: "10px",
          background: "#f1f1f1",
          borderRadius: "5px"
        }}>
          <b>Answer:</b> {answer}
        </div>
      )}
    </div>
  );
}

export default ChatBox;