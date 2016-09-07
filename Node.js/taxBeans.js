var cal_inflation = require ('./calculateInflation');


tax_brackets_arizona = [0, 10000, 25000, 50000, 150000];
tax_brackets_california = [0, 7582, 17976, 28371, 39384, 49774, 254250, 305100, 1000000];
tax_brackets_kansas = [0, 15000];
tax_brackets_federal = [0, 9276, 37651, 91151, 190151, 413351, 415051];


amounts_arizona = [0, 259, 691, 1531, 5771];
amounts_california = [0, 75.82, 283.70, 699.50, 1360.28, 2191.48, 21207.75, 26445.30, 49429.5, 109884];
amounts_kansas = [0, 405];
amounts_federal = [0, 927.5, 5183.75, 18558.75, 46278.75, 119934.75, 120529.75];


module.exports = {	

//GETTAXBRACKETARIZONA()
	gettaxBracketArizona: function(roi, year){
		
		var length = tax_brackets_arizona.length;
		
			if(year == 1 || roi == 0){
				return tax_brackets_arizona;
			}
			
			//calculating and updating each taxbracket with the inflation rate
			else{
				for(var i=0; i<length; i++){
					tax_brackets_arizona[i] = cal_inflation.calculate_Inflation(tax_brackets_arizona[i], roi);
				}
			}		
		return tax_brackets_arizona;
		
	},

//GETTAXBRACKETCALIFORNIA()
	gettaxBracketCalifornia: function(roi, year){
		
		var length = tax_brackets_california.length;
		
			if(year == 1 || roi == 0){
				return tax_brackets_california;
			}
			
			//calculating and updating each taxbracket with the inflation rate
			else{
				for(var i=1; i<length; i++){
					tax_brackets_california[i] = cal_inflation.calculate_Inflation(tax_brackets_california[i], roi);
				}
			}		
		return tax_brackets_california;
		
	},

//GETTAXBRACKETKANSAS()
	gettaxBracketKansas: function(roi, year){
		
		var length = tax_brackets_kansas.length;
		
			if(year == 1 || roi == 0){
				return tax_brackets_kansas;
			}
			
			//calculating and updating each taxbracket with the inflation rate
			else{
				for(var i=1; i<length; i++){
					tax_brackets_kansas[i] = cal_inflation.calculate_Inflation(tax_brackets_kansas[i], roi);
				}
			}		
		return tax_brackets_kansas;
		
	},
	
//GETTAXBRACKETFEDERAL()
	gettaxBracketFederal: function(roi, year){
		
		var length = tax_brackets_federal.length;
		
			if(year == 1 || roi == 0){
				return tax_brackets_federal;
			}
			else{
				for(var i=0; i<length; i++){
					tax_brackets_federal[i] = cal_inflation.calculate_Inflation(tax_brackets_federal[i], roi);
				}
			}		
		return tax_brackets_federal;
		
	},

//GETTAXAMOUNTSARIZONA()
	gettaxAmountsArizona: function(year, roi, tax_rates){
		
		var temp = 0;
		if(year == 1 || roi == 0){
			return amounts_arizona;
		}
		else{
			
			for(var i=0 ; i<amounts_arizona.length-1; i++){
					amounts_arizona[i+1] = temp + cal_inflation.calculate_Amounts(tax_brackets_arizona[i],tax_brackets_arizona[i+1], tax_rates[i]);
					temp = amounts_arizona[i+1];
			}//end of for
			
		}//end of elseif
		return amounts_arizona;
		
	},

//GETTAXAMOUNTSCALIFORNIA()
	gettaxAmountsCalifornia: function(year, roi, tax_rates){
		
		var temp = 0;
		if(year == 1 || roi == 0){
			return amounts_california;
		}
		
		//calculating and updating amounts, that has to be added with the tax_rate to calculate taxes
		else{
			
			for(var i=0 ; i<amounts_california.length-1; i++){
					amounts_california[i+1] = temp + cal_inflation.calculate_Amounts(tax_brackets_california[i],tax_brackets_california[i+1], tax_rates[i]);
					temp = amounts_california[i+1];
			}//end of for
			
		}//end of elseif
		return amounts_california;
		
	},

//GETTAXAMOUNTSKANSAS()
	gettaxAmountsKansas: function(year, roi, tax_rates){
		var temp = 0;
		if(year == 1 || roi == 0){
			return amounts_kansas;
		}
		
		//calculating and updating amounts, that has to be added with the tax_rate to calculate taxes
		else{
			
			for(var i=0 ; i<amounts_kansas.length-1; i++){
					amounts_kansas[i+1] = temp + cal_inflation.calculate_Amounts(tax_brackets_kansas[i],tax_brackets_kansas[i+1], tax_rates[i]);
					temp = amounts_kansas[i+1];
			}//end of for
			
		}//end of elseif
		return amounts_kansas;
	},
	
//GETTAXAMOUNTSFEDERAL()
	gettaxAmountsFederal: function(year, roi, tax_rates){
		var temp = 0;
		if(year == 1 || roi == 0){
			return amounts_federal;
		}
		
		//calculating and updating amounts, that has to be added with the tax_rate to calculate taxes
		else{
			
			for(var i=0 ; i<amounts_federal.length-1; i++){
					amounts_federal[i+1] = temp + cal_inflation.calculate_Amounts(tax_brackets_federal[i],tax_brackets_federal[i+1], tax_rates[i]);
					temp = amounts_federal[i+1];
			}//end of for
			
		}//end of elseif
		return amounts_federal;
	},

//GETTAXRATESARIZONA()	
	gettax_ratesArizona: function(){
		
		var tax_rates_arizona = [2.59, 2.88, 3.36, 4.24, 4.54];
		
		return tax_rates_arizona;
		
	},

//GETTAXRATESCALIFORNIA()	
	gettax_ratesCalifornia: function(){
		
		var tax_rates_california = [1, 2, 4, 6, 8, 10.30, 11.30, 12.30, 13.30];
		
		return tax_rates_california;
		
	},

//GETTAXRATESKANSAS()	
	gettax_ratesKansas: function(){
		
		var tax_rates_kansas = [2.7, 4.9];
		
		return tax_rates_kansas;
		
	},

//GETTAXRATESFEDERAL()	
	gettax_ratesFederal: function(){
		
		var tax_rates_federal = [10, 15, 25, 28, 33, 35, 39.6];
		
		return tax_rates_federal;
		
	},

};