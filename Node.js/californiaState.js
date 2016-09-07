var cal_income = require('./calculateIncome');
var state_taxes = require('./stateTaxBracket');
var federal_taxes = require('./federalTaxBracket');
var gen_random = require('./generateRandom');

module.exports = function (income, ari, roi) {
	
	var income_total = 0, taxes = 0, taxes_total = 0, years = 50;
	var result = [0, 0];
	
	//to calculate and display income & taxes for 50 years
	for(var i = 1 ; i<=years ; i++){
	
	//generating random ari
		ari = gen_random.generate_ari(ari, i, roi);
	
	//calculating income
		income = cal_income(income, ari, i);
		
	//cumulative income till ith year
		income_total = income_total + income;
		
	//ceiling income_total to 2 decimal points
		income_total = Math.ceil(income_total*100)/100;
		
	//generating random roi
		roi = gen_random.generate_roi(roi, i);	

	//calculating statetaxes
		taxes = state_taxes.taxBracketCalifornia(income, roi, i);
		
	//calculating federaltaxes and combining state and federal taxes
		taxes = taxes + federal_taxes.taxBracketFederal(income, roi, i);		
		
	//ceiling taxes to 2 decimal points
		taxes = Math.ceil(taxes*100)/100;
		
	//cumulative taxes till ith year
		taxes_total = taxes_total + taxes;
		taxes_total = Math.ceil(taxes_total*100)/100;
		
		console.log('Year '+i+':: income - $'+income+'; Taxes - $'+taxes);
	}
	
	i--;
	console.log('Your '+i+' years of Income & Taxes :: Income : $'+income_total+'; Taxes : $'+taxes_total);	
	
	result[0] = income_total; 
	result[1] = taxes_total;
	
	return result;
	
};
