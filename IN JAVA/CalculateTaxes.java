package com.retireup;

public class CalculateTaxes {
	
	public static float calculateTaxes(float income, float tax_rate, float amount){
		
		float tax = 0;
			
			tax = ((income*tax_rate)/100) + amount;

			tax = Math.round(tax*100.0f)/100.0f;
		
			return tax;
	}

}