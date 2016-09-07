module.exports = function(income, tax_rate, amount) {
	
	//calculates taxes
		var tax = ((income*tax_rate)/100)+amount;
		
	//ceiling tax to 2 decimal points
		tax = Math.ceil(tax*100)/100;
		return tax;
	
};