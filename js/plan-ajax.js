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

function resetPlan()
{
	
	//$("#add_plan_form").find("input,textarea,select,checkbox").val('').end();
	//$("#add_plan_form").find("div.help-block").text('').end();
	//$("#add_plan_form").find(".form-group").removeClass('has-error').end();
		
	/*$('#plan_year_title').val('');
	$('#plan_year_title').next('div.help-block').html('');
	$('#plan_year_title').closest(".form-group").removeClass('has-error');
	*/
	$('#plan_name').val('');
	$('#plan_name').next('div.help-block').html('');
	$('#plan_name').closest(".form-group").removeClass('has-error');
	
	$('#plan_type').val('');
	$('#plan_type').next('div.help-block').html('');
	$('#plan_type').closest(".form-group").removeClass('has-error');
	
	/*$('#start_date').val('');
	$('#start_date').next('div.help-block').html('');
	$('#start_date').closest(".form-group").removeClass('has-error');
	
	$('#end_date').val('');
	$('#end_date').next('div.help-block').html('');
	$('#end_date').closest(".form-group").removeClass('has-error');
	
	$('#plan_funding').val('');
	$('#plan_funding').next('div.help-block').html('');
	$('#plan_funding').closest(".form-group").removeClass('has-error');
	*/
	$('#is_default_plan').attr('checked', false); // Unchecks it
}

function savePlan()
{

	if (document.getElementById("plan_name").value == '') {
		$('#plan_name').next('div.help-block').html('Plan Name Required');
		document.getElementById("plan_name").focus();
		$('#plan_name').closest(".form-group").addClass('has-error');
		return false;
	}else if(checkAlpha(document.getElementById("plan_name").value)) {
		$('#plan_name').next('div.help-block').html('Please Enter Valid Name');
		document.getElementById("plan_name").focus();
		$('#plan_name').closest(".form-group").addClass('has-error');
		return false;
	}else {	
		$('#plan_name').next('div.help-block').html('');
		$('#plan_name').closest(".form-group").removeClass('has-error');
	}

	if (document.getElementById("plan_type").value == '') {
		$('#plan_type').next('div.help-block').html('Plan Type Required');
		document.getElementById("plan_type").focus();
		$('#plan_type').closest(".form-group").addClass('has-error');
		return false;
	} else {

		$('#plan_type').next('div.help-block').html('');
		$('#plan_type').closest(".form-group").removeClass('has-error');

	}

	var data = $('#add_plan_form').serialize();
	
	$.ajax({
		type: 'POST',
		url: staticurl + "dashboard/add-plan",
		data:data,
		processData:false,
		dataType:'json',
		success:function(response){
			
			
			if(response.error)
			{
				toastr.error(response.error);
				
			}
			else if(response.errorarray)
			{
			
			$.each(response.errorarray, function(key, val) {
				$('#'+key).next('div.help-block').html(val);
				$('#'+key).closest(".form-group").removeClass('has-success');
				$('#'+key).closest(".form-group").addClass('has-error');
			 });
			
			}else if(response.success)
			{
				toastr.success(response.success);
				$('#addplan').modal('hide');
				location.reload();
			}
			
			
			},	
  
  });



}


function PlanDetails()
{
var plan_id = $(".nav.nav-tabs.main-tab>li>a.active").attr("data-plan-id");

$("#add_plan_form_year").find("input,textarea,select,checkbox").val('').end();
	$("#add_plan_form_year").find("div.help-block").text('').end();
	$("#add_plan_form_year").find(".form-group").removeClass('has-error').end();
	
	
var data = 'plan_id='+plan_id;

$('#plan_name_year').html('&nbsp');
$('#plan_year_title_year').html('&nbsp');	
$('#plan_funding_year').val('');	
$('#plan_type_year').val('');	

$.ajax({
	type: 'POST',
    url: staticurl + "dashboard/plan-details",
	data:data,
	processData:false,
	dataType:'json',
	success:function(response){
		
			if(response.success)
			{
			$('#plan_name_year').val(response.success.plan_name);
			//$('#plan_year_title_year').val(response.success.plan_year_title);	
			//$('#plan_funding_year').val(response.success.plan_funding);
			if(response.success.plan_type == 1){
				$('#plan_funding_year').html('<option value="">Select</option>'
						+'<option value="1">Partially Self Insured</option>'
						+'<option value="2">Fully Insured</option>'
						+'<option value="3">Level Insured</option>');	
			}else{
				$('#plan_funding_year').html('<option value="">Select</option>'
						+'<option value="1">Self Insured</option>'
						+'<option value="2">Fully Insured</option>');	
			}
			
				
			$('#plan_type_year').val(response.success.plan_type);	
			$('#start_date_year').val('');	
			$('#end_date_year').val('');	
			$('#addplanyear').modal('show');
			}
			else if(response.error)
			{
				toastr.error(response.error);
				
			}
		
		},	
  
  });



}


function savePlanYear()
{

	if (document.getElementById("start_date_year").value == '') {
		$('#start_date_year').next('div.help-block').html('Start Date Required');
		document.getElementById("start_date_year").focus();
		$('#start_date_year').closest(".form-group").addClass('has-error');
		return false;
	} else {

		$('#start_date_year').next('div.help-block').html('');
		$('#start_date_year').closest(".form-group").removeClass('has-error');

	}


	if (document.getElementById("end_date_year").value == '') {
		$('#end_date_year').next('div.help-block').html('End Date Required');
		document.getElementById("end_date_year").focus();
		$('#end_date_year').closest(".form-group").addClass('has-error');
		return false;
	} else {

		$('#end_date_year').next('div.help-block').html('');
		$('#end_date_year').closest(".form-group").removeClass('has-error');

	}


	
	var plan_id = $(".nav.nav-tabs.main-tab>li>a.active").attr("data-plan-id");
	var data = $('#add_plan_form_year').serialize();
	data += '&plan_id='+plan_id;

	$.ajax({
		type: 'POST',
	    url: staticurl + "dashboard/add-plan-year",
		data:data,
		processData:false,
		dataType:'json',
		success:function(response){
			
			
			if(response.error)
			{
				toastr.error(response.error);
				
			}
			else if(response.errorarray)
			{
			
			$.each(response.errorarray, function(key, val) {
				
				$('#'+key+'_year').next('div.help-block').html(val);
	            $('#'+key+'_year').closest(".form-group").removeClass('has-success');
	            $('#'+key+'_year').closest(".form-group").addClass('has-error');
	         });
			
			}else if(response.success)
			{
				toastr.success(response.success);
				$('#addplanyear').modal('hide');
				// $.pjax.reload({container:'#plan-pjax-div', timeout: 2000});
				  var url = window.location.href;     
					 //  url += '&plan_id='+response.plan_id; 
			/*if (url.indexOf('?') > -1){
			   url += '&param=1'
			}else{
			   url += '?param=1'
			}*/
			window.location.href = url;
			//	 location.href= staticurl + "dashboard/add-plan-year"
				 
			}
			
			
			},	
	  
	  });


}

function getparticularplan(id){

	

	$("#updateplan").find("input,textarea,select,checkbox").val('').end();
	$("#updateplan").find("input,textarea,select,checkbox").parent().removeClass('has-error');
	$("#updateplan").find('.help-block').html('').end();
	
	var data='plan_id='+id+'';
	
	
	
	$.ajax({
		type: 'POST',
	    url: staticurl + "dashboard/getparticularplan",
		data:data,
		processData:false,
		dataType:'json',
		success:function(data){
		//	console.log(data);

			$('#update_plan_name').val(data.plan_name);
			//$('#update_plan_year_title').val(data.alternate_plan_name);
			$('#update_plan_type').val(data.plan_type);
			//$('#update_plan_funding').val(data.plan_funding);
			$('#update_is_default_plan').val(data.is_default);

			if(data.is_default==1){
				$('#update_is_default_plan').prop("checked",true);

				}else{
						$('#update_is_default_plan').prop("checked",false);

				}

			$("#update_plan_click").attr("onclick","updateparticularplan('"+id+"')");

			$("#updateplan").modal('show');
	
	    },


		})
}


function updateparticularplan(id){

	if (document.getElementById("update_plan_name").value == '') {
		$('#update_plan_name').next('div.help-block').html('Plan Name Required');
		document.getElementById("update_plan_name").focus();
		$('#update_plan_name').closest(".form-group").addClass('has-error');
		return false;
	} else if(checkAlpha(document.getElementById("update_plan_name").value)) {
		$('#update_plan_name').next('div.help-block').html('Please Enter Valid Name');
		document.getElementById("update_plan_name").focus();
		$('#update_plan_name').closest(".form-group").addClass('has-error');
		return false;
	}else {
		$('#update_plan_name').next('div.help-block').html('');
		$('#update_plan_name').closest(".form-group").removeClass('has-error');

	}
	
	
	/* if (document.getElementById("update_plan_year_title").value != '') {
	if(checkAlpha(document.getElementById("update_plan_year_title").value)) {
		$('#update_plan_year_title').next('div.help-block').html('Please Enter Valid Name');
		document.getElementById("update_plan_year_title").focus();
		$('#update_plan_year_title').closest(".form-group").addClass('has-error');
		return false;
	}
}*/


	var data=$("#update_plan_form").serialize()+'&plan_id='+id;
	

	
	$.ajax({
		type: 'POST',
	    url: staticurl + "dashboard/updateparticularplan",
		data:data,
		processData:false,
		dataType:'json',
		success:function(data){
			console.log(data);

			if(data.success!=undefined){
				toastr.success(data.success);
				$("#updateplan").modal('hide');
				location.reload();
				}else if(data.error!=undefined){
					toastr.error(data.error);
					}else{
						$("#updateplan").modal('hide');
					//	toastr.warning('Nothing got changed');

						}
		
	
	    },


		})
}