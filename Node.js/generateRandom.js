
module.exports = {
	
	generate_ari: function(ari, year, roi){
		
		if(year == 1){
			standard_ari = ari;
			return ari;
		}
		else{
			
			ari = Math.ceil((standard_ari + roi)*100)/100;
		}
		return ari;
	},
		
	generate_roi: function(roi, year){
		
		if(year == 1){
			return roi;
		}
		else{
		
			if(roi<1 && roi>0.3|| roi>3){
				roi = Math.ceil((Math.random() * (3.50 - (-0.75)) + (-0.75))*100)/100;
			}
			else if(roi<0.3){
				roi = Math.ceil((Math.random() * (0.5 - (-0.75)) + (-0.75))*100)/100;
				
			}
			
			else{
				roi = Math.ceil((Math.random() * ((roi+1.00) - (roi-1.00)) + (roi-1.00))*100)/100;
			}
		}
		return roi;
	}
	
};