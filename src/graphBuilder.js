function buildGraph(data) {
  const nodes = new Map(); // avoid duplicates
  const edges = [];

  data.forEach((item) => {
    // 🔹 Billing Document Node
    if (!nodes.has(item.billingDocument)) {
      nodes.set(item.billingDocument, {
        id: item.billingDocument,
        type: "BillingDocument",
        data: item,
      });
    }

    // 🔹 Customer Node
    if (!nodes.has(item.soldToParty)) {
      nodes.set(item.soldToParty, {
        id: item.soldToParty,
        type: "Customer",
      });
    }

    // 🔹 Company Node
    if (!nodes.has(item.companyCode)) {
      nodes.set(item.companyCode, {
        id: item.companyCode,
        type: "Company",
      });
    }

    // 🔗 Edge: Customer → Billing
    edges.push({
      source: item.soldToParty,
      target: item.billingDocument,
      relation: "hasBilling",
    });

    // 🔗 Edge: Company → Billing
    edges.push({
      source: item.companyCode,
      target: item.billingDocument,
      relation: "belongsTo",
    });
  });

  return {
    nodes: Array.from(nodes.values()),
    edges,
  };
}

module.exports = { buildGraph };