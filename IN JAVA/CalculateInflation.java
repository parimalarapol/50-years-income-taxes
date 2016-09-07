package com.retireup;

public class CalculateInflation {
	
		public static float calculateInflation(float taxbracket, float roi){
			
			taxbracket = taxbracket + ((taxbracket*roi)/100);
			taxbracket = Math.round(taxbracket*100.0f)/100.0f;
			
			return taxbracket;
		}
		
		public static float calculateAmounts(float taxbracket1, float taxbracket2, float tax_rate){
			
			float amount = 0;
			
				amount = ((taxbracket2-taxbracket1)*tax_rate/100);
				amount = Math.round(amount*100.0f)/100.0f;
			
			return amount;
		}
}
