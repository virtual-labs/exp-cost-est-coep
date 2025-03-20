		$("#simDemo").click(function () {

			 $("#modelDialog").removeClass("modal-md");
			 $("#modelDialog").removeClass("modal-sm");
			 $("#modelDialog").removeClass("modal-xl");
			 $("#modelDialog").addClass("modal-xl");
			htm=''
				+'<div class="row statement" ><p>A problem statement is a crucial element in designing and developing a pilot plant. '
				+'It defines the problem or opportunity that the pilot plant aims to address, and it serves as a guiding force throughout the project.'
				+'Heres a general outline to help you define a problem statement for designing and developing a pilot plant:'
				+'<br>Problem Statement: You are given the responsibility as an Instrumentation and Control Engineer to design and commission a pilot '
				+'<br><b>A Boiler and Heat exchanger system to provide hot water at max 45°C and 600 lph</b>'
				+'<br><p><b>Background :</b> <br>The pilot plant will be used to test the new “control and automation” technologies.'
				+'<br><b>Key Performance Indicators (KPIs) :</b><br> You will be judged based on the accuracy of design, proper'
				+'selection of field and panel instruments, and successful commissioning of the plant in a stipulated time frame.'
				+'<br><b>Constraints and Assumptions :</b><br> As you are an Instrumentation and Control Engineer process related details are'
				+'not expected from you. You will receive the same from a process expert.</b></div>'
				+'<div class="row"><img src="images/boilerheatExchanger.jpg" class="img img-responsive"></img></div>'
			$("#proStrBody").html(htm);
			
		});
			$("#procedure").click(function () {
				 $("#modelDialog").removeClass("modal-md");
				 $("#modelDialog").removeClass("modal-sm");
				 $("#modelDialog").removeClass("modal-xl");
				 $("#modelDialog").addClass("modal-sm");
//				$("#modalTitle").html("PROCEDURE");
				htm=''
    +'         <h5 class="text-center" style="color: #f8f9fa; background-color: #343a40; padding: 10px;">PROCEDURE</h5>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">1. Piping Diagram Configuration</h4>'
    +'             <ul>'
    +'                 <li>- Configure all parameters for the piping diagram. In which you need to identify vessels and equipment to run the plant.</li>'
    +'                 <li>- Click on the <button class="button">Verify Components</button> button.</li>'
    +'                 <li>- If all configuration parameters are correct, the "Next Level" button will be visible.</li>'
    +'                 <li>- Click on the <button class="button">Next Level</button> button to proceed.</li>'
    +'             </ul>'
    +'         </div>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">2. Instrument Diagram Configuration</h4>'
    +'             <ul>'
    +'                 <li>- Follow the same steps as above to configure the instrument diagram. In this you will have identify the instruments required to run the plant.</li>'
    +'                 <li>- Click on the <button class="button">Verify Instruments</button> button.</li>'
    +'                 <li>- If all configuration parameters are correct, the "Next Level" button will be visible.</li>'
    +'                 <li>- Click on the <button class="button">Next Level</button> button to continue.</li>'
    +'             </ul>'
    +'         </div>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">3. Sequence of Activities</h4>'
    +'             <ul>'
    +'                 <li>- Read the “Prior Knowledge Assessment” statements carefully.</li>'
    +'                 <li>- Enter the appropriate sequence number in the provided text box. The system will not allow you to write the duplicate numbers. Hence be careful.</li>'
    +'                 <li>- Click on the <button class="button">Submit</button> button.</li>'
    +'                 <li>- You have three attempts to verify whether the sequence is correct or not.</li>'
    +'                 <li>- Try three times before proceeding to the Simulation section.</li>'
    +'             </ul>'
    +'         </div>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">4. Simulation Execution</h4>'
    +'             <ul>'
    +'                 <li>- Click on the <button class="button">Start</button> button to begin the simulation.</li>'
    +'                 <li>- The first-time setting runs for 5 minutes by default.</li>'
    +'                 <li>- For other test cycles, you can choose different time durations such as 2 min, 3 min, 4 min, etc.</li>'
    +'                 <li>- The simulation will display the status and phases during execution.</li>'
    +'                 <li>- You can start the next test cycle or view the datasheet and trends according to the test cycles.</li>'
    +'                 <li>- The datasheet for each test cycle can be downloaded in PDF format by clicking on the <button class="button">Download</button> button.</li>'
    +'                 <li>- Multiple readings are available in line format.</li>'
    +'                 <li>- Use the checkbox to view different series or hide specific series as needed.</li>'
    +'             </ul>'
    +'         </div>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">4.1. Download Graph</h4>'
    +'             <ul>'
    +'                 <li>- Click on the <button class="button">Download Graph</button> button to save the graph.</li>'
    +'             </ul>'
    +'         </div>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">4.2. Data Monitoring & Graphs</h4>'
    +'             <ul>'
    +'                 <li>- View the Datasheet and Trends accordingly.</li>'
    +'                 <li>- The trend functionality allows you to see multiple readings in a line or trend format.</li>'
    +'                 <li>- Use the checkbox to switch between different series or hide/show specific data.</li>'
    +'                 <li>- Download the graph using the <button class="button">Download Graph</button> button.</li>'
    +'             </ul>'
    +'         </div>'

    +'         <div class="section">'
    +'             <h4 class="tab-title">4.3. Result Assessment</h4>'
    +'             <ul>'
    +'                 <li>- Click on the <button class="button">Result</button> button to view your performance assessment.</li>'
    +'             </ul>'
    +'         </div>';
				$("#proStrBody").html(htm);
			});
			$("#tagDetails").click(function () {
				 $("#modelDialog").removeClass("modal-md");
				 $("#modelDialog").removeClass("modal-sm");
				 $("#modelDialog").removeClass("modal-xl");
				 $("#modelDialog").addClass("modal-md");
//				$("#modalTitle").html("PROCEDURE");
				htm=''
					+'<table class="table table-bordered table-hover" style="font-size:larger;">'
					+' <thead>'
					+'<tr class="table-info">'
					+'<th>Tag</th>'
					+'<th>Tag Details</th>'
					+'</tr>'
					+'</thead>'
					+' <tbody>'
					+'<tr>'
					+'<td>TT1</td>'
					+'<td>Drum Temperature </td>'
					+'</tr>'
					+'<tr>'
					+'<td>TT2</td>'
					+'<td>Steam Temperature </td>'
					+'</tr>'
					+'<tr>'
					+'<td>TT3</td>'
					+'<td>HE Outlet Water Temperature </td>'
					+'</tr>'
					+'<tr>'
					+'<td>TT4</td>'
					+'<td>Inlet Water Temperature_HE </td>'
					+'</tr>'
					+'<tr>'
					+'<td>TT5</td>'
					+'<td>Boiler feed water Temperature_Condensor </td>'
					+'</tr>'
					+'<tr>'
					+'<td>TT6</td>'
					+'<td>Boiler feed water Temperature</td>'
					+'</tr>'
					+'<tr>'
					+'<td>FT1</td>'
					+'<td>Boiler Feed Water Flow Inf Feed Pump_101 </td>'
					+'</tr>'
					+'<tr>'
					+'<td>FT2</td>'
					+'<td>Steam Flow </td>'
					+'</tr>'
					+'<tr>'
					+'<td>FT3</td>'
					+'<td>Feed Water Flow HE Inlet </td>'
					+'</tr>'
					+'<tr>'
					+'<td>PT</td>'
					+'<td>Steam Pressure Transmitter</td>'
					+'</tr>'
					+'<tr>'
					+'<td>FCV</td>'
					+'<td>Control Valve</td>'
					+'</tr>'
					+'<tr>'
					+'<td>SCR</td>'
					+'<td>Silicon Controlled Rectifier</td>'
					+'</tr>'
					+'  <tr>'
					+' <td>MOV1</td>' 
					+' <td> Mod Sov 1</td>' 
					+'  </tr>'
					+'  <tr>'
					+' <td>MOV2</td>'  
					+' <td>Mod Sov 2</td>'
					+'  </tr>'
					+'  <tr>'
					+' <td>PY1</td>'
					+' <td>Feed Pump Speed_Inlet(VFD_101)</td>'
					+'  </tr>'
					+'  <tr>'
					+' <td>PY2</td>'
					+' <td>	Feed Pump_HE_Water(VFD_201)</td>'
					+'  </tr>'
					+'  <tr>'
					+' <td>LT</td>'
					+' <td>Level Transmitter Drum</td>'
					+'  </tr>'
					
					
					
					+'</tbody>'
					+'</table>'
				$("#proStrBody").html(htm);
			});
			
			