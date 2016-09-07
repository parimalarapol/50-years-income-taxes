package com.retireup;

import java.util.Scanner;

public class RetireUp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter your State");		
		String state = sc.nextLine();
		
		System.out.println("Enter your annual income");
		float income = sc.nextFloat();
		
		System.out.println("Enter your percentage of annual income increment");
		float ari = sc.nextFloat(); //Annual Rate of Increment
		
		System.out.println("Enter rate of inflation");
		float roi = sc.nextFloat(); //Annual Rate of Inflation
		
		sc.close();
		//tax_bracket = StateMap.getTaxbracket(state);		
						
				if(state.equalsIgnoreCase("Arizona")){
					ArizonaState.divideAndCalculate(income, ari, roi);
				}
				
				else if(state.equalsIgnoreCase("California")){
					CaliforniaState.divideAndCalculate(income, ari, roi);
				}
				
				else if(state.equalsIgnoreCase("Illinois")){
					IllinoisState.divideAndCalculate(income, ari, roi);
				}
				
				else if(state.equalsIgnoreCase("Kansas")){ 
					KansasState.divideAndCalculate(income, ari, roi);					
				}			
				
				else{
					System.out.println("Invalid state");
					System.exit(0);
				}	
				
	}//end of main

}//end of class
