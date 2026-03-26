const { interpretQuery } = require("./llm");

// 🔹 Basic query functions

function getCancelledInvoices(data) {
  return data.filter(item => item.billingDocumentIsCancelled === true);
}

function getInvoicesByCompany(data, companyCode) {
  return data.filter(item => item.companyCode === companyCode);
}

function getTotalRevenue(data) {
  return data.reduce((sum, item) => {
    return sum + parseFloat(item.totalNetAmount || 0);
  }, 0);
}

// 🔹 Guardrail message
const GUARDRAIL_MESSAGE =
  "This system is designed to answer questions related to the provided dataset only.";

// 🔹 Main smart query handler

async function handleSmartQuery(question, data) {
  try {
    const aiResponse = await interpretQuery(question);

    let parsed;

    try {
      parsed = JSON.parse(aiResponse);
    } catch (err) {
      return GUARDRAIL_MESSAGE;
    }

    switch (parsed.action) {
      case "get_cancelled_invoices":
        return getCancelledInvoices(data);

      case "get_total_revenue":
        return getTotalRevenue(data);

      case "get_invoices_by_company":
        if (!parsed.companyCode) return GUARDRAIL_MESSAGE;
        return getInvoicesByCompany(data, parsed.companyCode);

      default:
        return GUARDRAIL_MESSAGE;
    }
  } catch (error) {
    return GUARDRAIL_MESSAGE;
  }
}

module.exports = {
  handleSmartQuery,
  getCancelledInvoices,
  getInvoicesByCompany,
  getTotalRevenue,
};