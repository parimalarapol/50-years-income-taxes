module.exports = {
	
	calculate_Inflation: function(taxbracket, roi){
		
	//calculates new taxbracket with the previous taxbracket and rate of inflation
		taxbracket = taxbracket + ((taxbracket*roi)/100);
		
		//ceiling taxbracket to 2 decimal points
		taxbracket = Math.ceil(taxbracket*100)/100;
		return taxbracket;
	},
		
	calculate_Amounts: function(taxbracket1, taxbracket2, tax_rate){
		
		var amount = 0;

		//calculates new amount with the previous amount (to be added to calculate taxes) and rate of inflation
		amount = ((taxbracket2-taxbracket1)*tax_rate/100);
		
		//ceiling amount to 2 decimal points
		amount = Math.ceil(amount*100)/100;
		
		return amount;
		
	}
	
};