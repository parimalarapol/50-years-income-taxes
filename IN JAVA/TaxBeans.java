package com.retireup;

public class TaxBeans {

	static float taxbracketsarizona[] = {0, 10000, 25000, 50000, 150000};
	static float taxbracketscalifornia[] = {0, 7582, 17976, 28371, 39384, 49774, 254250, 305100, 1000000};
	static float taxbracketskansas[] = {0, 15000};
	static float taxbracketsfederal[] = {0f, 9276f, 37651f, 91151f, 190151f, 413351f, 415051f};
	static float amountsarizona[] = {0, 259, 691, 1531, 5771};
	static float amountscalifornia[] = {0, 75.82f, 283.70f, 699.50f, 1360.28f, 2191.48f, 21207.75f, 26445.30f, 49429.5f, 109884};
	static float amountskansas[] = {0, 405};
	static float amountsfederal[] = {0, 927.5f, 5183.75f, 18558.75f, 46278.75f, 119934.75f, 120529.75f};
			
	
	public static float[] gettaxBracketArizona(float roi, int year){
		
		if(year == 1 || roi == 0){
			return taxbracketsarizona;
		}
		else{
			if(roi>0){
				for(int i = 1 ; i < taxbracketsarizona.length ; i++){
					taxbracketsarizona[i] = CalculateInflation.calculateInflation(taxbracketsarizona[i], roi);
				}					
			}
			else{
				return taxbracketsarizona;
			}
		}
		
			return taxbracketsarizona;
		
	}
	
	public static float[] getAmountsArizona(int year, float roi, float[] tax_rates){
		
		float temp = 0;
		if(year == 1 || roi == 0){
			
			return amountsarizona;
		}
		
		else if(roi>0){
			
			for(int i=0 ; i<amountsarizona.length-1; i++){
					amountsarizona[i+1] = temp+ CalculateInflation.calculateAmounts(taxbracketsarizona[i], taxbracketsarizona[i+1], tax_rates[i]);
					temp = amountsarizona[i+1];
			}			
		}		
		return amountsarizona;
	}
	
	public static float[] gettax_ratesArizona(){
		
		float tax_rates[] = {2.59f, 2.88f, 3.36f, 4.24f, 4.54f};
		return tax_rates;
	}
	
//  
  //
	//END OF ARIZONA SETTERS AND GETTERS
	  //
		//
	
	public static float[] gettaxBracketCalifornia(float roi, int year){
		
		if(year == 1 || roi == 0){
			return taxbracketscalifornia;
		}
		else{
			if(roi>0){
				for(int i = 1 ; i < taxbracketscalifornia.length ; i++){
					taxbracketscalifornia[i] = CalculateInflation.calculateInflation(taxbracketscalifornia[i], roi);
				}					
			}
			else{
				return taxbracketscalifornia;
			}
		}
		
			return taxbracketscalifornia;
	}
	
	public static float[] getAmountsCalifornia(int year, float roi, float[] tax_rates){
		
		float temp = 0;
		if(year == 1 || roi == 0){
			
			return amountscalifornia;
		}
		
		else if(roi>0){
			System.out.println("hello");
			for(int i=0 ; i<amountscalifornia.length-1; i++){
					amountscalifornia[i+1] = temp+ CalculateInflation.calculateAmounts(taxbracketscalifornia[i], taxbracketscalifornia[i+1], tax_rates[i]);
					temp = amountscalifornia[i+1];
			}			
		}		
		return amountscalifornia;
	}
	
	public static float[] gettax_ratesCalifornia(){
		
		float tax_rates[] = {1, 2, 4, 6, 8, 10.30f, 11.30f, 12.30f, 13.30f};
		return tax_rates;
	}

//
  //
	//END OF CALIFORNIA SETTERS AND GETTERS
	  //
		//
	
	
	public static float[] gettaxBracketKansas(float roi, int year){
		
		//float taxbrackets[] = {0f, 15000f};
		
		if(year == 1 || roi == 0){
			return taxbracketskansas;
		}
		else{
			if(roi>0){
				for(int i = 1 ; i < taxbracketskansas.length ; i++){
					taxbracketskansas[i] = CalculateInflation.calculateInflation(taxbracketskansas[i], roi);
				}					
			}
			else{
				return taxbracketskansas;
			}
		}
		
			return taxbracketskansas;
	}

	
	public static float[] getAmountsKansas(int year, float roi, float[] tax_rates){
		
		float temp = 0;
		if(year == 1 || roi == 0){
			
			return amountskansas;
		}
		
		else if(roi>0){
			
			for(int i=0 ; i<amountskansas.length-1; i++){
					amountskansas[i+1] = temp+ CalculateInflation.calculateAmounts(taxbracketskansas[i], taxbracketskansas[i+1], tax_rates[i]);
					temp = amountskansas[i+1];
			}			
		}		
		return amountskansas;
	}
	
	public static float[] gettax_ratesKansas(){
		
		float tax_rates[] = {2.7f, 4.9f};
		return tax_rates;
	}
	
//
  //
	//END OF KANSAS SETTERS AND GETTERS
	  //
		//
	
	public static float[] gettaxBracketFederal(float roi, int year){
		
		if(year == 1 || roi == 0){
			return taxbracketsfederal;
		}
		else if(roi>0){
				for(int i = 1 ; i < taxbracketsfederal.length ; i++){
					taxbracketsfederal[i] = CalculateInflation.calculateInflation(taxbracketsfederal[i], roi);
				}					
		}
		
			return taxbracketsfederal;
	}
	
	public static float[] getAmountsFederal(int year, float roi, float[] tax_rates){
		
		float temp = 0;
		if(year == 1 || roi == 0){
			
			return amountsfederal;
		}
		
		else if(roi>0){
			
			for(int i=0 ; i<amountsfederal.length-1; i++){
					amountsfederal[i+1] = temp+ CalculateInflation.calculateAmounts(taxbracketsfederal[i], taxbracketsfederal[i+1], tax_rates[i]);
					temp = amountsfederal[i+1];
			}			
		}		
		return amountsfederal;
	}
	
	public static float[] gettax_ratesFederal(){
		
		float tax_rates[] = {10, 15, 25, 28, 33, 35, 39.6f};
		
		return tax_rates;
	}

//
  //
	//END OF FEDERAL SETTERS AND GETTERS
	  //
		//
	
	
}//END OF CLASS
