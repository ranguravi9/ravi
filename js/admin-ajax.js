var url = document.URL;

var array = url.split("/");

var base = array[3];

if (array[2] == 'localhost') {
	var staticurl = '/' + base ;
	//var url_action = array[6].split("?")[0];
} else {
	var staticurl = '/';
	// var url_action = array[5].split("?")[0];
}


function changeemail(id)
{
	var url = staticurl+'email-templates?email_type='+id;
	 window.location = url; // redirect
}

$(document).ready(function(){
	
	$('.alert-close').click(function()
		{
			
			$(this).parent('.kv-alert').hide();
		})
		
$(document).on('change', '.same_firm_locations', function () {
	
	if($('.same_firm_locations').is(':checked')){
	$('#firmusers-firm_user_locations option').prop('selected', true);
	$('#firmusers-firm_user_locations').change(); 
	}else
	{
	$('#firmusers-firm_user_locations option').prop('selected', false);
	$('#firmusers-firm_user_locations').change(); 
	}
	
});
	
	

		 $(document).on('click', '.primary-class-yes', function () { 
		 $('input.primary-contact-checkbox').attr('checked',true);
		 $('#primary_billing_button_yes').removeClass('primary-class-yes');
		 $('#primary_billing_button_no').removeClass('primary-class-no');
	 });
	 $(document).on('click', '.primary-class-no', function () { 
		 $('input.primary-contact-checkbox').attr('checked',false);
		 $('#primary_billing_button_yes').removeClass('primary-class-yes');
		 $('#primary_billing_button_no').removeClass('primary-class-no');
	 });

	 $(document).on('click', '.billing-class-yes', function () { 
		 $('input.billing-contact-checkbox').attr('checked',true);
		 $('#primary_billing_button_yes').removeClass('billing-class-yes');
		 $('#primary_billing_button_no').removeClass('billing-class-no');
	 });
	 $(document).on('click', '.billing-class-no', function () { 
		 $('input.billing-contact-checkbox').attr('checked',false);
		 $('#primary_billing_button_yes').removeClass('billing-class-yes');
		 $('#primary_billing_button_no').removeClass('billing-class-no');
	 });

	 
 $(document).on('click', '.firm-user-modal-close', function () {
	
	$('#create_firm_user').find('.modal-content').html('<div class="modal-header modal-header-color">'
							 
							+'<button type="button" class="close-modal modal-opacity close-modal-blue firm-close-btn" aria-hidden="true">X</button>'
							+'<h4 class="modal-title color-white" id="myModalLabel">Firm User</h4>'
							+'</div>'
							+'<div class="modal-body col-md-12">'
							+'<div class="load-gif"  style="position: inherit;">'
							+'<div class="procressing_plz_wait">'
							+'<img class="" src="/../images/default.gif" />'
							+'</div>'
							+'</div></div><div class="modal-footer"></div>');
	
});	


$(document).on('click', '.client-user-modal-close', function () {
	
	$('#add_client_user').find('.modal-content').html('<div class="modal-header modal-header-color">'
							 
							+'<button type="button" class="close-modal modal-opacity close-modal-blue firm-close-btn" aria-hidden="true">X</button>'
							+'<h4 class="modal-title color-white" id="myModalLabel">Firm User</h4>'
							+'</div>'
							+'<div class="modal-body col-md-12">'
							+'<div class="load-gif"  style="position: inherit;">'
							+'<div class="procressing_plz_wait">'
							+'<img class="" src="/../images/default.gif" />'
							+'</div>'
							+'</div></div><div class="modal-footer"></div>');
	
});	



$(document).on('click', '.admin-user-modal-close', function () {
	
	$('#update_admin').find('.modal-content').html('<div class="modal-header modal-header-color">'
							 
							+'<button type="button" class="close-modal modal-opacity close-modal-blue firm-close-btn" aria-hidden="true">X</button>'
							+'<h4 class="modal-title color-white" id="myModalLabel">Admin User</h4>'
							+'</div>'
							+'<div class="modal-body col-md-12">'
							+'<div class="load-gif"  style="position: inherit;">'
							+'<div class="procressing_plz_wait">'
							+'<img class="" src="/../images/default.gif" />'
							+'</div>'
							+'</div></div><div class="modal-footer"></div>');
	
});	


});



$(document).ready(function() {


		
	jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
		return function( elem ) {
			return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		};
	});

	
	
	//you have to use keyup, because keydown will not catch the currently entered value
	$('#setpasswordform-password').keyup(function() {

		// set password variable
		var pswd = $(this).val();

		//validate the length
		if (pswd.length < 8) {
			$('#length').removeClass('valid').addClass('invalid');
		} else {
			$('#length').removeClass('invalid').addClass('valid');
		}

		//validate letter
		if (pswd.match(/[A-z]/)) {
			$('#letter').removeClass('invalid').addClass('valid');
		} else {
			$('#letter').removeClass('valid').addClass('invalid');
		}

		//validate uppercase letter
		if (pswd.match(/[A-Z]/)) {
			$('#capital').removeClass('invalid').addClass('valid');
		} else {
			$('#capital').removeClass('valid').addClass('invalid');
		}

		//validate special character
		if (pswd.match(/[@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\? ]/)) {
			$('#specialchar').removeClass('invalid').addClass('valid');
		} else {
			$('#specialchar').removeClass('valid').addClass('invalid');
		}

		//validate number
		if (pswd.match(/\d/)) {
			$('#number').removeClass('invalid').addClass('valid');
		} else {
			$('#number').removeClass('valid').addClass('invalid');
		}

	}).focus(function() {
		$('#pswd_info').show();
	}).blur(function() {
		$('#pswd_info').hide();
	});
	
	
	
	//you have to use keyup, because keydown will not catch the currently entered value
	$('#new-password').keyup(function() {

		// set password variable
		var pswd = $(this).val();

		//validate the length
		if (pswd.length < 8) {
			$('#length').removeClass('valid').addClass('invalid');
		} else {
			$('#length').removeClass('invalid').addClass('valid');
		}

		//validate letter
		if (pswd.match(/[A-z]/)) {
			$('#letter').removeClass('invalid').addClass('valid');
		} else {
			$('#letter').removeClass('valid').addClass('invalid');
		}

		//validate uppercase letter
		if (pswd.match(/[A-Z]/)) {
			$('#capital').removeClass('invalid').addClass('valid');
		} else {
			$('#capital').removeClass('valid').addClass('invalid');
		}

		//validate special character
		if (pswd.match(/[@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\? ]/)) {
			$('#specialchar').removeClass('invalid').addClass('valid');
		} else {
			$('#specialchar').removeClass('valid').addClass('invalid');
		}

		//validate number
		if (pswd.match(/\d/)) {
			$('#number').removeClass('invalid').addClass('valid');
		} else {
			$('#number').removeClass('valid').addClass('invalid');
		}

	}).focus(function() {
		$('#pswd_info').show();
	}).blur(function() {
		$('#pswd_info').hide();
	});

});
/*
$(document).ready(function() {
    var $submit = $("#login_button"),
        $inputs = $('#validation-email, #validation-password');

    function checkEmpty() {
        return $inputs.filter(function() {
            return !$.trim(this.value);
        }).length === 0;
    }

    $inputs.on('blur', function() {
        $submit.prop("disabled", !checkEmpty());
    }).blur();
});
*/
/*
$(document).ready(function (){
	
	if ( $( "#email-form-validation" ).length ) {
    validate();
    $('#validation-email, #validation-password').keyup(validate);
	}
});

function validate(){
    if ($('#validation-email').val().length   >   0   &&
        $('#validation-password').val().length  >   0   ) {
        $("#login_button").prop("disabled", false);
    }
    else {
        $("#login_button").prop("disabled", true);
    }
}*/

function validatesetpassword() {

	if (document.getElementById("setpasswordform-password").value == '') {
		$('.field-setpasswordform-password').find('p.help-block').html(
				'Password Required');
		document.getElementById("setpasswordform-password").focus();
		return false;
	} else {
			
			
			// set password variable
		var pswd = $('#setpasswordform-password').val();

		//validate the length
		if (pswd.length < 8) {
			$('#length').removeClass('valid').addClass('invalid');
			document.getElementById("setpasswordform-password").style.borderColor = "red";
			document.getElementById("setpasswordform-password").focus();
			$('#pswd_info').show();
			return false;
		} else {
			$('#length').removeClass('invalid').addClass('valid');
			document.getElementById("setpasswordform-password").style.borderColor = "";
			$('#pswd_info').hide();
		}

		//validate letter
		if (pswd.match(/[A-z]/)) {
			$('#letter').removeClass('invalid').addClass('valid');
			document.getElementById("setpasswordform-password").style.borderColor = "";
			$('#pswd_info').hide();
			
		} else {
			$('#letter').removeClass('valid').addClass('invalid');
			document.getElementById("setpasswordform-password").style.borderColor = "red";
			document.getElementById("setpasswordform-password").focus();
			$('#pswd_info').show();
			return false;
		}

		//validate uppercase letter
		if (pswd.match(/[A-Z]/)) {
			$('#capital').removeClass('invalid').addClass('valid');
			document.getElementById("setpasswordform-password").style.borderColor = "";
			$('#pswd_info').hide();
		} else {
			$('#capital').removeClass('valid').addClass('invalid');
			document.getElementById("setpasswordform-password").style.borderColor = "red";
			document.getElementById("setpasswordform-password").focus();
			$('#pswd_info').show();
			return false;
		}

		//validate special character
		if (pswd.match(/[@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\? ]/)) {
			$('#specialchar').removeClass('invalid').addClass('valid');
			document.getElementById("setpasswordform-password").style.borderColor = "";
			$('#pswd_info').hide();
		} else {
			$('#specialchar').removeClass('valid').addClass('invalid');
			document.getElementById("setpasswordform-password").style.borderColor = "red";
			document.getElementById("setpasswordform-password").focus();
			$('#pswd_info').show();
			return false;
		}

		//validate number
		if (pswd.match(/\d/)) {
			$('#number').removeClass('invalid').addClass('valid');
			document.getElementById("setpasswordform-password").style.borderColor = "";
			$('#pswd_info').hide();
		} else {
			$('#number').removeClass('valid').addClass('invalid');
			document.getElementById("setpasswordform-password").style.borderColor = "red";
			document.getElementById("setpasswordform-password").focus();
			$('#pswd_info').show();
			return false;
		}
		
		
		document.getElementById("setpasswordform-password").style.borderColor = "";
		$('.field-setpasswordform-password').find('p.help-block').html('');

	}

	if (document.getElementById("setpasswordform-confirmpassword").value == '') {
		$('.field-setpasswordform-confirmpassword').find('p.help-block').html(
				'Confirm Password Required');
		document.getElementById("setpasswordform-confirmpassword").focus();
		return false;
	} else {

		document.getElementById("setpasswordform-confirmpassword").style.borderColor = "";
		$('.field-setpasswordform-confirmpassword').find('p.help-block').html('');

	}

	if (document.getElementById("setpasswordform-confirmpassword").value != document
			.getElementById("setpasswordform-password").value) {

		document.getElementById("setpasswordform-confirmpassword").style.borderColor = "red";
		$('.field-setpasswordform-confirmpassword').find('p.help-block').html(
				'Password Mismatch');
		document.getElementById("setpasswordform-confirmpassword").focus();
		return false;
	} else {
		document.getElementById("setpasswordform-password").style.borderColor = "";
		document.getElementById("setpasswordform-confirmpassword").style.borderColor = "";
		$('.field-setpasswordform-confirmpassword').find('p.help-block').html('');

	}

}

function addLocationsOnebyOne(){
	
				var text = '';
				text = $('#input_add_location').val();
				
				if(text == ''){
				$('.field-firms-firm_locations').addClass('has-error');
				$('.field-firms-firm_locations').find('.help-block').html('Please enter valid location ');
					
				}else if(checkAlpha(text)){
		
				$('.field-firms-firm_locations').addClass('has-error');
				$('.field-firms-firm_locations').find('.help-block').html('Location can only be alphanumeric. ');
				return false;
		
				}else{
					
				$('.field-firms-firm_locations').removeClass('has-error');
		        $('.field-firms-firm_locations').find('.help-block').html('');
				text = text.trim();
				if(text != '' && text.replace(/\ /g,"") != '')
				{
					
					if ($('#firms-firm_locations option:Contains('+ text +')').length) {
					    
					   
					   var selectedValues = $("#firms-firm_locations").val();
					   var data = selectedValues;
						   data = data+','+$('#firms-firm_locations option:Contains('+ text +')').val();
					   var dataarray = data.toString().split(",");
					   var unique = dataarray.filter(function(itm, i, dataarray) {
									return i == dataarray.indexOf(itm);
								});

						$("#firms-firm_locations").val(unique);		
						$("#firms-firm_locations").trigger('change');

					   
					}else{
					var newOption = "<option value='"+text+"' selected >"+text+"</option>"; 
					//$("#firm_locations").append(newOption);
					$("#firms-firm_locations").append(newOption);
					}
					
					$('#input_add_location').val('');
					
				}else
				{
					$('#input_add_location').val('');
					document.getElementById("input_add_location").focus();
				}
				
				}
				
}



function ChangeactivateText(firm_user_id,firm_id){
	// to deactivate
	$('#mydeactivateModalLabel').html('Deactivate User');
	$('#mydeactivateModalBodyText').html('Do You Want to Deactivate the User?');	//
	$('#deactivate_modal_go1').attr("onclick", "ChangeFirmUserStatus('"+firm_user_id+"','D2','"+firm_id+"');");
}
function ChangeDeactivateText(firm_user_id,firm_id){
	// to Aactivate
	$('#mydeactivateModalLabel').html('Activate User');
	$('#mydeactivateModalBodyText').html('Do You Want to Activate the User?');	//
	$('#deactivate_modal_go1').attr("onclick", "ChangeFirmUserStatus('"+firm_user_id+"','A1','"+firm_id+"');");
}

function ChangeadminactivateText(admin_user_id){
	// to deactivate
	$('#mydeactivateModalLabel').html('Deactivate User');
	$('#mydeactivateModalBodyText').html('Do You Want to Deactivate the User?');	//
	$('#deactivate_modal_go1').attr("onclick", "ChangeAdminUserStatus('"+admin_user_id+"','D2');");
}
function ChangeadminDeactivateText(admin_user_id){
	// to Aactivate
	$('#mydeactivateModalLabel').html('Activate User');
	$('#mydeactivateModalBodyText').html('Do You Want to Activate the User?');	//
	$('#deactivate_modal_go1').attr("onclick", "ChangeAdminUserStatus('"+admin_user_id+"','A1');");
}

function openDeleteplanyear(plan_year_id){
	// to Aactivate
	$('#mydeactivateModalLabel').html('Delete Plan year');
	$('#mydeactivateModalBodyText').html('Do You Want to Delete this Plan Year?');	//
	$('#deactivate_modal_go1').attr("onclick", "deletePlanyear('"+plan_year_id+"');");
	$('#alert_screen').modal("show");
	
}

function ChangeactivateclientText(client_user_id,client_id){
	// to deactivate
	$('#mydeactivateModalLabel').html('Deactivate User');
	$('#mydeactivateModalBodyText').html('Do You Want to Deactivate the User?');	//
	$('#deactivate_modal_go1').attr("onclick", "ChangeClientUserStatus('"+client_user_id+"','D2','"+client_id+"');");
}
function ChangeDeactivateclientText(client_user_id,client_id){
	// to Aactivate
	$('#mydeactivateModalLabel').html('Activate User');
	$('#mydeactivateModalBodyText').html('Do You Want to Activate the User?');	//
	$('#deactivate_modal_go1').attr("onclick", "ChangeClientUserStatus('"+client_user_id+"','A1','"+client_id+"');");
}

function ChangeactivatelookupText(lookup_id){
	// to deactivate
	$('#mydeactivateModalLabel').html('Deactivate Lookup option');
	$('#mydeactivateModalBodyText').html('Do You Want to Deactivate the Lookup option?');	//
	$('#deactivate_modal_go1').attr("onclick", "ChangelookStatus('"+lookup_id+"','D2');");
}
function ChangeDeactivatelookupText(lookup_id){
	// to Aactivate
	$('#mydeactivateModalLabel').html('Activate Lookup option');
	$('#mydeactivateModalBodyText').html('Do You Want to Activate the Lookup option?');	//
	$('#deactivate_modal_go1').attr("onclick", "ChangelookStatus('"+lookup_id+"','A1');");
}

function deactivateFirm(firm_id){
	$('#firm_status_change_ModalLabel').html('Deactivate Firm');
	$('#firm_status_change_ModalText').html('Do You Want to Deactivate the Firm ?');
	$('#firm_status_change_button').attr("onclick", "ChangeFirmStatus('"+firm_id+"','D2');");
}

function activateFirm(firm_id){
	$('#firm_status_change_ModalLabel').html('Activate Firm');
	$('#firm_status_change_ModalText').html('Do You Want to Activate the Firm ?');
	$('#firm_status_change_button').attr("onclick", "ChangeFirmStatus('"+firm_id+"','A1');");
}


function Sendresendpassword(user_id)
{
	$('#resend_activation_link_btn').attr("onclick", "Sendresendpasswordmail('"+user_id+"');");
}	
function Sendresendpasswordmail(user_id)
{
	var data = 'user_id='+user_id;
	
	$.ajax({
	type: 'POST',
    url: staticurl + "user/sendpasswordmail",
	data:data,
	processData:false,
	dataType:'json',
	success:function(data){
		
		if (data.success) {
			
			toastr.success(data.success);	
			
		}else
		{
			toastr.error(data.error);			
		}	
$('#resend_activation_link').modal('hide');		
    },	
  
  });	
	
}

function ChangeFirmUserStatus(firm_user_id,type,firm_id){
 
   var data= 'firm_user_id='+firm_user_id+'&status='+type;
   
  $.ajax({
	type: 'POST',
    url: staticurl + "user/changeuserstatus",
	data:data,
	processData:false,
	//dataType:'json',
	success:function(data){
	//	console.log(data.firm_user_locations);
		if (data) {
			if(type == 'A1'){		
			if(data ==1){
				toastr.success('User activated Successfully');
			}else{
				toastr.error(data);
			}
				
				$('#update_firm_change_status_text').html('Deactivate User');
				$('#update_firm_change_status_text').attr("onclick", "ChangeactivateText('"+firm_user_id+"','"+firm_id+"');");
				  if ( $( "#firm-user-grid-pjax" ).length ) {
         				
         				 if ( $( "#search-pjax-div" ).length) {
							  $.pjax.reload({container:'#firm-user-grid-pjax', timeout: 2000,replace: false, url: staticurl+"user/firmdetails?id="+firm_id,enablePushState:false});
         					$("#firm-user-grid-pjax").on("pjax:end", function() { 
							 $.pjax.reload({container:'#search-pjax-div', timeout: 2000});
         					}); 
                      }else{
						   $.pjax.reload({container:'#firm-user-grid-pjax'});
					  }
                      }
				/*if ( $( "#firm-user-grid-pjax" ).length ) {
				$.pjax.reload({container:'#firm-user-grid-pjax'});
				}*/
			}else if(type == 'D2'){
			if(data ==1){
				toastr.success('User Deactivated Successfully');
			}else{
				toastr.error(data);
			}
				
				$('#update_firm_change_status_text').html('Activate User');
				$('#update_firm_change_status_text').attr("onclick", "ChangeDeactivateText('"+firm_user_id+"','"+firm_id+"');");
				  if ( $( "#firm-user-grid-pjax" ).length ) {
      				
      				 if ( $( "#search-pjax-div" ).length) {
						  $.pjax.reload({container:'#firm-user-grid-pjax', timeout: 2000,replace: false, url: staticurl+"user/firmdetails?id="+firm_id,enablePushState:false});
      					$("#firm-user-grid-pjax").on("pjax:end", function() { 
							 $.pjax.reload({container:'#search-pjax-div', timeout: 2000});
      					});
						 
                   }else{
					    $.pjax.reload({container:'#firm-user-grid-pjax'});
				   }
                   }
				/*if ( $( "#firm-user-grid-pjax" ).length ) {
				$.pjax.reload({container:'#firm-user-grid-pjax'});
				}*/
			}
		}else
		{
			toastr.error('Some error occured');			
		}		
    },	
  
  });
 
}



function ChangelookStatus(look_id,type){
 
   var data= 'look_id='+look_id+'&status='+type;
   
  $.ajax({
	type: 'POST',
    url: staticurl + "masterdata/changelookstatus",
	data:data,
	processData:false,
	//dataType:'json',
	success:function(data){
		
		//alert(response);
		//return false;
		if (data) {
			if(type == 'A1'){		
				toastr.success('Status changed Successfully');
				//$('#update_firm_change_status_text').html('Deactivate User');
				//$('#update_firm_change_status_text').attr("onclick", "ChangeactivateclientText('"+client_user_id+"','"+client_id+"');");
				if ( $( "#look-user-grid-pjax" ).length ) {
							//alert(staticurl);
	           				 
	           				if ( $( "#look-user-grid-pjax" ).length ) {
	           				 $.pjax.reload({container:'#look-user-grid-pjax', timeout: 4000});
	           				//	$.pjax.reload({container:'#look-user-grid-pjax', timeout: 4000,replace: false, url: staticurl+"user/clientdetails?id="+client_id,enablePushState:false});
	           					//$("#look-user-grid-pjax").on("pjax:end", function() { 
								// $.pjax.reload({container:'#search-pjax-div', timeout: 4000});
	           					//});
							 }else{
								   $.pjax.reload({container:'#look-user-grid-pjax'});
							 }
	                        }
				//location.reload();
			}else if(type == 'D2'){
				toastr.success('User Deactivated Successfully');
				//$('#update_firm_change_status_text').html('Activate User');
				//$('#update_firm_change_status_text').attr("onclick", "ChangeDeactivateclientText('"+client_user_id+"','"+client_id+"');");
				//location.reload();
				if ( $( "#look-user-grid-pjax" ).length ) {
					//alert(staticurl);
       				 
       				if ( $( "#look-user-grid-pjax" ).length ) {
       				 $.pjax.reload({container:'#look-user-grid-pjax', timeout: 4000});
       				//	$.pjax.reload({container:'#look-user-grid-pjax', timeout: 4000,replace: false, url: staticurl+"user/clientdetails?id="+client_id,enablePushState:false});
       					//$("#look-user-grid-pjax").on("pjax:end", function() { 
						// $.pjax.reload({container:'#search-pjax-div', timeout: 4000});
       					//});
					 }else{
						   $.pjax.reload({container:'#look-user-grid-pjax'});
					 }
                    }
			}
		}else
		{
			toastr.error('Some error occured');			
		}		
    },	
  
  });
 
}



function ChangeAdminUserStatus(admin_user_id,type){
 
   var data= 'admin_user_id='+admin_user_id+'&status='+type;
   
  $.ajax({
	type: 'POST',
    url: staticurl + "user/deactivateadmin",
	data:data,
	processData:false,
	//dataType:'json',
	success:function(data){
		//alert(data);
		if (data) {
			if(type == 'A1'){		
				toastr.success('User Activated Successfully');
				$('#active_admin_user_text').html('Deactivate User');
				$('#active_admin_user_text').attr("onclick", "ChangeadminactivateText('"+admin_user_id+"');");
				if ( $( "#search-pjax-div" ).length ) {
				 $.pjax.reload({container:'#search-pjax-div', timeout: 4000});
				}
			}else if(type == 'D2'){
				toastr.success('User Deactivated Successfully');
				$('#active_admin_user_text').html('Activate User');
				$('#active_admin_user_text').attr("onclick", "ChangeadminDeactivateText('"+admin_user_id+"');");
				if ( $( "#search-pjax-div" ).length ) {
				 $.pjax.reload({container:'#search-pjax-div', timeout: 4000});
				}
			}
		}else
		{
			toastr.error('Some error occured');			
		}		
    },	
  
  });
 
}



function deletePlanyear(plan_year_id){
	
	  var data= 'plan_year_id='+plan_year_id;
	   
	  $.ajax({
		type: 'POST',
	    url: staticurl + "dashboard/deleteplanyear",
		data:data,
		processData:false,
		dataType:'json',
		success:function(response){
			//alert(response);
			//return false;
			if (response) {
				if(response.success){		
					toastr.success(response.success);
					location.reload();
				}else if(response.error){
					toastr.success(response.error);
				} 
			}else
			{
				toastr.error('Some error occured');			
			}		
	    },	
	  
	  });
	 
}


function ChangeClientUserStatus(client_user_id,type,client_id){
 
   var data= 'client_user_id='+client_user_id+'&status='+type;
   
  $.ajax({
	type: 'POST',
    url: staticurl + "user/changeclientuserstatus",
	data:data,
	processData:false,
	//dataType:'json',
	success:function(data){
		//alert(data);
		if (data) {
			if(type == 'A1'){		
				toastr.success('User Activated Successfully');
				$('#update_firm_change_status_text').html('Deactivate User');
				$('#update_firm_change_status_text').attr("onclick", "ChangeactivateclientText('"+client_user_id+"','"+client_id+"');");
				if ( $( "#client-user-grid-pjax" ).length ) {
							//alert(staticurl);
	           				 
	           				if ( $( "#search-pjax-div" ).length ) {
	           					$.pjax.reload({container:'#client-user-grid-pjax', timeout: 4000,replace: false, url: staticurl+"user/clientdetails?id="+client_id,enablePushState:false});
	           					$("#client-user-grid-pjax").on("pjax:end", function() { 
								 $.pjax.reload({container:'#search-pjax-div', timeout: 4000});
	           					});
							 }else{
								   $.pjax.reload({container:'#client-user-grid-pjax'});
							 }
	                        }
				//location.reload();
			}else if(type == 'D2'){
				toastr.success('User Deactivated Successfully');
				$('#update_firm_change_status_text').html('Activate User');
				$('#update_firm_change_status_text').attr("onclick", "ChangeDeactivateclientText('"+client_user_id+"','"+client_id+"');");
				//location.reload();
				if ( $( "#client-user-grid-pjax" ).length ) {
							//alert(staticurl);
	           				
	           				if ( $( "#search-pjax-div" ).length ) {
	           					 $.pjax.reload({container:'#client-user-grid-pjax', timeout: 4000,replace: false, url: staticurl+"user/clientdetails?id="+client_id,enablePushState:false});
	           					$("#client-user-grid-pjax").on("pjax:end", function() { 
								 $.pjax.reload({container:'#search-pjax-div', timeout: 4000});
	           					});
							 }else{
								   $.pjax.reload({container:'#client-user-grid-pjax'});
							 }
	                        }
			}
		}else
		{
			toastr.error('Some error occured');			
		}		
    },	
  
  });
 
}



function ChangeFirmStatus(firm_id,type){
 
   var data= 'firm_id='+firm_id+'&status='+type;
   
  $.ajax({
	type: 'POST',
    url: staticurl + "user/changefirmstatus",
	data:data,
	processData:false,
	//dataType:'json',
	success:function(data){
		if (data) {
			if(type == 'A1'){		
				toastr.success('Firm Activated Successfully');
				$('#firm_change_status_label').html('Deactivate Firm');
				$('#firm_change_status_label').attr("onclick", "deactivateFirm('"+firm_id+"');");
				 $.pjax.reload({container:'#search-pjax-div', timeout: 4000});
			}else if(type == 'D2'){
				toastr.success('Firm Deactivated Successfully');
				$('#firm_change_status_label').html('Activate Firm');
				$('#firm_change_status_label').attr("onclick", "activateFirm('"+firm_id+"');");
				 $.pjax.reload({container:'#search-pjax-div', timeout: 4000});
			}
		}else
		{
			toastr.error('Some error occured');			
		}		
    },	
  
  });
 
}






function getFirmDetails(firm_user_id){
	
	var data = 'firm_user_id='+firm_user_id;

	 $.ajax({
			type: 'GET',
		    url: staticurl + "user/getfirmdetails",
			data:data,
			processData:false,
			dataType:'json',
			success:function(data){
				//console.log(data);
				$('#update_firm_first_name').val(data[0]['first_name']);
				$('#update_firm_last_name').val(data[0]['last_name']);
				$('#update_firm_job_title').val(data[0]['title']);
				$('#update_firm_email_id').val(data[0]['user']['username']);
				$('#update_firm_phone').val(data[0]['phone']);
				$('#update_firm_extension').val(data[0]['extension']);
				$('#update_firm_mobile').val(data[0]['cellular']);
				$('#update_firm_user_for_firm').val(data[0]['firm_user_id']);
				if(data[0]['is_primary'] == 1){
					$("#update_firm_primary_contact").attr('checked','checked');
				}
				if(data[0]['is_billing'] == 1){
					$("#update_firm_billing_contact").attr('checked','checked');
				}
				$('#update_firm_primary_contact').val(data[0]['is_primary']);
				$('#update_firm_billing_contact').val(data[0]['is_billing']);
				if(data[0]['is_active'] == 1){
					$('#update_firm_change_status_text').html('Deactivate User');
					$('#update_firm_change_status_text').attr("onclick", "ChangeactivateText('"+firm_user_id+"');");
				}
				else if(data[0]['is_active'] == 0){
					$('#update_firm_change_status_text').html('Activate User');
					$('#update_firm_change_status_text').attr("onclick", "ChangeDeactivateText('"+firm_user_id+"');");
				}
								
		    },	
		  
		  });
}


function resetchangepassword() {
	$('#current-password').val('');
	$('#new-password').val('');
	$('#new-confirm-password').val('');

	document.getElementById("new-password").style.borderColor = "";
	document.getElementById("new-confirm-password").style.borderColor = "";
	document.getElementById("current-password").style.borderColor = "";

	document.getElementById("current-password-error").innerHTML = "";
	document.getElementById("confirm-password-error").innerHTML = "";
	document.getElementById("new-password-error").innerHTML = "";

}


function changepassword() {
	if (document.getElementById("current-password").value == '') {
		document.getElementById("current-password").style.borderColor = "red";
		document.getElementById("current-password-error").innerHTML = "Current Password required";
		document.getElementById("current-password").focus();
		return false;
	} else {
		document.getElementById("current-password").style.borderColor = "";
		document.getElementById("current-password-error").innerHTML = "";
	}

	if (document.getElementById("new-password").value == '') {
		document.getElementById("new-password").style.borderColor = "red";
		document.getElementById("new-password-error").innerHTML = "New Password required";
		document.getElementById("new-password").focus();
		return false;
	} else {
		
		// set password variable
		var pswd = $('#new-password').val();

		//validate the length
		if (pswd.length < 8) {
			$('#length').removeClass('valid').addClass('invalid');
			document.getElementById("new-password").style.borderColor = "red";
			document.getElementById("new-password").focus();
			$('#pswd_info').show();
			return false;
		} else {
			$('#length').removeClass('invalid').addClass('valid');
			document.getElementById("new-password").style.borderColor = "";
			$('#pswd_info').hide();
		}

		//validate letter
		if (pswd.match(/[A-z]/)) {
			$('#letter').removeClass('invalid').addClass('valid');
			document.getElementById("new-password").style.borderColor = "";
			$('#pswd_info').hide();
			
		} else {
			$('#letter').removeClass('valid').addClass('invalid');
			document.getElementById("new-password").style.borderColor = "red";
			document.getElementById("new-password").focus();
			$('#pswd_info').show();
			return false;
		}

		//validate uppercase letter
		if (pswd.match(/[A-Z]/)) {
			$('#capital').removeClass('invalid').addClass('valid');
			document.getElementById("new-password").style.borderColor = "";
			$('#pswd_info').hide();
		} else {
			$('#capital').removeClass('valid').addClass('invalid');
			document.getElementById("new-password").style.borderColor = "red";
			document.getElementById("new-password").focus();
			$('#pswd_info').show();
			return false;
		}

		//validate special character
		if (pswd.match(/[@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\? ]/)) {
			$('#specialchar').removeClass('invalid').addClass('valid');
			document.getElementById("new-password").style.borderColor = "";
			$('#pswd_info').hide();
		} else {
			$('#specialchar').removeClass('valid').addClass('invalid');
			document.getElementById("new-password").style.borderColor = "red";
			document.getElementById("new-password").focus();
			$('#pswd_info').show();
			return false;
		}

		//validate number
		if (pswd.match(/\d/)) {
			$('#number').removeClass('invalid').addClass('valid');
			document.getElementById("new-password").style.borderColor = "";
			$('#pswd_info').hide();
		} else {
			$('#number').removeClass('valid').addClass('invalid');
			document.getElementById("new-password").style.borderColor = "red";
			document.getElementById("new-password").focus();
			$('#pswd_info').show();
			return false;
		}
		
		document.getElementById("new-password").style.borderColor = "";
		document.getElementById("new-password-error").innerHTML = "";
	}
	
	
	

	if (document.getElementById("new-confirm-password").value == '') {
		document.getElementById("new-confirm-password").style.borderColor = "red";
		document.getElementById("confirm-password-error").innerHTML = "Confirm Password required";
		document.getElementById("new-confirm-password").focus();
		return false;
	} else {
		document.getElementById("new-confirm-password").style.borderColor = "";
		document.getElementById("confirm-password-error").innerHTML = "";
	}

	if (document.getElementById("new-confirm-password").value != document
			.getElementById("new-password").value) {
		document.getElementById("new-password").style.borderColor = "red";
		document.getElementById("new-confirm-password").style.borderColor = "red";
		document.getElementById("confirm-password-error").innerHTML = "Password and Confirm Password must match.";
		document.getElementById("new-confirm-password").focus();
		return false;
	} else {
		document.getElementById("new-password").style.borderColor = "";
		document.getElementById("new-confirm-password").style.borderColor = "";
		document.getElementById("confirm-password-error").innerHTML = "";

	}

	var datastr = $('#change-password-form').serialize();
	var curl = staticurl + 'site/change-password?' + datastr;
	
	$
			.ajax({
				type : 'GET',
				url : curl,
				data : datastr,
				dataType : "json",

				success : function(response) {

					if (response['fail']) {
						if (response['fail']['oldpass']) {

							document.getElementById("current-password").style.borderColor = "red";
							document.getElementById("current-password-error").innerHTML = response['fail']['oldpass'];
							document.getElementById("current-password").focus();

						}

						if (response['fail']['repeatnewpass']) {

							document.getElementById("new-confirm-password").style.borderColor = "red";
							document.getElementById("new-password").style.borderColor = "red";
							document.getElementById("confirm-password-error").innerHTML = response['fail']['repeatnewpass'];
							document.getElementById("new-confirm-password")
									.focus();

						}
					} else {
						toastr.success('Password has been successfully changed')
						resetchangepassword();
						$('#myModal-change-pswd').modal('hide');
					}

				}
			});

}


 //$('body').on('beforeSubmit', 'form#form_add_client_user', function () {
//		 	var form = $(this);
 $('body').on('click', '#form_add_client_user_button', function () {
		 	var form = $('form#form_add_client_user');
		 	// return false if form still have some validation errors
		 	if (form.find('.has-error').length) {
		 		return false;
		 	}
			    var formData = new FormData($("#form_add_client_user")[0]);
				
				  var client_id = '';
			    //check for client id
				  client_id = $('form#form_add_client_user').find('input[name="SupportVariable[client_id]"]').val();
				  if (client_id==undefined || client_id=='') {
		    	
			    	toastr.success('Client id missing.');
			    	return false;
		    	}
				
		 	// submit form
			$("#loading-indicator-client").show();
		 	$.ajax({
		 		url:  form.attr('action'),
		 		type: 'post',
		 		data: formData,
				enctype: 'multipart/form-data',
		 		success: function (response) {
		 			if(response=='add-success') 
                        {
						toastr.success('Client user details added successfully');
                        $('#add_client_user').modal('hide');
					//	location.reload();
					
						if ( $( "#client-user-grid-pjax" ).length ) {
							
	           				
	           				if ( $( "#search-pjax-div" ).length ) {
	           					 $.pjax.reload({container:'#client-user-grid-pjax', timeout: 4000,replace: false, url: staticurl+"user/clientdetails?id="+client_id,enablePushState:false});
	           					$("#client-user-grid-pjax").on("pjax:end", function() { 
								 $.pjax.reload({container:'#search-pjax-div', timeout: 4000});
	           					});
							 }else{
								   $.pjax.reload({container:'#client-user-grid-pjax'});
							 }
							
           					
	                        }
	           				else
	           				{
	           				if ( $( "#search-pjax-div" ).length ) { 
								 $.pjax.reload({container:'#search-pjax-div', timeout: 4000}); 
							 }else{
								 location.reload();
							 }
	           				}
							
						}
						else if(response=='update-success')
                        {
						toastr.success('Client user details updated successfully');
                        $('#add_client_user').modal('hide');
						   if ( $( "#client-user-grid-pjax" ).length) {
							   //	alert(staticurl);
           				if ( $( "#search-pjax-div" ).length ) {
								
								 $.pjax.reload({container:'#client-user-grid-pjax', timeout: 2000,replace: false, url: staticurl+"user/clientdetails?id="+client_id,enablePushState:false});
           				
           					$("#client-user-grid-pjax").on("pjax:end", function() { 
							 $.pjax.reload({container:'#search-pjax-div', timeout: 2000});
           					});
						 }else
						 {
							 
							  $.pjax.reload({container:'#client-user-grid-pjax'});
							 
						 }
						 
						
						 
                        }
           				else
           				{
           				if ( $( "#search-pjax-div" ).length ) { 
								 $.pjax.reload({container:'#search-pjax-div', timeout: 4000}); 
							 }else{
								 location.reload();
							 }
           				}
						
						//location.reload();
						}
						
						else{
                      	  $.each(response, function(key, val) {
                               $('#'+key).after('<div class="help-block">'+val+'</div>');
							   $('#'+key).closest(".form-group").removeClass('has-success');
                               $('#'+key).closest(".form-group").addClass('has-error');
                               });
                        }
					$("#loading-indicator-client").hide();
		 		},
				cache: false,
		        contentType: false,
		        processData: false
		 	});
		 	return false;
		 });

		 	 // for firm user update /add
		 // $('body').on('beforeSubmit', 'form#add_firm_user', function () {
		 //	var form = $(this);
		  $('body').on('click', '#add_firm_user_button', function () {
		 	var form = $('form#add_firm_user');
		 	// return false if form still have some validation errors
		 	if (form.find('.has-error').length) {
		 		return false;
		 	}
			    var formData = new FormData($("#add_firm_user")[0]);
			    var firm_id = '';
			    
			    firm_id = $('form#add_firm_user').find('input[name="SupportVariable[firm_id]"]').val();
				  if (firm_id==undefined || firm_id=='') {
					toastr.success('Firm id missing.');
			    	return false;
		    	}
			   
			    
		 	// submit form
			$("#loading-indicator-firm-user").show();
		 	$.ajax({
		 		url:  form.attr('action'),
		 		type: 'post',
		 		data: formData,
				enctype: 'multipart/form-data',
		 		success: function (response) {
		 			if(response=='add-success')
                        {
						toastr.success('Firm user details added successfully');
						$('#create_firm_user').modal('hide');
						
						if ( $( "#firm-user-grid-pjax" ).length ) {
	           				
	           				if ( $( "#search-pjax-div" ).length ) {
	           					 $.pjax.reload({container:'#firm-user-grid-pjax', timeout: 4000,replace: false, url: staticurl+"user/firmdetails?id="+firm_id,enablePushState:false});
	           					$("#firm-user-grid-pjax").on("pjax:end", function() { 
								 $.pjax.reload({container:'#search-pjax-div', timeout: 4000});
	           					});
							 }else{
								   $.pjax.reload({container:'#firm-user-grid-pjax'});
							 }
							
	                        }
	           				else
	           				{
	           				if ( $( "#search-pjax-div" ).length ) { 
								 $.pjax.reload({container:'#search-pjax-div', timeout: 4000}); 
							 }else{
								 location.reload();
							 }
	           				}
							
						}
						else if(response=='update-success')
                        {
						toastr.success('Firm user details updated successfully');
                        $('#create_firm_user').modal('hide');
                        if ( $( "#firm-user-grid-pjax" ).length ) {
           				
           				if ( $( "#search-pjax-div" ).length ) {
           					 $.pjax.reload({container:'#firm-user-grid-pjax', timeout: 2000,replace: false, url: staticurl+"user/firmdetails?id="+firm_id,enablePushState:false});
           					$("#firm-user-grid-pjax").on("pjax:end", function() { 
							 $.pjax.reload({container:'#search-pjax-div', timeout: 2000});
           					});
						 }else{
							  $.pjax.reload({container:'#firm-user-grid-pjax'});
						 }
					
						 
                        }
           				else
           				{
           				if ( $( "#search-pjax-div" ).length ) { 
								 $.pjax.reload({container:'#search-pjax-div', timeout: 4000}); 
							 }else{
								 location.reload();
							 }
           				}
						}
						
						else{
                      	  $.each(response, function(key, val) {
                               $('#'+key).after('<div class="help-block">'+val+'</div>');
							   $('#'+key).closest(".form-group").removeClass('has-success');
                               $('#'+key).closest(".form-group").addClass('has-error');
                               });
                        }
					$("#loading-indicator-firm-user").hide();
		 		},
				cache: false,
		        contentType: false,
		        processData: false
		 	});
		 	return false;
		 });

		 
 //$('body').on('beforeSubmit', 'form#update_admin_user', function () {
	//	 	var form = $(this);
			 
 $('body').on('click', '#update_admin_user_button', function () {
		 	var form = $('form#update_admin_user');
		 	// return false if form still have some validation errors
		 	if (form.find('.has-error').length) {
		 		return false;
		 	}
			    var formData = new FormData($("#update_admin_user")[0]);
		 	// submit form
			$("#loading-indicator").show();
		 	$.ajax({
		 		url:  form.attr('action'),
		 		type: 'post',
		 		data: formData,
				enctype: 'multipart/form-data',
		 		success: function (response) {
					
					if(response['user-username']){
		 				$.each(response, function(key, val) {
	                        $('#'+key).after('<div class="help-block">'+val+'</div>');
							   $('#'+key).closest(".form-group").removeClass('has-success');
	                        $('#'+key).closest(".form-group").addClass('has-error');
	                        });
		 			}else if(response=='success'){
		 				toastr.success('Admin Details updated successfully');
                        $('#update_admin').modal('hide');
							
	           				if ( $( "#search-pjax-div" ).length ) {
	           					 //$.pjax.reload({container:'#client-user-grid-pjax', timeout: 4000,replace: false, url: staticurl+"user/clientdetails?id="+client_id,enablePushState:false});
	           				//	$("#client-user-grid-pjax").on("pjax:end", function() { 
								 $.pjax.reload({container:'#search-pjax-div', timeout: 4000});
	           				//	});
							 }else{
								 location.reload();
							 }
							
           					
	                      
					
		 			}else{
						toastr.error(response);
						}
						
				/*	var is_json = false;
		 			try {
		 			    json = $.parseJSON(response);
		 			    is_json = true;
		 			   
		 			} catch (e) {
		 			    // not json
		 			}
					
					if(is_json ==true)
		 			{
		 				$.each(response, function(key, val) {
	                        $('#'+key).after('<div class="help-block">'+val+'</div>');
							   $('#'+key).closest(".form-group").removeClass('has-success');
	                        $('#'+key).closest(".form-group").addClass('has-error');
	                        });
		 			}else{
						
						if(response=='success')
                        {
						toastr.success('Admin Details updated successfully');
                        $('#update_admin').modal('hide');
						
						location.reload();
						
						}else{
						toastr.error(response);
						}
						
					}*/
		 			
					$("#loading-indicator").hide();
		 		},
				cache: false,
		        contentType: false,
		        processData: false
		 	});
		 	return false;
		 });
		 
		 
		  
 //$('body').on('beforeSubmit', 'form#firm_details', function () {
	// 	var form = $(this);
	$('body').on('click', '#firm_details_button', function () {
	 	var form = $('form#firm_details');
	 	// return false if form still have some validation errors
	 	if (form.find('.has-error').length) {
	 		return false;
	 	}
		    var formData = new FormData($("#firm_details")[0]);
	 	// submit form
		$("#loading-user-indicator").show();
	 	$.ajax({
	 		url:  form.attr('action'),
	 		type: 'post',
	 		data: formData,
			enctype: 'multipart/form-data',
	 		success: function (response) {
	 				
	 				if (response.error) {
						
						toastr.error(response.error);
						
					} else if (response.errorarray) {

						$.each(response.errorarray, function(key, val) {

							$('#' + key).next('div.help-block').html(val);
							$('#' + key).closest(".form-group").removeClass(
									'has-success');
							$('#' + key).closest(".form-group").addClass(
									'has-error');
						});
						
					}else if (response.success) {
						
						//toastr.success(response.success);
		 				location.reload();
						
					}
		 			
				$("#loading-user-indicator").hide();
	 		},
			cache: false,
	        contentType: false,
	        processData: false
	 	});
	 	return false;
	 });
 
 
 
 		  
// $('body').on('beforeSubmit', 'form#forum_post', function () {
	// 	var form = $(this);
	$('body').on('click', '#forum_post_button', function () {
	 	var form = $('form#forum_post');
	 	// return false if form still have some validation errors
	 	if (form.find('.has-error').length) {
	 		return false;
	 	}
		    var formData = new FormData($("#forum_post")[0]);
	 	// submit form
		$("#loading-firm-details-indicator").show();
	 	$.ajax({
	 		url:  form.attr('action'),
	 		type: 'post',
	 		data: formData,
			enctype: 'multipart/form-data',
	 		success: function (response) {
	 				
	 				if (response.error) {
						
						$('#error-client').show();
						$('#error-client-body').html(response.error);
					
						$("#loading-firm-details-indicator").hide();
						
					} else if (response.errorarray) {

						$.each(response.errorarray, function(key, val) {

							$('#' + key).next('div.help-block').html(val);
							$('#' + key).closest(".form-group").removeClass(
									'has-success');
							$('#' + key).closest(".form-group").addClass(
									'has-error');
						});
						$("#loading-firm-details-indicator").hide();
					}else if (response.success) {
						
						window.location.href = response.success_link;
						
					}
		 			
				
	 		},
			cache: false,
	        contentType: false,
	        processData: false
	 	});
	 	return false;
	 });
 
 
 //check if string is json or not
 function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
		
	  return false;
    }
    return true;
}
 
 //$('body').on('beforeSubmit', 'form#client_details_search', function () {
	// 	var form = $(this);
	 $('body').on('click', '#client_details_search_button', function () {
	 	var form = $('form#client_details_search');	
		var is_error = false;
		  $(".module_check:checked").each(function () {
		        var data_id = $(this).attr('data-id');
		        $("#packages_block_"+data_id+" .client_package_selection").each(function(){
		        	if( $("#packages_block_"+data_id+" .client_package_selection").is(':checked')){
			      
			     }else{
			    	
			    	 is_error = true;
			    //	 return false;
			     }
		        });
		       
		        
		     });
	if (is_error == true) {
		 toastr.error('Please select package for the selected module.');
 		return false;
 	}
	
	 	// return false if form still have some validation errors
	 	if (form.find('.has-error').length) {
	 		return false;
	 	}
		    var formData = new FormData($("#client_details_search")[0]);
	 	// submit form
		$("#loading-client-indicator").show();
	 	$.ajax({
	 		url:  form.attr('action'),
	 		type: 'post',
	 		data: formData,
			enctype: 'multipart/form-data',
	 		success: function (response) {
				
	 				if (response.error) {
						
						toastr.error(response.error);
						
					} else if (response.errorarray) {

						$.each(response.errorarray, function(key, val) {

							$('#' + key).next('div.help-block').html(val);
							$('#' + key).closest(".form-group").removeClass(
									'has-success');
							$('#' + key).closest(".form-group").addClass(
									'has-error');
						});
						$("#loading-client-details-indicator").hide();
					}else if (response.success) {
						
						toastr.success(response.success);
		 				location.reload();
						
					}
		 			
		 			
		 			
				$("#loading-client-indicator").hide();
	 		},
			cache: false,
	        contentType: false,
	        processData: false
	 	});
	 	return false;
	 });
	 
	//$('body').on('beforeSubmit', 'form#client_details', function () {
	// 	var form = $(this);
		 $('body').on('click', '#client_details_button', function () {
	 	var form = $('form#client_details');	
		var is_error = false;
		  $(".module_check:checked").each(function () {
		        var data_id = $(this).attr('data-id');
		        $("#packages_block_"+data_id+" .client_package_selection").each(function(){
		        	if( $("#packages_block_"+data_id+" .client_package_selection").is(':checked')){
			      
			     }else{
			    	
			    	 is_error = true;
			    //	 return false;
			     }
		        });
		       
		        
		     });
	if (is_error == true) {
		 toastr.error('Please select package for the selected module.');
 		return false;
 	}
	
	
	 	// return false if form still have some validation errors
	 	if (form.find('.has-error').length) {
	 		return false;
	 	}
		    var formData = new FormData($("#client_details")[0]);
	 	// submit form
		$("#loading-client-details-indicator").show();
	 	$.ajax({
	 		url:  form.attr('action'),
	 		type: 'post',
	 		data: formData,
			enctype: 'multipart/form-data',
	 		success: function (response) {
				
					if (response.subscriptionerror) {
						$('#subscription_box').addClass('fieldset-error');
						$('#subscription_error').html(response.subscriptionerror);
						$("#loading-client-details-indicator").hide();
					}
	 				else if (response.error) {
						
						$('#error-client').show();
						$('#error-client-body').html(response.error);
					
						$("#loading-client-details-indicator").hide();
					} else if (response.errorarray) {

						$.each(response.errorarray, function(key, val) {

							$('#' + key).next('div.help-block').html(val);
							$('#' + key).closest(".form-group").removeClass(
									'has-success');
							$('#' + key).closest(".form-group").addClass(
									'has-error');
						});
						$("#loading-client-details-indicator").hide();
					} else if (response.success) {
						
						//$('#success-client').show();
						//$('#success-client-body').html(response.success);
						window.location.href = response.success_link;
						//window.open(response.success_link);
						
					}
		 			
				
	 		},
			cache: false,
	        contentType: false,
	        processData: false
	 	});
	 	return false;
	 });
	 
	  
	 
 //$('body').on('beforeSubmit', 'form#form_add_payment_history', function (e) {
//	 	var form = $(this);
 $('body').on('click', '#form_add_payment_history_button', function (e) {
	 	var form = $('form#form_add_payment_history');
	 	// return false if form still have some validation errors
	 	if (form.find('.has-error').length) {
	 		return false;
	 	}
		    var formData = new FormData($("#form_add_payment_history")[0]);
			
			
			
			  var subscription_id = '';
			    //check for subscription_id
			  subscription_id = $('form#form_add_payment_history').find('input[name="SupportVariable[subscription_id]"]').val();
			  if (subscription_id==undefined || subscription_id=='') {
			    	toastr.success('Subscription id missing.');
			    	return false;
		    	}
				
	 	// submit form
		$("#loading-client-payment-history").show();
	 	$.ajax({
	 		url:  form.attr('action'),
	 		type: 'post',
	 		data: formData,
			enctype: 'multipart/form-data',
	 		success: function (response) {
	 				
	 				var is_json = false;
		 			try {
		 			    json = $.parseJSON(response);
		 			    is_json = true;
		 			   
		 			} catch (e) {
		 			    // not json
		 			}
		 			
		 			if(is_json ==true)
		 			{
		 				$.each(response, function(key, val) {
	                        $('#'+key).after('<div class="help-block">'+val+'</div>');
							   $('#'+key).closest(".form-group").removeClass('has-success');
	                        $('#'+key).closest(".form-group").addClass('has-error');
	                        });
		 			}else{
		 			if(response=='success')
	                 {
		 				toastr.success('Payment history updated successfully');
		 				$('#add_payment_history').modal('hide');
						if ( $( "#pjax-pricing-id" ).length ) {
					//		 $("#add-payment").on("pjax:end", function() {
						
						 $.pjax.reload({container:'#pjax-pricing-id', timeout: 2000,replace: false, url: staticurl+"masterdata/paymenthistory?subscription_id="+subscription_id,enablePushState:false});
           // $.pjax.reload({container:"#pjax-pricing-id"});  //Reload GridView
     //   });
						//	$.pjax.reload({fragment:'#pjax-pricing-id',push: false, replaceRedirect: true });
						//$.pjax({container:'#payment-history-grid-container'});
						//$("#payment-history-grid-pjax").on("pjax:end", function() { 
							// $.pjax.reload({container:'#search-pjax-div', timeout: 2000});
							//return false;
           				//	});
						return false;
						}
		 				
					}
		 			else if(response=='error-no-subscription-id')
	                 {
		 				toastr.error('No subscription found');
		 			
	                 }
		 			else
		 				{
		 				toastr.error(response);
		 				}
		 			}
		 			
				$("#loading-client-payment-history").hide();
	 		},
			cache: false,
	        contentType: false,
	        processData: false
	 	});
	//	e.preventDefault();
	 	return false;
	 });