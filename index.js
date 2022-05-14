const { statement } = require("./statementGenerator");
const play = require("./fixture/play.json");
const invoices = require("./fixture/invoices.json");

const statementResult = statement(invoices[0], play);
console.log(statementResult);
