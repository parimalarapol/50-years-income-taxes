module.exports = function (taxbrackets, length, income, amounts, tax_rates) {
	
	var i = 0, mid = length/2;
	var returnArray = [0,0,0];
	mid = Math.floor(mid);
	
	//if a state has only 2 tax brackets
	if(length == 2){
		if(income > taxbrackets[i] && income < taxbrackets[i+1]){
			
			//after the taxbracket is found, retrieving tax_rates and amount to be added for the calculation of taxes
				returnArray[0] = taxbrackets[i];
				returnArray[1] = tax_rates[i];
				returnArray[2] = amounts[i]; 
				//return returnArray;
			}
			else{
				i++;
				//after the taxbracket is found, retrieving tax_rates and amount to be added for the calculation of taxes
				returnArray[0] = taxbrackets[i];
				returnArray[1] = tax_rates[i];
				returnArray[2] = amounts[i];
				//return returnArray;
			}			
			
		}//end of if
		
//for states with more than two tax brackets
	
	//OUTER IF
	if(length > 2){
		
		//dividing the array into two halves and searching
		
			//if income > mid value of the taxbracket array, then search from mid till last
			
			//INNER IF
			if(income >= taxbrackets[mid]){
				
					for(i = mid ; i < length-1 ; i++){
						if(income > taxbrackets[i] && income <= taxbrackets[i+1] && i+1 < length){
							//after the taxbracket is found, retrieving tax_rates and amount to be added for the calculation of taxes
							returnArray[0] = taxbrackets[i];
							returnArray[1] = tax_rates[i];
							returnArray[2] = amounts[i]; 
							
						}					
					}//end of for
					
					if(i == length-1 && returnArray[0] == 0){
						//after the taxbracket is found, retrieving tax_rates and amount to be added for the calculation of taxes
						returnArray[0] = taxbrackets[i];
						returnArray[1] = tax_rates[i];
						returnArray[2] = amounts[i]; 					
					}
				
			}//end of INNER IF
			
			else{
					for(i = 0 ; i <= mid ; i++){
						if(income > taxbrackets[i] && income <= taxbrackets[i+1]){
							//after the taxbracket is found, retrieving tax_rates and amount to be added for the calculation of taxes
							returnArray[0] = taxbrackets[i];
							returnArray[1] = tax_rates[i];
							returnArray[2] = amounts[i]; 
							
						}
					}//end of for
					
			}//end of else
				
			
		}//end of OUTER IF
		
		return returnArray;		
		
};