var tax_bracket = require('./taxBracket');
var cal_taxes = require('./calculateTaxes');
module.exports = function (taxbrackets, length, income, amounts, tax_rates) {
	
				var tax_tax_rate_amount = tax_bracket(taxbrackets, length, income, amounts, tax_rates);

				var taxbracket = tax_tax_rate_amount[0];
				var tax_rate = tax_tax_rate_amount[1];
				var amount = tax_tax_rate_amount[2];
				
				income = income - taxbracket;
				
				var taxes = cal_taxes(income, tax_rate, amount);
				
				return taxes;
	
	
};