var startCount=0;
var dataJson={};


var selectedValue = 100;
var faultcnt = 0;
var faultcntCorr = 0;
timerMasterJson = {};
 var resultJson={};
var faultArr = ["INLET FEED PUMP TO BOILER FAILED","RECIRCULATING PUMP (P2) STOPPED","SCR TURNED OFF","FCV CLOSED"];


function BoilerHeatExchangerMimic(){

	timerMasterJson.squences=$("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
$("#Header").html("<center><span >SIMULATION</span></center>");
	
	htm=` <div class="row">
	  			  <div class="col-sm-3" id="Selection" style=" border-style: double; margin-bottom: 25px;">
	      	</div>
	    	<div class="col-sm-9" id="diagram" style=" border-style: double;margin-bottom: 18px;">
			<!--      <img src="images/dryer12.png" class="img-fluid" style="margin-top:10px;"> -->
	    	</div>
	  	 </div>`;
	  	 $("#mainDiv").html(htm);
	  	 
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;" id="panel">'
		+'<center><span >PROCESS MONITORING PANEL</span></center>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="startBtn" class="btn btn-danger" style="width:100%" data-toggle="modal" data-target="#myModal1" disabled>Start</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="reset" class="btn btn-danger" style="width:100%" disabled >Reset</button>'
		+'</div>'
		+'</div>'
		+'<div class="row" id="DivRefMimic" hidden>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-10 titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >PANEL</span></center>'
		+'</div>'
		+'<div class="col-sm-3">'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="refMimic" class="btn btn-danger" style="width:100% ;margin-top: 20px;" data-toggle="modal" data-target="#refMimicModal" >Mimic</button>'
			+'</div>'
			+'</div>'
			
		+'<div class="row">'
		+'<div class="col-sm-12">'
		+'<button id="nextLevelFault" class="btn btn-danger" style="width:100%;margin-top:10px;" disabled>Next level Fault</button>'
		+'</div>'
		+'</div>'
		+'<div class="row " id="identifyFault" hidden>'
		+'<div class="col-sm-1">'
		+'</div>'
		+'<div class="col-sm-10 centered-label" >'
		+'<label >IDENTIFY FAULT</label>'
		+'</div>'
		+'<div class="col-sm-2">'
		+'</div>'
		+'<div class="col-sm-8" style="border-style: unset;padding:7px; text-align: center;" >'
		+' <select name="" id="faultSelection" class = "form-control" style="margin-top:10px;" >'
   
        +' </select>'
		+'</div>'
		+'<div class="col-sm-3">'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="verify" class="btn btn-danger" style="width:100% ;margin-top:10px;" data-toggle="modal" data-target="#preReq" >Verify</button>'
		+'</div>'
		+'<div class="col-sm-3">'
		+'</div>'
		+'<div class="col-sm-3">'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="result" class="btn btn-danger" style="width:100% ;margin-top:10px;" hidden >Result</button>'
		+'</div>'
		+'</div>'
		
		
		
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;" id="faultActivity">'
		+'<center><span >READINGS</span></center>'
		+'</div>'
	
		
		+'<div class="row conf" id="faultActivity1">'
		+'<table class="table table-bordered">'
		+' <thead>'

		+'</thead>'
		+'<tbody>'
		+' <tr>'
		+'   <td><label><b>TT1</b></label></td>'
		+'   <td><label class="PMCValue" id="tt1">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>TT2 </b></label></td>'
		+' <td><label class="PMCValue" id="tt2">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>TT3 </b></label></td>'
		+' <td><label class="PMCValue" id="tt3">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>TT4 </b></label></td>'
		+' <td><label class="PMCValue" id="tt4">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>TT5 </b></label></td>'
		+' <td><label class="PMCValue" id="tt5">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b> TT6</b></label></td>'
		+' <td><label class="PMCValue" id="tt6">0</label>°C</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>FT1</b></label></td>'
		+' <td><label class="PMCValue" id="ft1">0</label>lph</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>FT2</b></label></td>'
		+' <td><label class="PMCValue" id="ft2">0</label>Kg/Hr</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>FT3</b></label></td>'
		+' <td><label class="PMCValue" id="ft3">0</label>lph</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>PT</b></label></td>'
		+' <td><label class="PMCValue" id="pt">0</label>Bar</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>SCR</b></label></td>'
		+' <td><label class="PMCValue" id="scr">0</label></td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>PY1</b></label></td>'
		+' <td><label class="PMCValue" id="fi">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>PY2</b></label></td>'
		+' <td><label class="PMCValue" id="fi2">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>LT</b></label></td>'
		+' <td><label class="PMCValue" id="lt">0</label>mm</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>FCV</b></label></td>'
		+' <td><label class="PMCValue" id="fcv">0</label>mm</td>'  
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>MOV1</b></label></td>'
		+' <td><label class="PMCValue" id="msv1">0</label></td>' 
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>MOV2</b></label></td>'
		+' <td><label class="PMCValue" id="msv2">0</label></td>'  
		+'  </tr>'
		+'</tbody>'
		+'</table>'

		+'</div>'
		
		
		
+'<!-- The Modal -->'  
   +'<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="modelTitle1" aria-hidden="true">'  
  +'<div class="modal-dialog" id="modelDialog1" role="document">'  
    +'<div class="modal-content">'  
     +' <!-- Modal Header -->'  
      +'<div class="modal-header"> ' 
       +' <h4 class="modal-title" id="modelTitle1"></h4>  '
        +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'  
        +'  <span aria-hidden="true">&times;</span>'  
        +'</button>'  
      +'</div>  '
      +'<!-- Modal body -->  '
      +'<div class="modal-body" id="modelBody1"> ' 
       +' <!-- Content will be populated here -->'  
      +'</div> ' 
      +'<!-- Modal footer --> ' 
      +'<div class="modal-footer">  '
        +'<button type="button" class="btn btn-danger" data-dismiss="modal" id = "modalClose">Close</button>'  
      +'</div>'  
    +'</div>'  
 +' </div> ' 
+'</div>'  
+'<!-- End Modal -->'



+'	<!-- 			    The Modal  ProStr -->'
+'	  <div class="modal fade " id="preReq">'
+'	    <div class="modal-dialog modal-md" >'
+'		      <div class="modal-content">'
+'<!-- 		        Modal Header -->'
+'		        <div class="modal-header">'
+'	          <h4 class="modal-title"><center>Message Box</center></h4>'
+'		          <button type="button" class="close" data-dismiss="modal">&times;</button>'
+'		        </div>'
+'<!-- 		        Modal body -->'
+'		        <div class="modal-body" id="modalMessage" style="color:red">'

+'		        </div>'
+'<!-- 			        Modal footer -->'
+'		        <div class="modal-footer">'
+'	             <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
+'		        </div>'
+'		      </div>'
+'		    </div>'
+'		  </div>'
+'<!-- 			  End Modal ProStr -->'
		


		htm+=`<!-- 			    The Modal  ProStr -->
		  <div class="modal fade " id="refMimicModal">
		    <div class="modal-dialog modal-xl" >
			      <div class="modal-content">
<!-- 		        Modal Header -->
			        <div class="modal-header">
		          <h4 class="modal-title"><center></center></h4>
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			        </div>
<!-- 		        Modal body -->
			        <div class="modal-body" id="refMimicBody">
		
			        </div>
<!-- 			        Modal footer -->
			        <div class="modal-footer">
<!-- 		             <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button> -->
			        </div>
			      </div>
			    </div>
			  </div>
<!-- 			  End Modal ProStr -->`;



    // Modal box logic
    var modal = $('#resultModal');
    var span = $('.close');

    function showModal(message) {
        $('#modalMessage').html(message);
        modal.css('display', 'block');
    }

    span.click(function () {
        modal.css('display', 'none');
    });

    $(window).click(function (event) {
        if (event.target === modal[0]) {
            modal.css('display', 'none');
        }
    });



	
	$("#Selection").html(htm);
	 // Function to shuffle the array
            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            
            // Shuffle the fault array
            shuffleArray(faultArr);
            
            var dropdown = $('#faultSelection');
            dropdown.append('<option value="">Select the Fault </option>');
            faultArr.forEach(function(item) {
                dropdown.append('<option value="' + item + '">' + item + '</option>');
            });
      // Identify the correct answer
            var correctAnswer = "INLET FEED PUMP TO BOILER FAILED";
            $("#correctAnswer").text("Correct Answer: " + correctAnswer);

            // Check if P1 is selected
          
             var faultValue = 0;
            $('#faultSelection').change(function() {
                faultValue = $(this).val();
              
            }); 
            
            
      $("#verify").click(function(){
		  faultcnt++;
		  
		    if (faultValue === correctAnswer) {
                   
                     $("#result").prop('hidden',false);
					showModal(` <strong style="color:#153f68;font-size: large;">  Correct selection. </strong>`);
                } else {
                   
                    showModal(` <strong style="color:#153f68;font-size: large;">  Incorrect selection. Try again. </strong>`);
                }
		  
		 
		  
		  });   
		  
		  
		  $("#result").click(function(){
			   resultJson.faultCount = faultcnt;
			   result();
			  
		  })   
            
            
          
            
                 
	BoilerHeatExchangerDiagram();
	$("#BoilerHeatExchangerPost").click(function(){
		
		BoilerHeatExchangerPostQuestion();
		
	});
$("#reset,#resetToGo").click(function(){
	
	BoilerHeatExchangerDiagram();
		
	});
	$("#nextLevelFault").click(function(){


//    resultJson.startCount=startCount;
    $("#faultActivity1,#faultActivity,#startBtn,#reset,#nextLevelFault,#panel").prop('hidden',true);
      $("#identifyFault,#DivRefMimic").prop('hidden',false);
      $("#Header").html("<center><span >FAULT</span></center>");
    resultJson.startCount = startCount;
    timerMasterJson.mimic=$("#counter").text();
	console.log(timerMasterJson);
 
	
		
	});
	
	
	$("#refMimic").click(function () {
		var htm=`
		<center><video id="simVideo" width="90%" controls>
    <source src="images/boilerFaultalamVideo.mp4" type="video/mp4" >
    Your browser does not support the video tag.
</video></center>
		`;
		$("#refMimicBody").html(htm);
		var video = document.getElementById("simVideo");

	// Define the start and end skip times (in seconds)
	var skipStart = 5;  // Skip the first 5 seconds
	var skipEnd = 8;    // Skip the last 5 seconds

// 	video.onloadedmetadata = function() { 
	    // Get the duration of the video
	    var videoDuration = video.duration;

	    // Ensure the video plays between skipStart and (duration - skipEnd)
	    video.currentTime = skipStart;

	    // Event listener to pause the video when it reaches the end limit (video duration - skipEnd)
	    video.ontimeupdate = function() {
	        if (video.currentTime >= videoDuration - skipEnd) {
	            video.pause();
				video.currentTime = skipStart;
	        }
	    };

	    // Prevent seeking outside the allowed time range
	    video.addEventListener('seeking', function(event) {
	        // If seeking before the start time or after the allowed end time, reset the current time
	        if (video.currentTime < skipStart) {
	            video.currentTime = skipStart;
	        } else if (video.currentTime > videoDuration - skipEnd) {
	            //video.currentTime = videoDuration - skipEnd;
				video.currentTime = skipStart;
	        }
	    });
// 	};
	
	video.play();
		
	});


}

var arrayJson = {
		
		 "TT1" : [22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,24,25,28,30,40,45,53.33,60.83,68.33,75.83,
		 83.33,90.83,98.33,105.83,113.33,120.83,128.33,135.83,
		 135.833,135.83,135.83,135.83,135.83,135.83,135.83,135.83,135.83,
		 135.83,135.83,135.83,135.83,135.83,135.83,135.83,135.83,
		 132,131,130,129,128,127,128,129,129.5,131,132,133,134,135,133,131,130,130,130,130,131,132,133,134,135,135,135,136,
		 137,138,139,140,140,141,141,142,142,143,143,144,144,145,145,145,145,145,144,144,143,142,142,141,141,141,140,140,140,140,140],
	    
	    
	    
	    "TT2":[22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,25,25,25,25,25,25,25,25,25,25,
	    25,25,25,25,25,25,25,25,25,25,
	    30,30,30,30,30,30,30,30,30,30,
	   30,121.66,121.66,125,130,130,129,129.5,128,127,128,129,129.5,131,132,133,134,135,133,131,130,130,130,130,130,130,130,130,130,130,130,130,
	   131,132,133,134,135,133,131,130,130,130,130,131,132,133,134,135,135,135,134,133,132,131,130,130,130,130,130,130],
	    
	    "TT3":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,
	    22,24,25.33,26.83,28.33,29.83,31.33,32.83,34.33,35.83,37.33,38.83,40.33,40.33,40.33,40.33,40.33,40.33,40.33,40.33,40.33,40.33,40.33,40.33,40.33,40.33,
	    40.33,40.33,40.33,40.33,40.33,40.33,40.33,40.33,40.33,40.33,40.33,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,22,22,22,22],
	    
	    
	    "TT4":[22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,
	    22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22, 22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22],
	    
	    
	    "TT5":[22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,25,30,
	    32,34,35,37,38.7,40.4,42.1,43.8,45.5,47.2,48.9,50.6,52.3,54,55.7,57.4,59.1,60.8,62.5,64.2,65.9,67.6,69.3,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,71,
	    69.3, 67.6, 65.9, 64.2, 62.5, 60.8, 60.8, 60.8, 60.8, 60.8, 60.8, 60.8, 60.8, 60.8, 60.8, 60.8, 60.8],
	    
	    
	    "TT6":[22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,
	    22,22,22,22,22,22,22,22,22,22,22,22,22,22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5,30,30.5,31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,
	    36.5,  35.5,  34.5, 34,  33, 32.5,  31, 30, 29.5, 28, 27.5, 27, 26.5, 25.5, 25, 24.5,23, 22.5, 22],
	    
	    
	    "FT1":[0,5,10,15,20,25,30,35,40,45,50,50,50,50,50,25,20,15,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,10,12.5,13.5,14.5,15.5,16,
	    16.5,16.5,17.5,18.5,17.5, 17, 16.5, 16.5, 16, 15.5,10,5,5,5, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	    
	    "FT2":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3.6,4.2,5.1,5.7,6.39,7.08,7.77,8.46,9.15,9.84,10.53,11.22,11.91,
	    12.6,13.29,13.98,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,14.67,
	    14.67, 14.67, 13.98, 13.29, 12.6, 11.91, 11.22, 10.53, 9.84,9.84 ,6.84, 3.84, 0, 0, 0,0,0,0,0,0,0,0],
	    
	    
	    "FT3":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,120,240,240,240,240,240,240,240,240,240,240,240,300,360,420,456,
	    480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,
	    456, 420, 360, 300, 240, 240, 240, 240, 0, 0, 0, 0, 0, 0, 0, 0,0],
	    
	    
	    "PT":[0,0,0,0,0,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.055,0.055,0.055,0.055,0.055,0.5,1,1.25,1.4,1.7,1.9,2.125,2.35,2.575,2.8,3,3.2,3.4,3.5,
	    3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.4,3.35,3.3,3.2,3.15,3.15,3.15,3.15,3.2,3.21,3.26,3.3,3.4,3.4,3.4,3.4,3.4,
	    3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4, 3.5, 3.5, 3.5, 3.5, 3.6, 3.7, 3.8, 3.9, 2.35, 2.125, 1.9, 1.7, 1.4, 1.25, 
	    1, 0.5, 0.055,  0.05, 0.045, 0.04, 0.035, 0.03, 0.025, 0.02, 0.015, 0.01,0,0,0,0,0,0,0,0,0,0,0],
	    
	    "FI":[10,10,20,30,40,50,60,70,80,90,100,100,100,100,100,50,40,30,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
	    20,25,27,29,31,31,31,31,32,33,33, 31, 29, 27, 25, 20,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	    
	    "FI2":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,20,20,20,20,20,20,20,20,20,20,20,25,30,35,38,
	    40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,38,35,30,25,20,
	    20,20,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	    
	    "FCR":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	    10,12,14,17,19,21,24,26,28,31,33,35,37,40,42,44,47,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49, 47,44,42,40,37,35,33,31,28,26,24,21,19,17,14,12,10,
	    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	    
	    "LT":[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,145,150,155,160,165,160,158,156,154,152,150,148,146,144,142,141,141,140,140,140,140,140,140,
	    140,140,140,140,140,140,140,140,140,140,140,140,140,130,128,127,129,130,140,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,142,
	    142,142,140,130,120,110,100,90,80,70,60,50,40,30,20,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	    
	    "scr":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,40,60,80,100,100,100,100,100,100,100,100,100,100,100,80,70,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,
	    51,52,53,55,57,59,60,62,64,68,70,72,74,72,71,70,68,68,68,68,68,68,68,68,68,68,68,68,64,64,60,57,57,50,50,50,40,40,30,
	    20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	    
	    "MSV2":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,15,20,20,25,25,25,30,30,30,30,
	    30,30,25,20,20,15,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	    
	    "MSV1":[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,
	    100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,90,90,90,85,80,80,75,75,75,70,70,70,70,70,70,70,
	    70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,60,60,60,60,60,50,50,50,40,40,30,20,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	    
       "time":[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 
	    38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 
	    71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,100,101,102,103,
	     104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129]

		
		
		}

console.log(arrayJson.FT3.length); 
function BoilerHeatExchangerDiagram() {
	//function mimic() {
	//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);

//	$('#canvas-div').removeAttr('width');
//	$('#canvas-div').removeAttr('height');
	var w = 1200;
	var h = 1000;
$("#diagram").html("");
	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
		x = 50;
		y = 10;
	var ht = -100;
 
	time = selectedValue;

//var arc = paper.path("M "+(x+200)+" "+(y+300)+" A 300 150 0 0 0 "+(x+700)+" "+(y+300)).attr({ 'stroke': '#000', 'stroke-width': 4});



//	var wimg = paper.image("images/offMotor.png", x+200, y+20, 50, 30);
//	var eimg = paper.image("images/offMotor.png", x+300, y+20, 50, 30);
//	var aimg = paper.image("images/offMotor.png", x+600, y+20, 50, 30);
//	var simg = paper.image("images/offMotor.png", x+800, y+20, 50, 30);
	var magnetic1 = paper.image("images/magnetic.png", x+325, y+108, 50, 60);
	var magnetic2 = paper.image("images/magnetic.png", x+480, y+570, 50, 60).toFront();
	paper.image("images/ttSensor.png", x+250, y+240, 30, 30);
	paper.image("images/ttSensor.png", x+320, y+595, 30, 30).attr({ 'transform': 'r' + 0 });
	paper.image("images/ttSensor.png", x+500, y+115, 30, 30);
	paper.image("images/ttSensor.png", x+430, y+675, 30, 30).attr({ 'transform': 'r' + 0 });
	paper.image("images/ttSensor.png", x+480, y+490, 30, 30).attr({ 'transform': 'r' + 90 });
	paper.image("images/ttSensor.png", x+600, y+225, 30, 30).attr({ 'transform': 'r' + 0 });
	
	var valve2 = paper.image("images/redValve.png", x+305, y+650, 50, 50).attr({ 'transform': 'r' + 270 });
	
	
	paper.image("images/motor.png", x+360, y+570, 90, 90);
	paper.image("images/motor.png", x+500, y+600, 90, 90);
	paper.image("images/pt.png", x+230, y+100, 50, 50);
	var controlValve = paper.image("images/controlV.png", x+370, y+75, 90, 90).attr({ 'transform': 'r' + 0 });
	paper.image("images/ltSensor.png", x+100, y+250, 50, 50);
	paper.image("images/signal.png", x+400, y+30, 20, 50);
	var Lt = paper.image("images/llindicator.png", x+140, y+530, 45, 20).toFront();
	var Lt1 = paper.image("images/llindicator.png", x+690, y+585, 45, 20).attr({ 'transform': 'r' + 0 });
	var Lt2 = paper.image("images/llindicator.png", x+690, y+280, 45, 20).attr({ 'transform': 'r' + 0 });
	var Lh = paper.image("images/lhindicator.png", x+695, y+515,  45, 20).attr({ 'transform': 'r' + 0 }).toFront();
	var Lh = paper.image("images/lhindicator.png", x+695, y+215,  45, 20).attr({ 'transform': 'r' + 0 }).toFront();
	
//	 var boiler = paper.path('M'+ (x + 230) + ' ' + (y + 350) + ' l 130 0 M ' +(x+360)+' '+(y+350)+' A 10 10 1 0 0 '+(x+360)+' '+(y+270)+'l -130 0 M' +(x+230)+' '+(y+270)+' A 10 10 1 0 0 '+(x+230)+' '+(y+350)+'l 130 0 ').attr({  "stroke": "#000",  "stroke-width": 5 ,"fill": "#fff" });
	var coil = paper.path('M'+ (x +420) + ' ' + (y+330 ) + 'l -80 0 l 20 -20 l -20 -20 l 80 0M').attr({  "stroke": "#474343",  "stroke-width": 3});
	
	
	const rect = paper.rect(x + 180, y + 270, 200, 80, 50).attr({
//    fill: "#6f8696", // Hot red color initially
     fill: "#9fa6ab",
    stroke: "#333",
    "stroke-width": 3,
	}).toFront();
	
	
	// Function to interpolate between two colors
function interpolateColor(color1, color2, factor) {
    const c1 = Raphael.getRGB(color1);
    const c2 = Raphael.getRGB(color2);
    const r = Math.round(c1.r + factor * (c2.r - c1.r));
    const g = Math.round(c1.g + factor * (c2.g - c1.g));
    const b = Math.round(c1.b + factor * (c2.b - c1.b));
    return `rgb(${r},${g},${b})`;
}

// Function to fill the rectangle up to 60% with visible animation
function fillWithTransition(rect, step) {
    const redColor = "#fff"; // Initial hot red color
    const blueColor = "#34deeb"; // Final blue color
    const emptyColor = "#fff"; // Empty white color

    // Limit the filling to 60%
    const maxFillPercentage = 50;

    // Calculate the gradient step color
    const currentColor = interpolateColor(redColor, blueColor, step / maxFillPercentage);
    const gradientString = `90-${currentColor}:${step}-${emptyColor}`;

    // Update the rectangle's fill attribute with the gradient
    rect.attr({
        fill: gradientString,
    });

    // Continue the animation if the filling is not complete
    if (step < maxFillPercentage) {
        setTimeout(() => fillWithTransition(rect, step + 1), 100); // Adjust speed (50ms per step)
    }
}

// Start the animation to fill 60% of the shape
//	 fillWithTransition(rect, 0);

	
	function heater(x,y){
		var tank = paper.path('M' + (x + 200 ) + ' ' + (y + 200 ) + 'l 0 200 l 300 0 l 0 -200  M'+(x+200)+' '+(y+200)+' A 80 27 0 0 1 '+(x+250)+' '+(y+200)+'' )
			.attr({ 'stroke': 'black', 'stroke-width': '5' });
		
	}
	
	var coldwaterline = paper.path('M' + (x +225) + ' ' + (y+560 ) + 'l 0 70 l 100 0 M' + (x + 320) + ' ' + (y + 630) + ' l 55 0  M'+ (x + 340) + ' ' + (y + 630) + ' l 0 20 M '+ (x + 420) + ' ' + (y + 580) + 'l 20 0 l 0 -180 l -100 0 l 0 -50  ').attr({  "stroke": "#818080",  "stroke-width": 10 , "stroke-linejoin": "round"  });
//	var dashline = paper.path('M'+ (x + 290) + ' ' + (y + 630) + ' l 0  100   M'+ (x + 290) + ' ' + (y + 690) + ' l 15 0 M' + (x +225) + ' ' + (y+700 ) + 'l 0 50 l 40 0 M' + (x +320) + ' ' + (y+753 ) + ' l 70 0 M'+ (x + 400) + ' ' + (y + 530) + ' l 0 -100 l -100 0 l 0 -50 l -170 0 M').attr({  "stroke": "#000",  "stroke-dasharray": "-"  , "stroke-width": 2 });
//	var dashline1 = paper.path(' M'+ (x + 100) + ' ' + (y + 350) + ' l 0 -40 M'+ (x +300) + ' ' + (y+200) + 'l   130 0 M').attr({  "stroke": "#000",  "stroke-dasharray": "-"  , "stroke-width": 2 });
	// line connect to sensor 
	var cont_line1 = paper.path('M' + (x +120) + ' ' + (y+290) + 'l  69 0 M'+ (x + 170) + ' ' + (y + 340) + ' l 30 0 M'+ (x +280) + ' ' + (y+220) + 'l   0 0 M'+ (x +150) + ' ' + (y+245) + 'l   90 0 M'+ (x +150) + ' ' + (y+150) + 'l   90 0 M').attr({  "stroke": "#000",  "stroke-width": 2 });
	
	// line boiler to tank carray steam
	var boiler_line = paper.path('M'+ (x +240) + ' ' + (y+270 ) + 'l 0 -120 l 100 0  M'+ (x +360) + ' ' + (y+150 ) + 'l 200 0 l 0 80 M'+ (x +560) + ' ' + (y+290 ) + 'l  0 40 M').attr({  "stroke": "#818080",  "stroke-width": 10,"stroke-linejoin": "round" });
	
	
	var cont_line = paper.path('M' + (x +385) + ' ' + (y+595 ) + 'l 0 -80 l -15 0 l 0 -10 M').attr({  "stroke": "#000",  "stroke-width": 1.5});
	
//	var hotwaterline = paper.path('M'+ (x + 340) + ' ' + (y + 700) + ' l 0 10 l 200 0 M ').attr({  "stroke": "#000",  "stroke-width": 5 }); // hot water line
	
	var waterline = paper.path('M'+ (x + 580) + ' ' + (y + 650) + ' l  200 0 l 0 -40 M ').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round" }); //second pump to tank
	
	var waterline = paper.path('M'+ (x + 530) + ' ' + (y + 618) + ' l  -50 0 l 0 -360 l 50 0 M ').attr({  "stroke": "#818080",  "stroke-width": 10 }); // second pump to heat exchanger
	
	var waterline = paper.path('M'+ (x + 590) + ' ' + (y + 260) + ' l  80 0 l 0 -160 l 100 0 l 0 50  M '+ (x + 770) + ' ' + (y + 310) + ' l  0 140 M').attr({  "stroke": "#818080",  "stroke-width": 10 ,"stroke-linejoin": "round"  }); // tank exchanger to tank 3 hot water line
	
//	var contLine = paper.path('M'+ (x + 580) + ' ' + (y + 618) + ' l 0 -20  M '+ (x + 410) + ' ' + (y + 300) + ' l 50 0 l 0 -85 M'+ (x + 505) + ' ' + (y + 510) + ' l -25 0  M').attr({  "stroke": "#000",  "stroke-width": 2 })
	
	var hotwaterline1 = paper.path('M'+ (x + 840) + ' ' + (y + 230) + ' l 50 0  l 0 480 l -550 0 l 0 -10 M ').attr({  "stroke": "#818080",  "stroke-width": 10,"stroke-linejoin": "round"  }); 
	
	var lineex = paper.path('M'+ (x + 530) + ' ' + (y + 260) + ' l 10 0 l 10 -15 l 20 30 l 10 -20 l 10 0 M ').attr({  "stroke": "#a61226",  "stroke-width": 2 })
	
	var l1 = paper.path('M'+ (x + 80) + ' ' + (y + 385) + ' l 140 0 l 0 50  M ').attr({  "stroke": "#818080",  "stroke-width": 8,"stroke-linejoin": "round"  }); 
	var l2 = paper.path('M'+ (x + 660) + ' ' + (y + 440) + ' l 100 0 l 0 50  M ').attr({  "stroke": "#818080",  "stroke-width": 7,"stroke-linejoin": "round"  }); 
	var l3 = paper.path('M'+ (x + 610) + ' ' + (y + 490) + ' l  0 220  M ').attr({  "stroke": "#818080",  "stroke-width": 10,"stroke-linejoin": "round"  }); //condesed tank to hot water line
	var valve3 = paper.image("images/svValve2.png", x+120, y+350, 50, 50);
	var valve4 = paper.image("images/svValve2.png", x+680, y+405, 50, 50);
	paper.image("images/tankInit1.png", (x + 70), (y + 350), 60, 70);
	paper.image("images/tankInit1.png", (x + 640), (y + 410), 60, 70);
	var valve1 = paper.image("images/redValve.png", x+270, y+595, 50, 50);
	
	
	var phaseBox = 	paper.rect(x + 810, y + 70, 320, 80, 4).attr({
    'fill': '#fff', // Initial white fill
    'stroke': '#333', // Dark gray border
    'stroke-width': 3,
	});
	
	var phaseBox = 	paper.rect(x-20 , y + 10, 100, 220, 4).attr({
    'fill': '#fff', // Initial white fill
    'stroke': '#333', // Dark gray border
    'stroke-width': 3,
	});

	
	
	var startP1 = paper.image("images/green.png", x, y+10, 50, 50);
	var startP2 = paper.image("images/green.png", x, y+80, 50, 50);
	var startP3 = paper.image("images/green.png", x, y+150, 50, 50);
	
	var endP1 = paper.image("images/red.png", x, y+10, 50, 50);
	var endP2 = paper.image("images/red.png", x, y+80, 50, 50);
	var endP3 = paper.image("images/red.png", x, y+150, 50, 50);
	
	var wimg = paper.image("images/red.png", x+820, y+95, 50, 50);
	var eimg = paper.image("images/red.png", x+885, y+95, 50, 50);
	var aimg = paper.image("images/red.png", x+950, y+95, 50, 50);
	var simg = paper.image("images/red.png", x+1020, y+95, 50, 50);


	
    

    
        var heatExchanger = paper.circle(x+560, y+260, 30).attr({
    "fill": "", // Gradient fill
    "stroke-width": 3,
    "stroke":"#000" });
    
    
    var valveVerical =   paper.image("images/redValve.png", x+735, y+350, 50, 50).attr({ 'transform': 'r' + 270 });
    
	tank(x+200, y+400);
	tank(x+540, y+330);
	tank(x+750, y+150);
	tank(x+750, y+450);

	
	
	// function to draw tank
	function tank(x, y) {
		paper.path('M' + (x ) + ' ' + (y ) + 'l 50 0 l 0 30 l 40 30 l 0 100 l -130 0 l 0 -100 l 40 -30 z').attr({ 'stroke': 'black', 'stroke-width': '3' });
	}

		
		
		var motor1 = paper.circle(x + 405, y + 620, 15).attr({ 'stroke': '50-#fff-#000', 'stroke-width': '1', 'fill': '50-#a61226-#ed0c13' }).toFront();;
		var motor2 = paper.circle(x + 545, y + 650, 15).attr({ 'stroke': '50-#fff-#000', 'stroke-width': '1', 'fill': '50-#a61226-#ed0c13' }).toFront();;
	
	// Start Up SettimeOut	
	setTimeout(function() {
			startP1.toFront();
			wimg.remove();
			eimg.remove();
			aimg.remove();
			simg.remove();
			 
		 wimg = paper.image("images/green.png", x+820, y+95, 50, 50);
		 eimg = paper.image("images/green.png", x+885, y+95, 50, 50);
		 aimg =  paper.image("images/green.png", x+950, y+95, 50, 50);
		 simg = paper.image("images/green.png", x+1020, y+95, 50, 50);
		waterfill(x,y);
		  valve3 = paper.image("images/svValve2G.png", x+120, y+350, 50, 50);
		 valve4 = paper.image("images/svValve2G.png", x+680, y+405, 50, 50);
		 	
		
		
		Lt.toFront();
	
	}, 200);
	
	var scrct =  paper.rect(x + 420, y + 270, 40, 80).attr({ 'stroke-width': '2' ,'fill':'#fff'});
//	var scaleCV =  paper.rect(x + 450, y + 80, 10, 60).attr({ 'stroke-width': '2' ,'fill':'#fff'});
	var fc = paper.path('M' + (x + 455) + ' ' + (y + 140) + 'l 0 0  ').attr({ 'stroke': 'green', 'stroke-width': '10' });
//	levelc = fc.animate({
//			path: "M" + (x+455 ) + " " + (y +140) + "  l 0  " + (-6) + "", 'stroke-width': '10', 'stroke': 'green', 'opacity': 0.5
//	}, time);
	
	
	// Create the box (outer rectangle)
var box = paper.rect(x + 220, y + 273, 129, 74, 4).attr({
    'fill': '#fff', // White background
    'stroke': '#333', // Dark gray border
    'stroke-width': 3,
});

// Create the water (inner rectangle for the animation)
// Start with height 0, positioned at the bottom of the box
var water = paper.rect(x + 220, y + 273 + 74, 129, 0, 4).attr({
    'fill': '#ff0000', // Red color for water
    'stroke': 'none', // No border for the water
});

// Animate the water to fill from bottom to top
water.animate(
    {
        y: y + 273,        // Adjust y to the top of the box
        height: 74,        // Animate height to fill the entire box
    },
    2000, // Duration in milliseconds
//    'ease-in-out' // Easing function for smooth animation
);

	var box =  paper.rect(x+220, y+273 , 129, 74 ,4).attr({  'fill': '#fff', // Black background
    'stroke': '#333', // Dark gray border
    'stroke-width': 3});
    
    
    // Create the box
var box = paper.rect(x + 220, y + 273, 129, 74, 4).attr({
    'fill': '#fff', // Initial white fill
    'stroke': '#333', // Dark gray border
    'stroke-width': 3,
});



// Create the box (outer rectangle)
var box = paper.rect(x + 220, y + 273, 129, 74, 4).attr({
    'fill': '#fff', // White background
    'stroke': '#333', // Dark gray border
    'stroke-width': 3,
});




// Function to generate random bubbles
function createBubble() {
    // Generate random x position within the box
    var bubbleX = Math.random() * 129 + x + 220;
    var bubbleY = y + 273 + 74; // Start at the bottom of the box

    // Create a small circle for the bubble
    var bubble = paper.circle(bubbleX, bubbleY, 2).attr({
        fill: '#fff', // White bubble
        stroke: 'none',
    });

    // Animate the bubble rising
    bubble.animate(
        { cy: y + 273, opacity: 0 }, // Move upward and fade out
        1500,
        'ease-out',
        function () {
            bubble.remove(); // Remove the bubble after animation
        }
    );
}



    
   


var txtColor = "#F0BB78";
function rectTextBoxes(x,y){
		paper.rect((x+130),(y+85),50,20,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":3});
	 } 
	 
	 function rectTextBoxes1(x,y){
		paper.rect((x+130),(y+88),50,20,7).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":3});
	 } 
	 
	 function rectTextBoxes2(x,y){
		paper.rect((x+130),(y+88),30,20,5).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":3});
	 }
	
	var ptRect = rectTextBoxes1(x+100,y-20); 
	var tt1Rect= rectTextBoxes(x+150,y+150);
	var scrRect = rectTextBoxes(x+240,y+270); 
	var tt2Rect = rectTextBoxes(x+350,y+80);
	var tt3Rect = rectTextBoxes(x+460,y+115);
	var ltRect = rectTextBoxes(x-95,y+165); 
	var f2Rect = rectTextBoxes(x+170,y+90);	
	var f1Rect = rectTextBoxes(x+200,y+400); 
	var msv2Rect = rectTextBoxes(x+145,y+605); 
	var msv1Rect = rectTextBoxes1(x+80,y+560);
	var tt5Rect = rectTextBoxes(x+330,y+640);
	var tt6Rect = rectTextBoxes(x+180,y+488);	
	var f3Rect = rectTextBoxes(x+360,y+460);	
	var tt4Rect = rectTextBoxes(x+382,y+410);
	var fcvRect = rectTextBoxes(x+290,y-40);	
	
	var feedpumpRect = rectTextBoxes2(x+260,y+460); 
	var feedpump2Rect = rectTextBoxes2(x+400,y+493); 
	
	var ptVal = paper.text((x+255), (y+79), "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var TT1 = paper.text(x + 305, y + 245, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var FT2 = paper.text(x + 325, y + 185, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var lt1 = paper.text(x + 58, y + 260, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});	
	var TT2 = paper.text(x + 505, y + 175, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"}); 
	var TT3 = paper.text(x + 615, y + 210, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"}); 
	var TT4 = paper.text(x + 535, y + 505, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"}); 
	var F3 = paper.text(x + 515, y + 555, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var F1 = paper.text(x + 355, y + 495, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var TT6 = paper.text(x + 335, y + 583, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var TT5 = paper.text(x + 485, y + 735, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var MSV2 = paper.text(x + 300, y + 700, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var MSV1 = paper.text(x + 235, y + 658, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var scr = paper.text(x + 395, y + 365, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var fcv = paper.text(x + 445, y + 55, "00.00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var Fi = paper.text(x + 545, y + 590, "00").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	var fi1 = paper.text(x + 405, y + 558, "0").attr({"font-size":15,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	
	Lables(x, y);
	function Lables(x, y) {
		
		
		paper.text(x + 440, y + 290, "S").attr({ 'fond-weight': 'bold', 'font-size': 20 });
		paper.text(x + 440, y + 310, "C").attr({ 'fond-weight': 'bold', 'font-size': 20 });
		paper.text(x + 440, y + 330, "R").attr({ 'fond-weight': 'bold', 'font-size': 20 });
		paper.text(x + 100, y + 290, "LT");
		paper.text(x + 120, y + 340, "LSL");
		paper.text(x + 120, y + 220, "PSH");
		paper.text(x + 120, y + 140, "TSH");
		paper.text(x + 250, y + 100, "PT");

		
		var tt1 = paper.text(x + 260, y + 230, "TT1");
		 paper.text(x + 340, y + 245, "\u00B0C").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#eb4034' });
		 paper.text(x +540, y + 175, "\u00B0C").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#eb4034' });
		 paper.text(x + 650, y + 210, "\u00B0C").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#eb4034' });
		 paper.text(x + 575, y + 505, "\u00B0C").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#eb4034' });
		 paper.text(x + 555, y + 555, "lph").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		  paper.text(x + 570, y + 590, "%").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		 paper.text(x + 370, y + 580, "\u00B0C").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#eb4034' });
		 paper.text(x + 520, y + 735, "\u00B0C").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#eb4034' });
		 paper.text(x + 395, y + 495, "lph").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		 paper.text(x + 428, y + 557, "%").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		 paper.text(x + 100, y + 260, "mm").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		 paper.text(x + 490, y+50 , "mm").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		 paper.text(x + 375, y + 185, "Kg/Hr").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		 paper.text(x + 300, y + 80, "Bar").attr({ 'fond-weight': 'bold', 'font-size': 15,'fill':'#2f73a3' });
		var tt2 = paper.text(x + 510, y + 110, "TT2");
		var tt3 = paper.text(x + 635, y + 245, "TT3");
		var tt4 = paper.text(x + 500, y + 520, "TT4");
		var tt5 = paper.text(x + 440, y + 730, "TT5");
		var tt6 = paper.text(x + 350, y + 618, "TT6");
		var msv1 = paper.text(x + 280, y + 585, "MSV1");
		var msv2 = paper.text(x + 365, y + 690, "MSV2");
		var sv1 = paper.text(x + 740, y + 400, "SOV");
		var pump1 = paper.text(x + 405, y + 665, "Feed pump").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var pump1 = paper.text(x + 355, y + 515, "(F1)").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var pump1 = paper.text(x + 350, y + 100, "(F2)").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var pump2 = paper.text(x + 540, y + 700, "Recirculation pump ").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var pump2 = paper.text(x + 490, y + 640, "(F3)").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var pump2 = paper.text(x + 420, y + 170, "FCV").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var txt = paper.text(x + 150, y + 575, "Boiler Feed Water Tank").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var txt = paper.text(x + 220, y + 360, "Boiler").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var txt = paper.text(x +630, y + 280, "Heat Exchanger").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var txt = paper.text(x +640, y + 350, "Condensate Tank").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var txt = paper.text(x +820, y + 330, "Hot Water Tank").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var txt = paper.text(x +830, y + 630, "Cold Water Tank").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var txt = paper.text(x+30 , y + 70, "START UP").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		var txt = paper.text(x +30, y + 140, "RUNNING").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		var txt = paper.text(x +31, y + 210, "SHUT DOWN").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		var txt = paper.text(x +850, y + 85, "Electricity").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		var txt = paper.text(x +910, y + 85, "Air").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		var txt = paper.text(x +975, y + 85, "Water").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		paper.text(x + 1070, y + 85, "Steam demand").attr({ 'fond-weight': 'bold', 'font-size': 15 });
		
		var pump2 = paper.text(x + 590, y + 680, "(P2)").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var pump2 = paper.text(x + 580, y + 610, "(PY2)").attr({ 'fond-weight': 'bold', 'font-size': 12 });                                         
		  var pump1 = paper.text(x + 410, y + 680, "(P1)").attr({ 'fond-weight': 'bold', 'font-size': 12 });
		var pump1 = paper.text(x + 410, y + 530, "(PY1)").attr({ 'fond-weight': 'bold', 'font-size': 12 });
	}
	
	



	
	var delay = 1;
	function tank_fill(x, y) {
		var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': '#34deeb', 'stroke-width': '130' });
		level = b.animate({
			path: "M" + (x ) + " " + (y ) + "  l 0  " + (ht) + "", 'stroke-width': '130', 'stroke': '#34deeb', 'opacity': 0.5
		}, time*delay)
	};
	
	
	function tank_empty(x, y) {
		var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '130' });
		level = b.animate({
			path: "M" + (x ) + " " + (y ) + "  l 0  " + (ht1) + "", 'stroke-width': '130', 'stroke': '#fff', opacity: 1
		}, time*delay)
	};
	
	

	function waterfill(x,y){
		
	
	 
		
	
		
		w = [];
		w1 = [];
		w[0] = paper.path('M'  + (x +80) + ' ' + (y+385 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		w[0].animate({path : 'M'  + (x +80) + ' ' + (y+385 ) + 'l 140 0 '}, (time/2),function(){
		w[1] = paper.path('M'  + (x +220) + ' ' + (y+385 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		w[1].animate({path : 'M'  + (x +220) + ' ' + (y+385 ) + 'l  0 50'}, (time/2),function(){
			
			tank_fill(x+225, y+560);
			setTimeout(function() {
				
				l1 = paper.path('M'+ (x + 80) + ' ' + (y + 385) + ' l 140 0 l 0 50  M ').attr({  "stroke": "#818080",  "stroke-width": 8,"stroke-linejoin": "round"  }); 
			 valve3 = paper.image("images/svValve2.png", x+120, y+350, 50, 50);
			}, time*1.1);
			
			})
			
		})
		
		w1 = [];
		
		w1[0] = paper.path('M'  + (x +660) + ' ' + (y+440 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		w1[0].animate({path : 'M'  + (x +660) + ' ' + (y+440 ) + 'l 100 0 '}, (time/2),function(){
		w1[1] = paper.path('M'  + (x +760) + ' ' + (y+440 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		w1[1].animate({path : 'M'  + (x +760) + ' ' + (y+440 ) + 'l  0 50'}, (time/2),function(){
			
			tank_fill(x+775, y+610);
			
			 
			 setTimeout(function() {
				
			l2 = paper.path('M'+ (x + 660) + ' ' + (y + 440) + ' l 100 0 l 0 50  M ').attr({  "stroke": "#818080",  "stroke-width": 7,"stroke-linejoin": "round"  });  
			 valve4 = paper.image("images/svValve2.png", x+680, y+405, 50, 50);
			 $("#startBtn").prop('disabled',false); 
//			 $("#datasheet,#graph,#reset").prop('disabled',true); 
			},time+1.1)
		})
			
		})
		
		
		
		
		
	}
	

	
	function water_supply_part1(x,y){
		r = [];
		  r[0] = paper.path('M'  + (x +225) + ' ' + (y+560 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		  r[0].animate({path : 'M'  + (x +225) + ' ' + (y+560 ) + 'l 0 71 '}, (time/2),function(){
		 r[1] = paper.path('M'  + (x +225) + ' ' + (y+630 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		  r[1].animate({path : 'M'  + (x +225) + ' ' + (y+630 ) + 'l 50 0'}, (time/5),function(){
		r[2] = paper.path('M'  + (x +322) + ' ' + (y+630 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		  r[2].animate({path : 'M'  + (x +322) + ' ' + (y+630 ) + 'l 50 0'}, (time),function(){
			   paper.path('M'  + (x +340) + ' ' + (y+630 ) + 'l 0 20 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" });
			r[3] = paper.path('M'  + (x +420) + ' ' + (y+580 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		  r[3].animate({path : 'M'  + (x +420) + ' ' + (y+580 ) + 'l 22 0'}, (time) ,function(){
			r[4] = paper.path('M'  + (x +440) + ' ' + (y+580 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		  r[4].animate({path : 'M'  + (x +440) + ' ' + (y+580 ) + 'l 0 -181'}, (time/2) ,function(){
			  
			 r[5] = paper.path('M'  + (x +440) + ' ' + (y+400 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		  r[5].animate({path : 'M'  + (x +440) + ' ' + (y+400 ) + 'l -102 0'}, (time/5),function(){
			  
			   r[6] = paper.path('M'  + (x +340) + ' ' + (y+400 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" })
		  r[6].animate({path : 'M'  + (x +340) + ' ' + (y+400 ) + 'l 0  -50'}, (time/2),function(){
			  
	
			  
//			  fillWithTransition(rect, 0);
//			  setTimeout(function() {	 }, time*4);
//			  setTimeout(function() {	steam_supply(x,y); }, time*10 );
			  
		  })
			  
		  })}); }) })   });  });
	}
	

	function steam_supply(x,y){
		s = [];
		
//		paper.path('M'+ (x +240) + ' ' + (y+270 ) + 'l 0 -120 l 100 0  M'+ (x +360) + ' ' + (y+150 ) + 'l 200 0 l 0 80 M'+ (x +560) + ' ' + (y+290 ) + 'l  0 40 M');
		 s[0] = paper.path('M'  + (x +240) + ' ' + (y+270 ) + 'l 0 0 ').attr({'stroke':'#b5ae9a','stroke-width':'6'})
		 s[0].animate({path : 'M'  + (x +240) + ' ' + (y+270 ) + 'l 0 -123 '}, (time),function(){
		 s[1] = paper.path('M'  + (x +240) + ' ' + (y+150 ) + 'l 0 0 ').attr({'stroke':'#b5ae9a','stroke-width':'6'})
		 s[1].animate({path : 'M'  + (x +240) + ' ' + (y+150) + 'l 100 0 '}, (time),function(){
		 s[2] = paper.path('M'  + (x +360) + ' ' + (y+150 ) + 'l 0 0 ').attr({'stroke':'#b5ae9a','stroke-width':'6'})
//		 circulating_water(x,y);
			controlValve.toFront();
		 s[2].animate({path : 'M'  + (x +360) + ' ' + (y+150) + 'l 203 0 '}, (time),function(){
		 s[3] = paper.path('M'  + (x +560) + ' ' + (y+150 ) + 'l 0 0 ').attr({'stroke':'#b5ae9a','stroke-width':'6'})
		 s[3].animate({path : 'M'  + (x +560) + ' ' + (y+150) + 'l  0 80 '}, (time/2),function(){
		s[4] = paper.path('M'  + (x +560) + ' ' + (y+290 ) + 'l 0 0 ').attr({'stroke':'#b5ae9a','stroke-width':'6'})
		 s[4].animate({path : 'M'  + (x +560) + ' ' + (y+290) + 'l  0 40 '}, (time+1000))
		 })
		 })	 
				 
		 })	 
			 
		 })	
	}
	
		function steam_supply_empty(x,y){
		s1 = [];
		
//		paper.path('M'+ (x +240) + ' ' + (y+270 ) + 'l 0 -120 l 100 0  M'+ (x +360) + ' ' + (y+150 ) + 'l 200 0 l 0 80 M'+ (x +560) + ' ' + (y+290 ) + 'l  0 40 M');
		 s1[0] = paper.path('M'  + (x +240) + ' ' + (y+270 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6'})
		 s1[0].animate({path : 'M'  + (x +240) + ' ' + (y+270 ) + 'l 0 -123 '}, (100),function(){
		 s1[1] = paper.path('M'  + (x +240) + ' ' + (y+150 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6'})
		 s1[1].animate({path : 'M'  + (x +240) + ' ' + (y+150) + 'l 100 0 '}, (10),function(){
		 s1[2] = paper.path('M'  + (x +360) + ' ' + (y+150 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6'})
//		 circulating_water(x,y);
		 s1[2].animate({path : 'M'  + (x +360) + ' ' + (y+150) + 'l 203 0 '}, (10),function(){
		 s1[3] = paper.path('M'  + (x +560) + ' ' + (y+150 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6'})
		 s1[3].animate({path : 'M'  + (x +560) + ' ' + (y+150) + 'l  0 80 '}, (10),function(){
		s1[4] = paper.path('M'  + (x +560) + ' ' + (y+290 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6'})
		 s1[4].animate({path : 'M'  + (x +560) + ' ' + (y+290) + 'l  0 40 '}, (10))
		 })
		 })	 
				 
		 })	 
			 
		 })	
	}
	var f = paper.path('M' + (x+775) + ' ' + (y+310) + 'l 0 0').attr({ 'stroke': '#34deeb', 'stroke-width': '130' });
	var level;
	function circulating_water(x,y){
		
	
		
		 ht1 = 80; 
		tank_empty(x+775, y+510);
		var Lh = paper.image("images/lhindicator.png", x+695, y+515,  45, 20).attr({ 'transform': 'r' + 0 }).toFront();
		c = [];

		 c[0] = paper.path('M'  + (x +780) + ' ' + (y+610 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		 c[0].animate({path : 'M'  + (x +780) + ' ' + (y+610 ) + 'l 0 42 '}, (time/2),function(){
		 c[1] = paper.path('M'  + (x +780) + ' ' + (y+650 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		 c[1].animate({path : 'M'  + (x +780) + ' ' + (y+650 ) + 'l -200 0 '}, (time/2),function(){
		c[2] = paper.path('M'  + (x +780) + ' ' + (y+650 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		 c[2].animate({path : 'M'  + (x +780) + ' ' + (y+650 ) + 'l -202 0 '}, (time/2),function(){
		c[3] = paper.path('M'  + (x +530) + ' ' + (y+618) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		 magnetic2.toFront();
		 c[3].animate({path : 'M'  + (x +530) + ' ' + (y+618 ) + 'l -52 0 '}, (time/2),function(){
		 c[4] = paper.path('M'  + (x +480) + ' ' + (y+618 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		 c[4].animate({path : 'M'  + (x +480) + ' ' + (y+618 ) + 'l  0 -362 '}, (time/2),function(){
		c[5] = paper.path('M'  + (x +480) + ' ' + (y+258 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		 c[5].animate({path : 'M'  + (x +480) + ' ' + (y+258 ) + 'l  50 0 '}, (time),function(){
		c[6] = paper.path('M'  + (x +590) + ' ' + (y+260 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		 c[6].animate({path : 'M'  + (x +590) + ' ' + (y+260 ) + 'l  83 0 '}, (time/2),function(){
		c[5] = paper.path('M'  + (x +670) + ' ' + (y+260 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		 c[5].animate({path : 'M'  + (x +670) + ' ' + (y+260 ) + 'l  0 -162 '}, (time/2),function(){
		c[6] = paper.path('M'  + (x +670) + ' ' + (y+100 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		 c[6].animate({path : 'M'  + (x +670) + ' ' + (y+100 ) + 'l  102 0 '}, (time/2),function(){
		c[7] = paper.path('M'  + (x +770) + ' ' + (y+100 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		 c[7].animate({path : 'M'  + (x +770) + ' ' + (y+100 ) + 'l  0 50 '}, (time/2),function(){
			 ht = -40;
//			 tank_fill(x+775, y+310);
			 var f = paper.path('M' + (x+775) + ' ' + (y+310) + 'l 0 0').attr({ 'stroke': '#34deeb', 'stroke-width': '130' });
		level = f.animate({
			path: "M" + (x +775) + " " + (y+310 ) + "  l 0  " + (ht) + "", 'stroke-width': '130', 'stroke': '#34deeb', 'opacity': 0.5
		}, time*40)
			 
		 })
			
		 })
			 
		 })	 
		 })
			 
		 })	 
			 
		 })
		 })
		 
			 
		 })	 
		 })	 
			 
		 })
	}
	
	
//	c[6] = paper.path('M'  + (x +590) + ' ' + (y+260 ) + 'l 0 0 ').attr({'stroke':'#ff9999','stroke-width':'6',"stroke-linejoin": "round"})
//		 c[6].animate({path : 'M'  + (x +590) + ' ' + (y+260 ) + 'l  83 0 '}, (time/2),function(){
//		c[5] = paper.path('M'  + (x +670) + ' ' + (y+260 ) + 'l 0 0 ').attr({'stroke':'#ff9999','stroke-width':'6',"stroke-linejoin": "round"})
//		 c[5].animate({path : 'M'  + (x +670) + ' ' + (y+260 ) + 'l  0 -162 '}, (time/2),function(){
//		c[6] = paper.path('M'  + (x +670) + ' ' + (y+100 ) + 'l 0 0 ').attr({'stroke':'#ff9999','stroke-width':'6',"stroke-linejoin": "round"})
//		 c[6].animate({path : 'M'  + (x +670) + ' ' + (y+100 ) + 'l  102 0 '}, (time/2),function(){
//		c[7] = paper.path('M'  + (x +770) + ' ' + (y+100 ) + 'l 0 0 ').attr({'stroke':'#ff9999','stroke-width':'6',"stroke-linejoin": "round"})
//		 c[7].animate({path : 'M'  + (x +770) + ' ' + (y+100 ) + 'l  0 50 '}, (time/2),function(){
//			 ht = -80;
////			 tank_fill(x+775, y+310);
//			 var f = paper.path('M' + (x+775) + ' ' + (y+310) + 'l 0 0').attr({ 'stroke': '#ff9999', 'stroke-width': '130' });
//		level = f.animate({
//			path: "M" + (x +775) + " " + (y+310 ) + "  l 0  " + (ht) + "", 'stroke-width': '130', 'stroke': '#ff9999', 'opacity': 0.5
//		}, time*delay)

		
	function circulating_empty(x,y){
		
	
		
		
		c1 = [];

		 c1[0] = paper.path('M'  + (x +780) + ' ' + (y+610 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round"})
		 c1[0].animate({path : 'M'  + (x +780) + ' ' + (y+610 ) + 'l 0 42 '}, (time/2),function(){
		 c1[1] = paper.path('M'  + (x +780) + ' ' + (y+650 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round"})
		 c1[1].animate({path : 'M'  + (x +780) + ' ' + (y+650 ) + 'l -200 0 '}, (time/2),function(){
		c1[2] = paper.path('M'  + (x +780) + ' ' + (y+650 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round"})
		 c1[2].animate({path : 'M'  + (x +780) + ' ' + (y+650 ) + 'l -202 0 '}, (time/2),function(){
		c1[3] = paper.path('M'  + (x +530) + ' ' + (y+618) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round"})
		 magnetic2.toFront();
		 c1[3].animate({path : 'M'  + (x +530) + ' ' + (y+618 ) + 'l -52 0 '}, (time/2),function(){
		 c1[4] = paper.path('M'  + (x +480) + ' ' + (y+618 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round"})
		 c1[4].animate({path : 'M'  + (x +480) + ' ' + (y+618 ) + 'l  0 -362 '}, (time/2),function(){
		c1[5] = paper.path('M'  + (x +480) + ' ' + (y+258 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round"})
		 c1[5].animate({path : 'M'  + (x +480) + ' ' + (y+258 ) + 'l  50 0 '}, (time),function(){
		c1[6] = paper.path('M'  + (x +590) + ' ' + (y+260 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round"})
		 c1[6].animate({path : 'M'  + (x +590) + ' ' + (y+260 ) + 'l  83 0 '}, (time/2),function(){
		c1[5] = paper.path('M'  + (x +670) + ' ' + (y+260 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round"})
		 c1[5].animate({path : 'M'  + (x +670) + ' ' + (y+260 ) + 'l  0 -162 '}, (time/2),function(){
		c1[6] = paper.path('M'  + (x +670) + ' ' + (y+100 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round"})
		 c1[6].animate({path : 'M'  + (x +670) + ' ' + (y+100 ) + 'l  102 0 '}, (time/2),function(){
		c1[7] = paper.path('M'  + (x +770) + ' ' + (y+100 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round"})
		 c1[7].animate({path : 'M'  + (x +770) + ' ' + (y+100 ) + 'l  0 50 '}, (time/2))
			
		 })
			 
		 })	 
		 })
			 
		 })	 
			 
		 })
		 })
		 
			 
		 })	 
		 })	 
			 
		 })
	}	
	

	function hotwater(x,y){
		
		h = [];
		 h[0] = paper.path('M'  + (x +610) + ' ' + (y+490 ) + 'l 0 0 ').attr({'stroke':'#e69455','stroke-width':'6',"stroke-linejoin": "round"})
		 h[0].animate({path : 'M'  + (x +610) + ' ' + (y+490 ) + 'l 0 223 '}, (time/2),function(){
		 h[1] = paper.path('M'  + (x +610) + ' ' + (y+710 ) + 'l 0 0 ').attr({'stroke':'#e69455','stroke-width':'6',"stroke-linejoin": "round"})
		 h[1].animate({path : 'M'  + (x +610) + ' ' + (y+710 ) + 'l -270 0 '}, (time/2),function(){
		 h[2] = paper.path('M'  + (x +340) + ' ' + (y+710 ) + 'l 0 0 ').attr({'stroke':'#e69455','stroke-width':'6',"stroke-linejoin": "round"})
		  h[2].animate({path : 'M'  + (x +340) + ' ' + (y+710 ) + 'l 0 -10 '}, (time/2))
		 
			 
		 })	 
			 
		 })
	}
	
	
	function hot(x,y){
		g = [];
		 g[0] = paper.path('M'  + (x +340) + ' ' + (y+710 ) + 'l 0 0 ').attr({'stroke':'#e69455','stroke-width':'6',"stroke-linejoin": "round"})
		 g[0].animate({path : 'M'  + (x +340) + ' ' + (y+710 ) + 'l 0 -83 '}, (time/2),function(){
		g[1] = paper.path('M'  + (x +340) + ' ' + (y+630 ) + 'l 0 0 ').attr({'stroke':'#e69455','stroke-width':'6',"stroke-linejoin": "round"})
		 g[1].animate({path : 'M'  + (x +340) + ' ' + (y+630 ) + 'l 38 0 '}, (time/2)	,function(){
		g[2] = paper.path('M'  + (x +340) + ' ' + (y+630 ) + 'l 0 0 ').attr({'stroke':'#e69455','stroke-width':'6',"stroke-linejoin": "round"})
		 g[2].animate({path : 'M'  + (x +340) + ' ' + (y+630 ) + 'l -20 0 '}, (time/2))	 
			 
		 }) 
			 
		 })	
	
		
	}
	
	 
	
	sensorGreen(x-10,y+280);
	sensorGreen(x-10,y+180);
	sensorGreen(x-10,y+100);
	function sensorGreen(x,y){
		var lslRect  = paper.rect((x+147),(y+24),32 ,42).attr({"fill":"10-#5c6160-#000"});
		var lslSmallRect = paper.rect((x+151),(y+66),24 ,8).attr({"fill":"10-#5c6160-#000"});
//			
		var lslGreenRectBig = paper.rect((x+152),(y+30),22 ,10).attr({"fill":"#66de66"}); 
		var lslGreenRectSmall = paper.rect((x+152),(y+45),22 ,6).attr({"fill":"#66de66"}); 
	}
	
	
//	 sensorRed(x-30,y+230)
	
	function sensorRed(x,y){
		var lslRect  = paper.rect((x+147),(y+24),32 ,42).attr({"fill":"10-#5c6160-#000"});
		var lslSmallRect = paper.rect((x+151),(y+66),24 ,8).attr({"fill":"10-#5c6160-#000"});
		
		var lslGreenRectBig = paper.rect((x+152),(y+30),22 ,10).attr({"fill":"#f54242"}); 
		var lslGreenRectSmall = paper.rect((x+152),(y+45),22 ,6).attr({"fill":"#f54242"}); 
	}
	
	
	Lt.toFront();
	magnetic2.toFront();
	controlValve.toFront();
	
	
	

	
//	water.animate({ fill: '70-#ffcccc-#ff0000' }, 2000); // Gradual blue gradient fill
water.animate(
    {
        y: y + 273,        // Adjust y to the top of the box
        height: 54,        // Animate height to fill the entire box
    },
    2000, // Duration in milliseconds
    'ease-in-out' // Easing function for smooth animation
);

	
		  var ht1 = 0;
	$("#startBtn").click(function() {
		
		 startCount++;
		  $("#modelDialog1").addClass("modal-lg");
		  $("#modelTitle1").html("Check the Components");
		  var modelBody1=''
			  +'<b style="color:darkblue;">Before starting the plant check whether<br>- All valves are closed <br>' 
			  +'- All pumps are switched off<br>- The instrument air, electricity,water ,steam demand and other required utilities are available <br>'
			 +' - The production schedule mandates to produce  <br>'
			 $("#modelBody1").html(modelBody1);
		
		 
		  
		  


});

 function blink() {
        motor1.animate({ opacity: 0.2 }, 500, function () {
         motor1.animate({ opacity: 1 }, 500, blink);
        });
    }


  
//	water stop to boiler

function waterStop(){
	 s = [];
	 
	     s[0] = paper.path('M'  + (x +420) + ' ' + (y+580 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
		  r[3].animate({path : 'M'  + (x +420) + ' ' + (y+580 ) + 'l 22 0'}, (time) ,function(){
			r[4] = paper.path('M'  + (x +440) + ' ' + (y+580 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
		  r[4].animate({path : 'M'  + (x +440) + ' ' + (y+580 ) + 'l 0 -181'}, (time/2) ,function(){
			  
			 r[5] = paper.path('M'  + (x +440) + ' ' + (y+400 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
		  r[5].animate({path : 'M'  + (x +440) + ' ' + (y+400 ) + 'l -102 0'}, (time/5),function(){
			  
			   r[6] = paper.path('M'  + (x +340) + ' ' + (y+400 ) + 'l 0 0 ').attr({'stroke':'#fff','stroke-width':'6',"stroke-linejoin": "round" })
		  r[6].animate({path : 'M'  + (x +340) + ' ' + (y+400 ) + 'l 0  -50'}, (time/2))
		  
		})   });  });
		  
}  

		
$("#myModal1").on("hidden.bs.modal", function () {		
		
		startP1.toBack();
		startP2.toFront();
		
		
		  ht1 = 50;
		  delay = 150; 
		tank_empty(x+225, y+460);
		water_supply_part1(x,y);
		
		

	
	for (let i = 0; i < arrayJson.TT1.length; i++) {
   
    setTimeout(() => {
			TT1.remove();
			FT2.remove();
			lt1.remove();
			ptVal.remove();
			fcv.remove();
			scr.remove();
			F3.remove();
			TT2.remove();
			TT3.remove();
			TT4.remove();
			TT5.remove();
			TT6.remove();
			F1.remove();
			MSV1.remove();
			MSV2.remove();
			Fi.remove();
			fi1.remove();
			
	 ptVal = paper.text((x+255), (y+79), arrayJson.PT[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 TT1 = paper.text(x + 305, y + 245, arrayJson.TT1[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 FT2 = paper.text(x + 325, y + 185, arrayJson.FT2[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 lt1 = paper.text(x + 58, y + 260, arrayJson.LT[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});	
	 TT2 = paper.text(x + 505, y + 175, arrayJson.TT2[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"}); 
	 TT3 = paper.text(x + 615, y + 210, arrayJson.TT3[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"}); 
	 TT4 = paper.text(x + 535, y + 505, arrayJson.TT4[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"}); 
	 F3 = paper.text(x + 515, y + 555, arrayJson.FT3[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 F1 = paper.text(x + 355, y + 495, arrayJson.FT1[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 TT6 = paper.text(x + 335, y + 583, arrayJson.TT6[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 TT5 = paper.text(x + 485, y + 735, arrayJson.TT5[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 MSV2 = paper.text(x + 300, y + 700, arrayJson.MSV2[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 MSV1 = paper.text(x + 235, y + 658, arrayJson.MSV1[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 scr = paper.text(x + 395, y + 365, arrayJson.scr[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 fcv = paper.text(x + 445, y + 55,arrayJson.FCR[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 Fi = paper.text(x + 545, y + 590,arrayJson.FI2[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 fi1 = paper.text(x + 405, y + 558, arrayJson.FI[i]).attr({"font-size":15,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
	 
	 $("#tt1").html(arrayJson.TT1[i]);
	 $("#tt2").html(arrayJson.TT2[i]);
	 $("#tt3").html(arrayJson.TT3[i]);
	 $("#tt4").html(arrayJson.TT4[i]);
	 $("#tt5").html(arrayJson.TT5[i]);
	 $("#tt6").html(arrayJson.TT6[i]);
	 $("#msv1").html(arrayJson.MSV1[i]);
	$("#msv2").html(arrayJson.MSV2[i]);
	$("#scr").html(arrayJson.scr[i]);
	$("#fcv").html(arrayJson.FCR[i]);
	$("#lt").html(arrayJson.LT[i]);
	$("#pt").html(arrayJson.PT[i]);
	$("#ft1").html(arrayJson.FT1[i]);
	$("#ft2").html(arrayJson.FT2[i]);
	$("#ft3").html(arrayJson.FT3[i]);
	$("#fi").html(arrayJson.FI[i]);
	$("#fi2").html(arrayJson.FI2[i]);
			 

			
//			TT1 = paper.text(x + 310, y + 250, arrayJson.TT1[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			FT2 = paper.text(x + 330, y + 190, arrayJson.FT2[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			lt1 = paper.text(x + 50, y + 260, arrayJson.LT[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			ptVal = paper.text((x+210), (y+99), arrayJson.PT[i] ).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			fcv = paper.text(x + 450, y + 60, arrayJson.FCR[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			F3 = paper.text(x + 520, y + 558, arrayJson.FT3[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			scr = paper.text(x + 400, y + 370,arrayJson.scr[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			 TT2 = paper.text(x + 480, y + 190, arrayJson.TT2[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			 TT3 = paper.text(x + 600, y + 180, arrayJson.TT3[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			 TT4 = paper.text(x + 540, y + 520, arrayJson.TT4[i] ).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			TT5 =  paper.text(x + 360, y + 740, arrayJson.TT5[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			TT6 = paper.text(x + 320, y + 580, arrayJson.TT6[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			 F1 = paper.text(x + 360, y + 500,arrayJson.FT1[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			 MSV1 = paper.text(x + 240, y + 670, arrayJson.MSV1[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			 MSV2 = paper.text(x + 420, y + 680, arrayJson.MSV2[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":'#0af25f',"font-weight":"bold"});
//			 Fi = paper.text(x + 550, y + 595, arrayJson.FI2[i] ).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
//	    	  fi1 = paper.text(x + 400, y + 560,  arrayJson.FI[i]).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
	    	
	    	
	    	
//	    	if(arrayJson.fcv[i]>0){
//				 var per = arrayJson.fcv[i];
//	    		var  c1 =  (per *60)/100;
//				  var c = c1*-1;
//	    	 levelc = fc.animate({
//			path: "M" + (x+455 ) + " " + (y +140) + "  l 0  "+ c + "", 'stroke-width': '10', 'stroke': 'green', 'opacity': 0.5
//	   		 }, time); 
//			}else{
//				 fc = paper.path('M' + (x + 455) + ' ' + (y + 140) + 'l 0 0  ').attr({ 'stroke': 'green', 'stroke-width': '10' });	
//			}
	    	
	    	  
	    if(i == 2){
		
		   boil = paper.path('M' + (x + 285) + ' ' + (y + 347) + 'l 0 0  ').attr({ 'stroke': '#34deeb', 'stroke-width': '127' });
			level = boil.animate({
				path: "M" + (x+285 ) + " " + (y +347) + "  l 0  " + (-60) + "", 'stroke-width': '127', 'stroke': '#34deeb', 'opacity': 0.5
			}, time*30);
		
		}
		
		if(i == 20 ){
			 boil1 = paper.path('M' + (x + 285) + ' ' + (y + 347) + 'l 0 0  ').attr({ 'stroke': '#ff0000', 'stroke-width': '127' });
			level = boil1.animate({
				path: "M" + (x+285 ) + " " + (y +347) + "  l 0  " + (-60) + "", 'stroke-width': '127', 'stroke': '#ff0000', 'opacity': 0.5
			}, time);
			
			
		}
		
			if(i == 97 ){
			var  boil3 = paper.path('M' + (x + 285) + ' ' + (y + 287) + 'l 0 0  ').attr({ 'stroke': '#fff', 'stroke-width': '127' });
			level1 = boil3.animate({
				path: "M" + (x+285 ) + " " + (y +287) + "  l 0  " + (60) + "", 'stroke-width': '127', 'stroke': '#fff', 'opacity': 1
			}, time);
			
			
		}
		
		
		
		
	
	if(arrayJson.scr[i] >= 10){
		scrct.attr('fill','green');
	}
	else{
		scrct.attr('fill','red');
	}
	
	if(i > 28 && i < 77){
		

				// Calculate 60% of the height of the rectangle
		var waterHeight = 74 * 0.8; // 60% of 74

// Create the water (inner rectangle for the water level)
	var water = paper.rect(x + 220, y + 273 + (74 - waterHeight), 129, waterHeight, 4).attr({
    'fill': '70-#ffcccc-#ff0000', // Red color for water
    'stroke': 'none', // No border for the water
	})
	
	// Animate the box to fill with water
//	water.animate({ fill: '70-#ffcccc-#ff0000' }, 2000); // Gradual blue gradient fill
	

	// Create bubbles at intervals
		var bubbleInterval = setInterval(createBubble, 200);

// Stop bubble creation after a certain time (e.g., 10 seconds)
		setTimeout(function () {
   		 clearInterval(bubbleInterval);
		}, 7000);
		
	}
	
	if(arrayJson.FI2[i] >= 10){
		motor2.attr("fill","Green");
	
	}else{
		motor2.attr("fill","Red");
		
	}
	
	if(arrayJson.FI[i] >= 10){
		
		motor1.attr("fill","Green");
	
	}else{
		motor1.attr("fill","Red");
		 waterStop();
		 blink();
	}
	
	if(i == 39){
			circulating_water(x,y);
	}
	
	
	
	if(i == 50){
		steam_supply(x,y);
		 
	}
	
	
	if(i == 55){
		
		
		 hotW = paper.path('M' + (x + 565) + ' ' + (y + 488) + 'l 0 0  ').attr({ 'stroke': '#e69455', 'stroke-width': '129' });
			hotlevel = hotW.animate({
				path: "M" + (x+565 ) + " " + (y + 488) + "  l 0  " + (-60) + "", 'stroke-width': '129', 'stroke': '#e69455', 'opacity': 0.5
			}, time*25);
			
		hotwater(x,y);	
				
		
	}
	
	if(i==57){
		j = [];
		
		j[0] = paper.path('M'  + (x +590) + ' ' + (y+260 ) + 'l 0 0 ').attr({'stroke':'#ff9999','stroke-width':'6',"stroke-linejoin": "round"})
		j[0].animate({path : 'M'  + (x +590) + ' ' + (y+260 ) + 'l  83 0 '}, (time/2),function(){
		j[1] = paper.path('M'  + (x +670) + ' ' + (y+260 ) + 'l 0 0 ').attr({'stroke':'#ff9999','stroke-width':'6',"stroke-linejoin": "round"})
		 j[1].animate({path : 'M'  + (x +670) + ' ' + (y+260 ) + 'l  0 -162 '}, (time/2),function(){
		j[2] = paper.path('M'  + (x +670) + ' ' + (y+100 ) + 'l 0 0 ').attr({'stroke':'#ff9999','stroke-width':'6',"stroke-linejoin": "round"})
		j[2].animate({path : 'M'  + (x +670) + ' ' + (y+100 ) + 'l  102 0 '}, (time/2),function(){
		j[3] = paper.path('M'  + (x +770) + ' ' + (y+100 ) + 'l 0 0 ').attr({'stroke':'#ff9999','stroke-width':'6',"stroke-linejoin": "round"})
		j[3].animate({path : 'M'  + (x +770) + ' ' + (y+100 ) + 'l  0 50 '}, (time/2),function(){
			level.remove();
			ht = -40
				var f = paper.path('M' + (x+775) + ' ' + (y+310) + 'l 0 0').attr({ 'stroke': '#fff', 'stroke-width': '130' });
		level = f.animate({
			path: "M" + (x +775) + " " + (y+310 ) + "  l 0  " + (ht) + "", 'stroke-width': '130', 'stroke': '#fff', 'opacity': 0.5
		}, 1)
			var f1 = paper.path('M' + (x+775) + ' ' + (y+310) + 'l 0 0').attr({ 'stroke': '#ff9999', 'stroke-width': '130' });
		level = f1.animate({
			path: "M" + (x +775) + " " + (y+310 ) + "  l 0  " + (ht) + "", 'stroke-width': '130', 'stroke': '#ff9999', 'opacity': 0.5
		}, 10)
		
		var f1 = paper.path('M' + (x+775) + ' ' + (y+270) + 'l 0 0').attr({ 'stroke': '#ff9999', 'stroke-width': '130' });
		level = f1.animate({
			path: "M" + (x +775) + " " + (y+270 ) + "  l 0  " + (ht) + "", 'stroke-width': '130', 'stroke': '#ff9999', 'opacity': 0.5
		}, time*60)
		})
		  })
		 })
		 
			 
		 })	 
		
			 
		 
		 
	}
	
	if(arrayJson.MSV2[i] >= 10){
		hot(x,y);
		valve2.remove();
		valve2 = paper.image("images/svValveH2G.png", x+305, y+650, 50, 50).attr({ 'transform': 'r' + 270 });
//		valve2.toBack();
	}else{
		valve2.remove();
		valve2 = paper.image("images/redValve.png", x+305, y+650, 50, 50).attr({ 'transform': 'r' + 270 });
		
		  
//		valve2.toBack();
	}
	
	
	if(arrayJson.MSV1[i] > 0){
		valve1.remove();
		 valve1 = paper.image("images/svValveH2G.png", x+270, y+595, 50, 50).toFront();
//		 valve1.toBack();
		
	}else{
		valve1.remove();
		
		valve1 = paper.image("images/redValve.png", x+270, y+595, 50, 50);
		

	}
	
	//Shut Down
	if(i == 78){

		
		 boil1 = paper.path('M' + (x + 285) + ' ' + (y + 287) + 'l 0 0  ').attr({ 'stroke': '#fff', 'stroke-width': '127' });
			level = boil1.animate({
				path: "M" + (x+285 ) + " " + (y +287) + "  l 0  " + (60) + "", 'stroke-width': '127', 'stroke': '#fff', 'opacity': 1
			}, time*30);
	}
	
	if(i == 83){
		
		sensorRed(x-10,y+180);
		sensorRed(x-10,y+100);
	}
	
	if(i == 87){
		sensorRed(x-10,y+280);
		 startP2.toBack();
		startP3.toFront();
	}
	
 
 if(i == 84){
	 paper.path('M'  + (x +322) + ' ' + (y+630 ) + 'l 60 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" });
	 paper.path('M'  + (x +340) + ' ' + (y+630 ) + 'l 0 20 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round" });
	 
 }	
 
 if(i == 98){
	 		k = [];
		
		k[0] = paper.path('M'  + (x +590) + ' ' + (y+260 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		k[0].animate({path : 'M'  + (x +590) + ' ' + (y+260 ) + 'l  83 0 '}, (time/2),function(){
		k[1] = paper.path('M'  + (x +670) + ' ' + (y+260 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		k[1].animate({path : 'M'  + (x +670) + ' ' + (y+260 ) + 'l  0 -162 '}, (time/2),function(){
		k[2] = paper.path('M'  + (x +670) + ' ' + (y+100 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		k[2].animate({path : 'M'  + (x +670) + ' ' + (y+100 ) + 'l  102 0 '}, (time/2),function(){
		k[3] = paper.path('M'  + (x +770) + ' ' + (y+100 ) + 'l 0 0 ').attr({'stroke':'#34deeb','stroke-width':'6',"stroke-linejoin": "round"})
		k[3].animate({path : 'M'  + (x +770) + ' ' + (y+100 ) + 'l  0 50 '}, (time/2))
		  })
		 })
		 
			 
		 })	
	 
 }
 
 
 if(i == 101){
	 circulating_empty(x,y);
 }
 
 
 
 if(i== 109){
	  motor1.attr("fill","Red");
	 startP3.toBack();
	 $("#reset").prop("disabled",false);
	 $("#startBtn").prop("disabled",true);
	 $("#nextLevelFault").prop("disabled",false);
	
//	startP3.toFront();

 }
 },i*2.5*time);
	}
	
	});
	
	
	  
  stopSavingValues =  function () {
  					if (dataInterval) {
   					 clearInterval(dataInterval);
  					  console.log("Saving values stopped.");
 				 } else {
    				console.log("No active interval to stop.");
                 }
          }
	
	
	}
