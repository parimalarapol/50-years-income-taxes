package com.retireup;

public class StateTaxBracket {
	
	public static float taxBracketArizona(float income, float roi, int year){
		
		float taxes = 0;
		float[] taxbrackets = TaxBeans.gettaxBracketArizona(roi, year);
		float[] tax_rates = TaxBeans.gettax_ratesArizona();
		float[] amounts = TaxBeans.getAmountsArizona(year, roi, tax_rates);
		
		int length = taxbrackets.length;
		
		float[] tax_tax_rate_amount = TaxBracket.calculateTaxBracket(taxbrackets, length, income, amounts, tax_rates);
		
		float taxbracket = tax_tax_rate_amount[0];
		float tax_rate = tax_tax_rate_amount[1];
		float amount = tax_tax_rate_amount[2];
		
		income = income - taxbracket;
		taxes = CalculateTaxes.calculateTaxes(income, tax_rate, amount);
				
		return taxes;
		
	}//end of taxBracketArizona
	
	public static float taxBracketCalifornia(float income, float roi, int year){
		
		float taxes=0;
		float[] taxbrackets = TaxBeans.gettaxBracketCalifornia(roi, year);
		float[] tax_rates = TaxBeans.gettax_ratesCalifornia();
		float[] amounts = TaxBeans.getAmountsCalifornia(year, roi, tax_rates);
		
		int length = taxbrackets.length;
		
		float[] tax_tax_rate_amount = TaxBracket.calculateTaxBracket(taxbrackets, length, income, amounts, tax_rates);
		
		float taxbracket = tax_tax_rate_amount[0];
		float tax_rate = tax_tax_rate_amount[1];
		float amount = tax_tax_rate_amount[2];
		
		//System.out.println(" "+tax_rate+" "+amount);
		income = income - taxbracket;
		taxes = CalculateTaxes.calculateTaxes(income, tax_rate, amount);	
		
		return taxes;
		
	}//end of taxBracketCalifornia
		
	
	public static float taxBracketKansas(float income, float roi, int year){
		
		float taxes = 0;
		float[] taxbrackets = TaxBeans.gettaxBracketKansas(roi, year);
		float[] tax_rates = TaxBeans.gettax_ratesKansas();	
		float[] amounts = TaxBeans.getAmountsKansas(year, roi, tax_rates);	
			
		int length = taxbrackets.length;
		
		float[] tax_tax_rate_amount = TaxBracket.calculateTaxBracket(taxbrackets, length, income, amounts, tax_rates);
		
		float taxbracket = tax_tax_rate_amount[0];
		float tax_rate = tax_tax_rate_amount[1];
		float amount = tax_tax_rate_amount[2];
		
		income = income - taxbracket;
		taxes = CalculateTaxes.calculateTaxes(income, tax_rate, amount);
		
		return taxes;
		
	}//end of taxBracketKansas	
	
		
	
}//end of class
