module.exports = function (income, ari, year) {
	
	//for 1st year, returns the income entered by the user
	if(year == 1 || ari == 0){
		return income;
	}
	
	// else, calculates income and returns
	else{
		
		income = income + ((income*ari)/100);
		
		//ceiling income to 2 decimal points
		income = Math.ceil(income*100)/100; 
		return income;
	}
	
};