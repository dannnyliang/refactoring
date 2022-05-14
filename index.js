const fs = require("fs");

const { statement, htmlStatement } = require("./statement");
const play = require("./fixture/play.json");
const invoices = require("./fixture/invoices.json");

const statementResult = statement(invoices[0], play);
console.log(statementResult);

const htmlStatementResult = htmlStatement(invoices[0], play);
fs.writeFile('./statement.html', htmlStatementResult, err => {
  if (err) console.error(err);
});
