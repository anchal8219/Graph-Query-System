# Graph-Based Data Modeling and Query System 🚀

## 📌 Overview

This project builds a **graph-based data system with a conversational query interface** using real-world business data.

In typical enterprise systems, data is fragmented across multiple entities such as:
- Orders
- Deliveries
- Invoices
- Payments

This project unifies that data into a **graph structure** and allows users to **query it using natural language**.

---

## 🧠 Key Features

- 🔗 **Graph Construction**
  - Converts structured dataset into nodes and relationships
  - Example:
    - Customer → Invoice

- 📊 **Graph Visualization**
  - Interactive graph using React Flow
  - Dynamically updates based on query results

- 💬 **Conversational Query Interface**
  - Users can ask questions in natural language
  - System interprets and returns data-backed answers

- 🧾 **Data-Backed Responses**
  - No hallucination — all answers come from dataset

- 🚫 **Guardrails**
  - Rejects irrelevant queries
  - Example:
    > "This system is designed to answer questions related to the provided dataset only."

---

## 🏗️ Architecture
React (Frontend)
↓
Node.js + Express (Backend API)
↓
LLM (Groq API)
↓
Query Engine
↓
Dataset (JSONL files)


---

## ⚙️ Tech Stack

- **Frontend:** React, React Flow
- **Backend:** Node.js, Express
- **LLM Integration:** Groq API
- **Data Handling:** JSONL parsing
- **Styling:** Inline CSS

---

## 🔍 Example Queries

Try asking:

- `Give me cancelled billing documents`
- `What is the total revenue?`
- `Show invoices for company ABCD`

---

## 📊 Graph Behavior

- Queries returning records → Graph is displayed  
- Queries returning numeric values (e.g., revenue) → Visualized as a node  
- No graph data → UI shows:
  - "No graph available for this query"

---

## 🚫 Guardrails

The system restricts queries to dataset-related topics.

Example:

**Input:**
Write a poem about love


**Output:**
This system is designed to answer questions related to the provided dataset only.


---

## 🧪 How to Run the Project

### 1. Clone the repository
git clone <your-repo-link>
cd assignment

---

### 2. Install Backend Dependencies
npm install

---

### 3. Setup Environment Variables

Create a `.env` file:
GROQ_API_KEY=your_api_key_here

### 4. Run Backend
node src/server.js

---

### 5. Run Frontend
cd client
npm install
npm start

---

### 6. Open in Browser
http://localhost:3000

---

## 🎯 Design Decisions

- Used **graph representation** to model relationships between entities
- Used **LLM for query interpretation**, not for generating answers
- Ensured **data-backed responses only**
- Added **guardrails** to prevent misuse

---

## 🚀 Future Improvements

- Graph clustering for better visualization
- Semantic search over entities
- Node highlighting based on query
- Streaming LLM responses
- Advanced query support (multi-hop reasoning)

---

## 📌 Submission Details

- ✅ Working demo (local)
- ✅ GitHub repository
- ✅ AI coding session logs included

---

## 🙌 Conclusion

This project demonstrates:

- Full-stack development
- Graph-based data modeling
- LLM integration
- Real-world system design thinking

---
