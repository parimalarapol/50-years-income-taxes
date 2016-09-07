package com.retireup;

public class CalculateIncome {

	//static private int count = 0;
	
	public static float calculateIncome(float income, float ari, int year){
		
		//System.out.println("Income and Taxes for 50 years");
		if(year == 1){
			return income;
		}
		
		else{
		income = income + ((income*ari)/100);
		income = Math.round(income*100.0f)/100.0f;		
				
		return income;
		}
	}
}
