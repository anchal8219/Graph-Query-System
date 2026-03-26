function convertToText(record) {
  return `
  Billing Document: ${record.billingDocument}
  Type: ${record.billingDocumentType}
  Company: ${record.companyCode}
  Amount: ${record.totalNetAmount} ${record.transactionCurrency}
  Created On: ${record.creationDate}
  Cancelled: ${record.billingDocumentIsCancelled}
  Customer: ${record.soldToParty}
  `;
}

function processData(data) {
  return data.map(item => convertToText(item));
}

module.exports = { processData };