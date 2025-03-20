

var timerMasterJson = {};
function cost(){
		timerMasterJson.cost = $("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
$("#Header").html("<center><span>COST ESTIMATION</span></center>");
	
	var htm = ` <div class="btn-container">
        <button class="btn add-btn" data-toggle="modal" data-target="#preReq">Add Row</button>
        <button class="btn check-btn" data-toggle="modal" data-target="#preReq">Check Values</button>
    </div>

    <table id="dynamicTable">
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Name of the Instrument</th>
                <th>Make and Model</th>
                <th>Base Price</th>
                <th>Packing and Forwarding (2%)</th>
                <th>Insurance (0.5%)</th>
                <th>Freight (1%)</th>
                <th>Total Cost of the Instrument</th>
                <th>GST (18%)</th>
                <th>Total Cost with GST</th>
                <th>Quantity</th>
                <th>Total Cost</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>
                    <select class="instrument-name">
                        <option value="">Select Instrument</option>
                        <option value="1">Temperature Switch</option>
                        <option value="2">Pressure Switch</option>
                        <option value="3">Level Switch</option>
                        <option value="4">Flow Switch</option>
                        <option value="5">Level Transmitter (RADAR)</option>
                        <option value="6">Level Transmitter (Ultrasonic)</option>
                        <option value="7">Level Transmitter (Capacitive)</option>
                        <option value="8">Pressure Transmitter (Capacitive)</option>
                        <option value="9">Temperature Transmitter</option>
                        <option value="10">Flow Transmitter (Magflow) 25 mmNB</option>
                        <option value="11">Flow Transmitter (ultrasonic)</option>
                        <option value="12">Solenoid Valve 25 mmNB</option>
                        <option value="13">Solenoid Valve 50 mmNB</option>
                        <option value="14">Angle Valve 25 mmNB</option>
                        <option value="15">Angle Valve 50 mmNB</option>
                        <option value="16">Diaphragm Valve 25 mmNB</option>
                        <option value="17">Diaphragm Valve 50 mmNB</option>
                        <option value="18">Diaphragm Valve 100 mmNB</option>
                        <option value="19">I/P Converter</option>
                        <option value="20">VFD for 1 HP</option>
                        <option value="21">VFD for 5 HP</option>
                        <option value="22">VFD for 10 HP</option>
                        <option value="23">Peristaltic Pump (6.25 mmNB)</option>
                        <option value="24">SCR controlled Heater (18 KW)</option>
                        <option value="25">PLC equivalent to SLC 1200</option>
                        <option value="26">SCADA Package with 25 screens</option>
                        <option value="27">Historian (OSI Pi) or equivalent</option>
                        <option value="28">Workstation (i7 with 1TB storage)</option>
                        <option value="29">Control Panel (with all consumables included)</option>
                        <option value="30">HMI (10") touch screen</option>
                        <option value="31">Development charges for Ladder program, SCADA, and Data Analytics</option>
                        <option value="32">Power supply (Bulk) 24 VDC 20 A</option>
                    </select>
                </td>
                <td><input type="text" class="make-model" placeholder="Enter make & model"></td>
                <td><input type="number" class="base-price" placeholder="Enter price"></td>
                <td><input type="text" class="packing" placeholder="packing"></td>
                <td><input type="text" class="insurance" ></td>
                <td><input type="text" class="freight" ></td>
                <td><input type="text" class="total-cost" ></td>
                <td><input type="text" class="gst" ></td>
                <td><input type="text" class="total-cost-gst" ></td>
                <td><input type="number" class="quantity" placeholder="Enter qty"></td>
                <td><input type="text" class="total-final-cost" ></td>
                <td><button class="remove-btn" data-toggle="modal" data-target="#preReq">Remove</button></td>
            </tr>
        </tbody>
    </table>`
    
    
 htm +=  `	<!-- 			    The Modal  ProStr -->
  <div class="modal fade " id="preReq">
	    <div class="modal-dialog modal-md" >
		      <div class="modal-content">
		       
	        <div class="modal-header">
	          <h4 class="modal-title"><center>Message Box</center></h4>
	          <button type="button" class="close" data-dismiss="modal">&times;</button>
	        </div>
<!-- 		        Modal body -->
		        <div class="modal-body" id="modalMessage" style="color:red">

		        </div>
<!-- 			        Modal footer -->
		        <div class="modal-footer">
	             <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>
		        </div>
		      </div>
		    </div>
		  </div>
		  <!-- 			  End Modal ProStr -->`
    
     $("#mainDiv").html(htm);
     
       // Modal box logic
    var modal = $('#preReq');
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
     
     
     $(document).ready(function() {
            function updateRowNumbers() {
                $("#dynamicTable tbody tr").each(function(index) {
                    $(this).find("td:first").text(index + 1);
                });
            }

            $(".add-btn").click(function() {
              
                    let isValid = true;

                $(".instrument-name, .base-price, .quantity").each(function() {
                    let value = $(this).val().trim();
                    
                    if ($(this).hasClass("base-price") && (value === "" || parseFloat(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    } else if ($(this).hasClass("quantity") && (value === "" || parseInt(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    } else {
                        $(this).removeClass("error");
                    }
                });

                if (!isValid) {
                    
                    showModal(`<strong style="color:#153f68;font-size: large;">Please enter valid instrument name, base price, and quantity before adding a new row.</strong>`);
                    return;
                }else{
					  let newRow = $("#dynamicTable tbody tr:first").clone();
                     newRow.find("input").val("");
                     newRow.find("select").val("");
                     newRow.appendTo("#dynamicTable tbody");
                     updateRowNumbers();
                     showModal(`<strong style="color:#153f68;font-size: large;"> Adding a new row.</strong>`);
					
				}
            });

            $(document).on("click", ".remove-btn", function() {
                if ($("#dynamicTable tbody tr").length > 1) {
                    $(this).closest("tr").remove();
                    updateRowNumbers();
                } else {
                  
                     showModal(`<strong style="color:#153f68;font-size: large;">At least one row is required</strong>`);
                }
            });

            $(document).on("input", ".base-price", function() {
                let row = $(this).closest("tr");
                let basePrice = parseFloat(row.find(".base-price").val()) || 0;
                let qty = parseInt(row.find(".quantity").val()) || 1;
                let name =  row.find(".instrument-name").val();
                console.log(name);
                
                if(name == 31){
					  let packing = basePrice * 0;
               		  let insurance = basePrice * 0;
               		  let freight = basePrice * 0;
               		   let totalCost = basePrice + packing + insurance + freight; 
                      let gst = totalCost * 0.18;
                     let totalWithGst = totalCost + gst;
                     let finalTotal = totalWithGst * qty;
                 if ($("#dynamicTable tbody tr").length > 1) {    
                row.find(".packing").val(packing.toFixed(2));
                row.find(".insurance").val(insurance.toFixed(2));
                row.find(".freight").val(freight.toFixed(2));
                row.find(".total-cost").val(totalCost.toFixed(2));
                row.find(".gst").val(gst.toFixed(2));
                row.find(".total-cost-gst").val(totalWithGst.toFixed(2));
                }
				}else{
                let packing = basePrice * 0.02;
                let insurance = basePrice * 0.005;
                let freight = basePrice * 0.01;  
                let totalCost = basePrice + packing + insurance + freight; 
                let gst = totalCost * 0.18;
                let totalWithGst = totalCost + gst;
                let finalTotal = totalWithGst * qty;
				if ($("#dynamicTable tbody tr").length > 1) {
                row.find(".packing").val(packing.toFixed(2));
                row.find(".insurance").val(insurance.toFixed(2));
                row.find(".freight").val(freight.toFixed(2));
                row.find(".total-cost").val(totalCost.toFixed(2));
                row.find(".gst").val(gst.toFixed(2));
                row.find(".total-cost-gst").val(totalWithGst.toFixed(2));
                }
                }
//                row.find(".total-final-cost").val(finalTotal.toFixed(2));
            });
            
            
             $(document).on( "input", " .quantity", function() {
                let row = $(this).closest("tr");
                let basePrice = parseFloat(row.find(".base-price").val()) || 0;
                let qty = parseInt(row.find(".quantity").val()) || 1;
                let name =  row.find(".instrument-name").val();
                 if(name == 31){
					  let packing = basePrice * 0;
               		  let insurance = basePrice * 0;
               		  let freight = basePrice * 0;
               		   let totalCost = basePrice + packing + insurance + freight; 
                      let gst = totalCost * 0.18;
                     let totalWithGst = totalCost + gst;
                     let finalTotal = totalWithGst * qty;
                 if ($("#dynamicTable tbody tr").length > 1) {    
                row.find(".packing").val(packing.toFixed(2));
                row.find(".insurance").val(insurance.toFixed(2));
                row.find(".freight").val(freight.toFixed(2));
                row.find(".total-cost").val(totalCost.toFixed(2));
                row.find(".gst").val(gst.toFixed(2));
                row.find(".total-cost-gst").val(totalWithGst.toFixed(2));
                row.find(".total-final-cost").val(finalTotal.toFixed(2));
                }
				}
				else{
                let packing = basePrice * 0.02;
                let insurance = basePrice * 0.005;
                let freight = basePrice * 0.01;  
                let totalCost = basePrice + packing + insurance + freight; 
                let gst = totalCost * 0.18;
                let totalWithGst = totalCost + gst;
                let finalTotal = totalWithGst * qty;
				if ($("#dynamicTable tbody tr").length > 1) {
                row.find(".packing").val(packing.toFixed(2));
                row.find(".insurance").val(insurance.toFixed(2));
                row.find(".freight").val(freight.toFixed(2));
                row.find(".total-cost").val(totalCost.toFixed(2));
                row.find(".gst").val(gst.toFixed(2));
                row.find(".total-cost-gst").val(totalWithGst.toFixed(2));
                row.find(".total-final-cost").val(finalTotal.toFixed(2));
                		 
				}
                }

             
               
            });

            $(".check-btn").click(function() {
                let isValid = true;
                $(" .base-price, .quantity,.packing,.insurance,.freight,.total-cost,.gst,.total-cost-gst,.total-final-cost").each(function() {
                    if ($(this).val().trim() === "") {
                        $(this).addClass("error");
                        isValid = false;
                    } else {
                        $(this).removeClass("error");
                    }
                });
                if (!isValid) {
					showModal(`<strong style="color:#153f68;font-size: large;">Please fill in all required fields</strong>`);
                    
                } else {
                    
                    showModal(`<strong style="color:#153f68;font-size: large;">All values are entered correctly</strong>`);
                }
            });
        });
}