var tax_beans = require('./taxBeans');
var tax_bracket = require('./taxBracket');
var tax_controller = require('./taxController');

module.exports = {	
	
	taxBracketFederal: function(income, roi, year){
		
		//getting current year's taxbrackets for federal
				var taxbrackets = tax_beans.gettaxBracketFederal(roi, year);
				
		//getting current year's taxrates for federal
				var tax_rates = tax_beans.gettax_ratesFederal();
				
		//getting current year's amounts for federal
				var amounts = tax_beans.gettaxAmountsFederal(year, roi, tax_rates);
				
				var length = taxbrackets.length;
				
		//getting taxes
				var taxes = tax_controller(taxbrackets, length, income, amounts, tax_rates);
				
				return taxes;			
	}
};
