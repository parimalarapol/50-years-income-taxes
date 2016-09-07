package com.retireup;

public class FederalTaxBracket {

	public static float taxBracketFederal(float income, float roi, int year){
	
		
		float[] taxbrackets = TaxBeans.gettaxBracketFederal(roi, year);
		float[] tax_rates = TaxBeans.gettax_ratesFederal();
		float[] amounts = TaxBeans.getAmountsFederal(year, roi, tax_rates);
		int length = taxbrackets.length;
		float taxes = 0;
		
		float[] tax_tax_rate_amount = TaxBracket.calculateTaxBracket(taxbrackets, length, income, amounts, tax_rates);
		
		float taxbracket = tax_tax_rate_amount[0];
		float tax_rate = tax_tax_rate_amount[1];
		float amount = tax_tax_rate_amount[2];
		
		income = income - taxbracket;
		taxes = taxes + CalculateTaxes.calculateTaxes(income, tax_rate, amount);
		
		return taxes;
	}
	
}
