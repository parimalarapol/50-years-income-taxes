var state_arizona = require('./arizonaState');
var state_california = require('./californiaState');
var state_illinois = require('./illinoisState');
var state_kansas = require('./kansasState');


var readlineSync = require('readline-sync');
 
//user's input
var state = readlineSync.question('Please enter your State of Residence? ');
var income = readlineSync.question('What is your Annual Income? ');
var ari = readlineSync.question('What is your Annual Rate of Income Increase? ');
var roi = readlineSync.question('What is Annual Rate of Inflation? ');

//converting from string to float
income = parseFloat(income);
ari = parseFloat(ari);
roi = parseFloat(roi);

if((income>0 && income<999999999999) && (ari>=0) && (roi<=3.5 && roi>= -0.75)){
	
		if(state.toUpperCase() == 'ARIZONA' || state.toUpperCase() == 'AZ'){
			state_arizona(income, ari, roi);
		}

		else if(state.toUpperCase() == 'CALIFORNIA' || state.toUpperCase() == 'CA'){
			state_california(income, ari, roi);
		}

		else if(state.toUpperCase() == 'ILLINOIS' || state.toUpperCase() == 'IL'){
			state_illinois(income, ari, roi);
		}

		else if(state.toUpperCase() == 'KANSAS' || state.toUpperCase() == 'KS'){
			state_kansas(income, ari, roi);
		}
		else{
			console.log("The state you entered is incorrect.");
		}
	
}

else{
	
	if(income <=0){
	console.log("Invalid. Income should be greater than 0");	
	}
	
	else if(income > 999999999999){
		console.log("Input too long. Might result in incorrect output.");
		console.log("income should be < 999999999999");
	}
	
	if(ari < 0){
	console.log("Annual Income Increase Rate cannot be negative.");
	}

	if(roi>3.5 || roi<-0.75){
		console.log("Inflation Rate never drops below -0.75, and never goes above 3.5");
	}
	
}

