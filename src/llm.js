require("dotenv").config();
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function interpretQuery(question) {
  const prompt = `
You are an AI that converts user questions into JSON actions.

Available actions:
1. get_cancelled_invoices
2. get_total_revenue
3. get_invoices_by_company

Return ONLY JSON.

Examples:

Q: Show cancelled invoices
A: {"action": "get_cancelled_invoices"}

Q: Total revenue
A: {"action": "get_total_revenue"}

Q: Show invoices for company ABCD
A: {"action": "get_invoices_by_company", "companyCode": "ABCD"}

Now:
Q: ${question}
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}

module.exports = { interpretQuery };