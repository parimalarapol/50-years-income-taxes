package com.retireup;

public class TaxBracket {

public static float[] calculateTaxBracket(float[] taxbrackets, int length, float income, float[] amounts, float[] tax_rates){
		
		int i = 0, mid = length/2;
		float[] returnArray = new float[3];
		returnArray[0] = 0;
		returnArray[1] = 0;
		returnArray[2] = 0;
		
		//System.out.println(" "+length);
		if(length == 2){
			
			if(income > taxbrackets[i] && income < taxbrackets[i+1]){
				returnArray[0] = taxbrackets[i];
				returnArray[1] = tax_rates[i];
				returnArray[2] = amounts[i]; 
				return returnArray;
			}
			else{
				i++;
				returnArray[0] = taxbrackets[i];
				returnArray[1] = tax_rates[i];
				returnArray[2] = amounts[i];
				return returnArray;
			}			
			
		}//end of if
		
		if(length > 2){
			if(income >= taxbrackets[mid]){
				for(i = mid ; i < length-1 ; i++){
					if(income > taxbrackets[i] && income <= taxbrackets[i+1] && i+1 < length){
						returnArray[0] = taxbrackets[i];
						returnArray[1] = tax_rates[i];
						returnArray[2] = amounts[i]; 
						
						return returnArray;
					}					
				}
				if(i == length-1){
					returnArray[0] = taxbrackets[i];
					returnArray[1] = tax_rates[i];
					returnArray[2] = amounts[i]; 
					
				}
			}//end of inner if
			
			else{
				for(i = 0 ; i <= mid ; i++){
					if(income > taxbrackets[i] && income <= taxbrackets[i+1]){
						returnArray[0] = taxbrackets[i];
						returnArray[1] = tax_rates[i];
						returnArray[2] = amounts[i]; 
						
						return returnArray;
					}
				}
			}//end of else
		}//end of outer if
		
		return returnArray;	
		
	}//end of calculateTaxBracket

	
}
