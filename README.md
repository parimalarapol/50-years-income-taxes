# 50-years-income-taxes

Calculated 50 years of income and taxes for 4 states - Arizona, california, Kansas, and Illinois.

Did the project in Node.js and Java.

If you want to run this project in node.js, install "readline-sync".

FLOW OF SEQUENCE

* app REQUIRES arizonaState/ californiaState/ kansasState/ illinoisState DEPENDING ON THE STATE ENTERED

  	* arizonaState/ californiaState/ kansasState REQUIRE {calculateIncome, generateRandom, stateTaxBracket, federalTaxBracket}

	* illinoisState REQUIRES {calculateIncome, generateRandom, calculateTaxes, federalTaxBracket}

* stateTaxBracket & federalTaxBracket REQUIRE {taxBeans, taxController}

* taxBeans REQUIRES calculateInflation

* taxController REQUIRES {taxBracket, calculateTaxes}

***************************************************************************************************************

** Reference : http://www.tax-brackets.org/
	
	* It had a detailed examples of how much amount has to be added to calculate taxes with income and tax_rate.

* Explaining how I performed the calculations of taxbrackets, tax_rates, amounts, and rate of inflation

Example: As an example of Arizona
	 
	taxbrackets = {	

	0+
	10,000+ 
	25,000+
	50,000+
	150,000+	

	}

	tax_rates = {
	
	2.59
	2.88
	3.36
	4.24
	4.54
	
	}

	tax_amounts = {
	
	0.00
	259
	691
	1,531
	5,771
	
	}

	* For income between $0.00 and $10,000 ; you pay 2.59% of the income
	* For income between $10,000 and $25,000 ; you pay 2.88% of the income + $259.00
	* For income between $25,000 and $50,000 ; you pay 3.36% of the income + $691.00 & so forth

	*I had taxbrackets for every state; to determine under which bracket the user's income falls into
	*Updated taxbrackets by compunding with inflation rate. The same is applied with the amounts. tax_rates are kept fixed.

	*if user's income is 70,000; his income falls under 50,000 - 150,000 bracket, hence he will pay amount $1,531 and 4.24% on remaining 20,000
	    	income - minimum value in the tax_bracket = 70,000 - 50,000 = 20,000
	    	                                          (($20,000*4.24)/100)+1,531 = $2379 (statetaxes)
	*Same procedure to calculate federal taxes
		    taxes = state_taxes + federal_taxes


#Applied Randomness
	* Applied Randomness for Annual Inflation Rate and Annual Income Increase Rate
	* Based on few observations of United States rate of annual inflation for years 2006 - present, it fell in the range of [-0.75, 3.50].
	* Random annual inflation rate's (roi) & annual income increase rate (ari) are calculated in "generateRandom.js"
	* Hence, I applied randomness to the annual rate of inflation in the range of [-0.75, 3.50]
	* Annual income increase rate (ari) is dependent on annual rate of inflation (roi). roi is added to the user's input ari.
	
	Ex: ari = 2, roi = 1, org_ari = ari; //user's input
	    Year 1 : 
		ari = 2, 
		roi = 1 //initial year returns user's values, no randomness calculated

	    Year 2 : 
		ari = org_ari + (n-1)years's roi = 2 + 1 = 3 ; 
		roi = 0.4 (randomly generated)
		
	    Year 3 : 
	    	ari = org_ari + 0.4 = 2 + 0.4 = 2.4 ; 
	    	roi = some randomly generated number 
	    	
	    & so forth
	    	
	    Conditions for random roi:
		if(roi<1 & roi>0.3) or if (roi>3)
			then, roi is randomly generated between [-0.75 , 3.50]
		else if(roi<0.3)
			then, roi is randomly generated between [-0.75, 0.3]
		else
			then, roi is randomly generated between a range of [roi-1 , roi+1]
			i.e., if year is 3, and 2nd year's roi was 2.4, 
				year 3 : roi = [((n-1)year's roi-1) , ((n-1)year's roi+1)]
					     = [2.4-1 , 2.4+1]
					     = [1.4, 3.4]

        	& so forth
