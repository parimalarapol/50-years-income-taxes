var tax_beans = require('./taxBeans');
var tax_bracket = require('./taxBracket');
var tax_controller = require('./taxController');
module.exports = {	
	
	taxBracketArizona: function(income, roi, year){
		
			//getting current year's taxbrackets for arizona
				var taxbrackets = tax_beans.gettaxBracketArizona(roi, year);
				
			//getting current year's taxrates for arizona
				var tax_rates = tax_beans.gettax_ratesArizona();
			
			//getting current year's amounts for arizona
				var amounts = tax_beans.gettaxAmountsArizona(year, roi, tax_rates);
				
				var length = taxbrackets.length;
				
			//getting taxes
				var taxes = tax_controller(taxbrackets, length, income, amounts, tax_rates);
				
				return taxes;
		
	},
	
	taxBracketCalifornia: function(income, roi, year){
		
		//getting current year's taxbrackets for california
				var taxbrackets = tax_beans.gettaxBracketCalifornia(roi, year);
				
		//getting current year's taxrates for california
				var tax_rates = tax_beans.gettax_ratesCalifornia();
				
		//getting current year's amounts for california
				var amounts = tax_beans.gettaxAmountsCalifornia(year, roi, tax_rates);
				
				var length = taxbrackets.length;
				
		//getting taxes
				var taxes = tax_controller(taxbrackets, length, income, amounts, tax_rates);
				
				return taxes;
		
	},
	
	taxBracketKansas: function(income, roi, year){
		
		//getting current year's taxbrackets for kansas
				var taxbrackets = tax_beans.gettaxBracketKansas(roi, year);
				
		//getting current year's taxrates for kansas
				var tax_rates = tax_beans.gettax_ratesKansas();
				
		//getting current year's amounts for kansas
				var amounts = tax_beans.gettaxAmountsKansas(year, roi, tax_rates);
				
				var length = taxbrackets.length;
				
		//getting taxes
				var taxes = tax_controller(taxbrackets, length, income, amounts, tax_rates);
				
				
				return taxes;
			
	}
};
