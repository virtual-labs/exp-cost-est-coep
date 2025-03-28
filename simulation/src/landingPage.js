var  name1;
$( document ).ready(function() {
   var name=["BATCH PROCESS & BOTTLE FILLING","BOILER & HEAT EXCHANGER","SPRAY DRYER","DISTILLATION COLUMN"]
	var nums = [0,1,2,3],
    ranNums = [],
    i = nums.length,
    j = 0;

	while (i--) {
	    j = Math.floor(Math.random() * (i+1));
	    ranNums.push(nums[j]);
	    nums.splice(j,1);
	}
//console.log(ranNums);

    htm=''
    	+'<div class="row titlePart">'
    	+'	<div class="col-sm-1">'
    	+'		</div>'
    	+'	<div class="col-sm-10">'
    	+'<div class="row" >'
    	+'	<div class="col-sm-2">'
    	+'		</div>'
    	+'		<div class="col-sm-2">'
    	+'		 <label for="sel1" style=""><b>Select Type of P&ID :</b></label>'
    	+'		</div>'
    	+'		<div class="col-sm-6">		'
    	+'	      <select class="form-control" id="experimentName" style="font-weight: 600;">'
    	+'	        <option>------SELECT PLANT------</option>'
    	for(i=0;i<name.length;i++){
    		var p=ranNums[i];
//    		console.log(p);
    		  htm+='   <option value='+i+'><b>'+name[p]+'</b></option>'
    	}
    htm+='	      </select>'
    	+'		</div>'
    	+'		<div class="col-sm-2">'
    	+'		</div>'
    	+'		</div>'
    	+'		</div>'
    	+'	<div class="col-sm-1">'
    	+'		</div>'
    	+'</div>'
    	+'<div class="row">'
    	+'	<div class="col-sm-1">'
    	+'</div>'
    	+'	<div class="col-sm-10" style="background-color: #f2eeee;padding: 45px;margin-top: 10px;border-radius: 10px;">'
    	+'<b>1.	Instructions</b>'
    	+'<p>Designing a pilot plant for boilers and heat exchangers involves a detailed understanding '
    	+'of both the equipment and the processes they support. The following questionnaire is tailored '
    	+'to gather comprehensive information for designing a boiler and heat exchanger pilot plant: </p>'
//    	1. Project Overview
//    	1.1What is the primary objective of the pilot plant? (e.g., testing new boiler technology, evaluating heat exchanger performance)
//    	1.2What are the expected outcomes or goals for the pilot testing?
//    	1.3 What is the overall scope of the project? (e.g., specific tests, performance metrics)
//
//    	2. Site and Location
//    	2.1 What is the proposed location for the pilot plant? (Include geographical, logistical, and environmental considerations)
//    	2.2 Are there any site-specific constraints or advantages? (e.g., space availability, proximity to utilities)
//    	2.3 What are the local regulations and zoning laws that may impact the plant?
//
//    	 3. Boiler Design Requirements
//    	3.1 What type of boiler will be used in the pilot plant? (e.g., fire-tube, water-tube, electric)
//    	3.2 What is the expected capacity of the boiler? (e.g., steam output in tons/hour, pressure range)
//    	3.3 What are the operating conditions for the boiler? (e.g., temperature, pressure)
//    	3.4 What fuel sources will be used? (e.g., natural gas, oil, biomass)
//    	3.5 Are there specific efficiency or emission targets for the boiler?

    	+'</div>'
    	+'	<div class="col-sm-1">'
    	+'</div>'
    	+'</div>'
    	
    	
    
    	$("#landingPage").html(htm);
    
    $("#experimentName").change(function(){
      name1=$('#experimentName').find('option:selected').text();
    	console.log(name1);
    	if("SPRAY DRYER"==name1){
    		spryerDryerComponent();	
    	}
    	else if("DISTILLATION COLUMN"==name1){
    		DistillationColumnPiping();	
    	}
    	else if("BOILER & HEAT EXCHANGER"==name1){
    		BoilerHeatExchangerPiping();	
    	}
    	else if("BATCH PROCESS & BOTTLE FILLING"==name1){
    		BatchProcessBottleFillingPiping();	
    	}
    	else
    		{
    		alert("Select Plant");
    		}
    	  $("#mainDiv,#buttonDiv,#Header").prop("hidden",false);
    	  $("#landingPage").prop("hidden",true);
    		
    });
});