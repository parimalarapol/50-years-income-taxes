package com.retireup;

public class IllinoisState {

public static void divideAndCalculate(float income, float ari, float roi){
		
		float taxes;
		float tax_rate = 5.00f, amount = 0;//as no tax brackets, taxrate is standard 5% and extra amount to be added is always 0
		float income_total = 0, taxes_total = 0;
		int years = 50, i;
		
		for(i = 1 ; i <= years ; i++){
			
			income = CalculateIncome.calculateIncome(income, ari, i);
			income_total = income_total + income;
			
			taxes = CalculateTaxes.calculateTaxes(income, tax_rate, amount);
			taxes = taxes + FederalTaxBracket.taxBracketFederal(income, roi, i);
			taxes_total = taxes_total + taxes;
			taxes_total = Math.round((taxes_total*100.0f)/100.0f);
			
			System.out.print("Year "+i);
			System.out.print("Income: "+income+"; ");
			System.out.println("Taxes: "+taxes+" ");//add taxes
			
		}
		i--;
		System.out.print(i+" years - ");
		System.out.print("Total Income: "+income_total+"; ");
		System.out.print("Total Taxes: "+taxes_total);
		
	}

	
}
