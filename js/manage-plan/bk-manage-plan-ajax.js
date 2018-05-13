var url = document.URL;

var array = url.split("/");

var base = array[3];

if (array[2] == 'localhost') {
	var staticurl = '/' + base
	// var url_action = array[6].split("?")[0];
} else {
	var staticurl = '/';
	// var url_action = array[5].split("?")[0]dfg;
}

var is_changed = false;
var already_click = false;
var load_element = '';
var load_main_element = '';

function nextButton(id) {
	switch (id) {

	case 1:
		$('#main-anchor-1').trigger('click');
		$("#anchor-pb-2").trigger('click');
		;
		break;
	case 2:
		$('#main-anchor-1').trigger('click');
		$("#anchor-pb-3").trigger('click');
		;
		break;
	case 3:
		$('#main-anchor-1').trigger('click');
		$("#anchor-pb-4").trigger('click');
		break;
	case 4:
		$('#main-anchor-1').trigger('click');
		$("#anchor-pb-5").trigger('click');
		break;
	case 5:
		$('#main-anchor-2').trigger('click');
		$("#anchor-pb-6").trigger('click');
		break;
	case 6:
		$('#main-anchor-2').trigger('click');
		$("#anchor-pb-7").trigger('click');
		break;
	case 7:
		$('#main-anchor-2').trigger('click');
		$("#anchor-pb-8").trigger('click');
		break;
	case 8:
		$('#main-anchor-2').trigger('click');
		$("#anchor-pb-9").trigger('click');
		break;
	case 9:
		$('#main-anchor-3').trigger('click');
		$("#anchor-pb-10").trigger('click');
		break;
	case 10:
		$('#main-anchor-3').trigger('click');
		$("#anchor-pb-11").trigger('click');
		break;
	case 11:
		$('#main-anchor-3').trigger('click');
		$("#anchor-pb-12").trigger('click');
		break;
	case 12:
		$('#main-anchor-3').trigger('click');
		$("#anchor-pb-13").trigger('click');
		break;
	case 13:
		$('#main-anchor-4').trigger('click');
		$("#anchor-pb-14").trigger('click');
		break;

	}
}
function previousButton(id) {
	switch (id) {

	case 1:
		$('#main-anchor-1').trigger('click');
		$("#anchor-pb-1").trigger('click');
		;
		break;
	case 2:
		$('#main-anchor-1').trigger('click');
		$("#anchor-pb-2").trigger('click');
		;
		break;
	case 3:
		$('#main-anchor-1').trigger('click');
		$("#anchor-pb-3").trigger('click');
		break;
	case 4:
		$('#main-anchor-1').trigger('click');
		$("#anchor-pb-4").trigger('click');
		break;
	case 5:
		$('#main-anchor-1').trigger('click');
		$("#anchor-pb-5").trigger('click');
		break;
	case 6:
		$('#main-anchor-2').trigger('click');
		$("#anchor-pb-6").trigger('click');
		break;
	case 7:
		$('#main-anchor-2').trigger('click');
		$("#anchor-pb-7").trigger('click');
		break;
	case 8:
		$('#main-anchor-2').trigger('click');
		$("#anchor-pb-8").trigger('click');
		break;
	case 9:
		$('#main-anchor-2').trigger('click');
		$("#anchor-pb-9").trigger('click');
		break;
	case 10:
		$('#main-anchor-3').trigger('click');
		$("#anchor-pb-10").trigger('click');
		break;
	case 11:
		$('#main-anchor-3').trigger('click');
		$("#anchor-pb-11").trigger('click');
		break;
	case 12:
		$('#main-anchor-3').trigger('click');
		$("#anchor-pb-12").trigger('click');
		break;
	case 13:
		$('#main-anchor-3').trigger('click');
		$("#anchor-pb-13").trigger('click');
		break;
	case 14:
		$('#main-anchor-4').trigger('click');
		$("#anchor-pb-13").trigger('click');
		break;

	}
}

/** **********PRINTING DIV************** */
function printDiv(id) {

	var divToPrint = document.getElementById(id);

	var newWin = window.open('', 'Print-Window');

	newWin.document.open();

	newWin.document.write('<html><body onload="window.print()">'
			+ divToPrint.innerHTML + '</body></html>');

	newWin.document.close();

	setTimeout(function() {
		newWin.close();
	}, 10);

}

$(document)
		.ready(
				function() {

					/** *******For Claim Trend Report********* */
					$(document).on(
							'click',
							'.report-view',
							function(e) {
								e.preventDefault();

								if (e.ctrlKey) {

									window.open($(this).attr('data-href'),
											'_blank');

								} else {

									var id = 'claim_trend_report_print';

									$('#claims_trend_report_modal').modal(
											'show').find('.modal-body').load(
											$(this).attr('data-href'));
									$('#print_btn').attr('onclick',
											'printDiv("' + id + '");');

								}

							});

					$(document)
							.on(
									'hidden.bs.modal',
									'#claims_trend_report_modal',
									function() {
										$('#claims_trend_report_modal')
												.find('.modal-body')
												.html(
														'<div class=\"load-gif\" id=\"\" style=\"position: inherit;\"><div class=\"procressing_plz_wait\"><img src=\"/images/default.gif\" /></div></div>');
									});

					/** *******For Year over Year Report********* */
					$(document).on(
							'click',
							'.year-over-year-report-view',
							function(e) {
								e.preventDefault();

								if (e.ctrlKey) {

									window.open($(this).attr('data-href'),
											'_blank');

								} else {
									$('#year_over_year_modal').modal('show')
											.find('.modal-body').load(
													$(this).attr('data-href'));
								}

							});

					$(document)
							.on(
									'hidden.bs.modal',
									'#year_over_year_modal',
									function() {
										$('#year_over_year_modal')
												.find('.modal-body')
												.html(
														'<div class=\"load-gif\" id=\"\" style=\"position: inherit;\"><div class=\"procressing_plz_wait\"><img src=\"/images/default.gif\" /></div></div>');
									});

					/** *******For Plan year claims Report********* */
					$(document).on(
							'click',
							'.plan-year-claims-report-view',
							function(e) {
								e.preventDefault();
								if (e.ctrlKey) {

									window.open($(this).attr('data-href'),
											'_blank');

								} else {

									$('#plan_year_claim_modal').modal('show')
											.find('.modal-body').load(
													$(this).attr('data-href'));
								}

							});

					$(document)
							.on(
									'hidden.bs.modal',
									'#plan_year_claim_modal',
									function() {
										$('#plan_year_claim_modal')
												.find('.modal-body')
												.html(
														'<div class=\"load-gif\" id=\"\" style=\"position: inherit;\"><div class=\"procressing_plz_wait\"><img src=\"/images/default.gif\" /></div></div>');
									});

					/** *******For Plan year total Report********* */
					$(document).on(
							'click',
							'.plan-year-total-report-view',
							function(e) {
								e.preventDefault();
								if (e.ctrlKey) {

									window.open($(this).attr('data-href'),
											'_blank');

								} else {

									$('#total_plan_year_claim_modal').modal(
											'show').find('.modal-body').load(
											$(this).attr('data-href'));

								}
							});

					$(document)
							.on(
									'hidden.bs.modal',
									'#total_plan_year_claim_modal',
									function() {
										$('#total_plan_year_claim_modal')
												.find('.modal-body')
												.html(
														'<div class=\"load-gif\" id=\"\" style=\"position: inherit;\"><div class=\"procressing_plz_wait\"><img src=\"/images/default.gif\" /></div></div>');
									});

					/** *******For Budget Report********* */
					$(document).on(
							'click',
							'.budget-report-view',
							function(e) {
								e.preventDefault();
								if (e.ctrlKey) {

									window.open($(this).attr('data-href'),
											'_blank');

								} else {

									$('#buget_report_modal').modal('show')
											.find('.modal-body').load(
													$(this).attr('data-href'));
								}

							});

					$(document)
							.on(
									'hidden.bs.modal',
									'#buget_report_modal',
									function() {
										$('#buget_report_modal')
												.find('.modal-body')
												.html(
														'<div class=\"load-gif\" id=\"\" style=\"position: inherit;\"><div class=\"procressing_plz_wait\"><img src=\"/images/default.gif\" /></div></div>');
									});

					/** *******For Network Perfomance Report********* */
					$(document).on(
							'click',
							'.network-report-view',
							function(e) {
								e.preventDefault();

								if (e.ctrlKey) {

									window.open($(this).attr('data-href'),
											'_blank');

								} else {
									$('#network_report_modal').modal('show')
											.find('.modal-body').load(
													$(this).attr('data-href'));
								}

							});

					$(document)
							.on(
									'hidden.bs.modal',
									'#network_report_modal',
									function() {
										$('#network_report_modal')
												.find('.modal-body')
												.html(
														'<div class=\"load-gif\" id=\"\" style=\"position: inherit;\"><div class=\"procressing_plz_wait\"><img src=\"/images/default.gif\" /></div></div>');
									});

					/** *******For Remainder Projection Report********* */
					$(document).on(
							'click',
							'.remainder-year-report-view',
							function(e) {
								e.preventDefault();
								if (e.ctrlKey) {

									window.open($(this).attr('data-href'),
											'_blank');

								} else {

									$('#remiander_year_modal').modal('show')
											.find('.modal-body').load(
													$(this).attr('data-href'));
								}

							});

					$(document).on(
							'click',
							'.spec_report_view',
							function(e) {
								e.preventDefault();
								if (e.ctrlKey) {

									window.open($(this).attr('data-href'),
											'_blank');

								} else {

									$('#spec_report_modal').modal('show').find(
											'.modal-body').load(
											$(this).attr('data-href'));
								}
							});

					$(document)
							.on(
									'hidden.bs.modal',
									'#remiander_year_modal',
									function() {
										$('#remiander_year_modal')
												.find('.modal-body')
												.html(
														'<div class=\"load-gif\" id=\"\" style=\"position: inherit;\"><div class=\"procressing_plz_wait\"><img src=\"/images/default.gif\" /></div></div>');
									});

					/** *******For Renewal projection Report********* */
					$(document).on(
							'click',
							'.renewal-year-report-view',
							function(e) {
								e.preventDefault();
								if (e.ctrlKey) {

									window.open($(this).attr('data-href'),
											'_blank');

								} else {

									$('#renewal_med_rx_modal').modal('show')
											.find('.modal-body').load(
													$(this).attr('data-href'));
								}

							});
					$(document)
							.on(
									'hidden.bs.modal',
									'#renewal_med_rx_modal',
									function() {
										$('#renewal_med_rx_modal')
												.find('.modal-body')
												.html(
														'<div class=\"load-gif\" id=\"\" style=\"position: inherit;\"><div class=\"procressing_plz_wait\"><img src=\"/images/default.gif\" /></div></div>');
									});

					/** *******For Pharmacy year over year Report********* */
					$(document).on(
							'click',
							'.pharmacy-report-view',
							function(e) {
								e.preventDefault();

								if (e.ctrlKey) {

									window.open($(this).attr('data-href'),
											'_blank');

								} else {
									$('#pharmacy_report_modal').modal('show')
											.find('.modal-body').load(
													$(this).attr('data-href'));
								}

							});
					$(document)
							.on(
									'hidden.bs.modal',
									'#pharmacy_report_modal',
									function() {
										$('#pharmacy_report_modal')
												.find('.modal-body')
												.html(
														'<div class=\"load-gif\" id=\"\" style=\"position: inherit;\"><div class=\"procressing_plz_wait\"><img src=\"/images/default.gif\" /></div></div>');
									});

					/** *******For Pharmacy Details Report********* */
					$(document).on(
							'click',
							'.pharmacy-performance-details-view',
							function(e) {
								e.preventDefault();

								if (e.ctrlKey) {

									window.open($(this).attr('data-href'),
											'_blank');

								} else {
									$('#pharmacy_performance_details_modal')
											.modal('show').find('.modal-body')
											.load($(this).attr('data-href'));
								}

							});

					$(document)
							.on(
									'hidden.bs.modal',
									'#pharmacy_performance_details_modal',
									function() {
										$('#pharmacy_performance_details_modal')
												.find('.modal-body')
												.html(
														'<div class=\"load-gif\" id=\"\" style=\"position: inherit;\"><div class=\"procressing_plz_wait\"><img src=\"/images/default.gif\" /></div></div>');
									});

					$(document)
							.on(
									'blur',
									'#network-2-1',
									function() {

										network_utilization = $('#network-2-1')
												.val();

										if (parseFloat(network_utilization) > 100) {
											$('#total_network_utilization_tr')
													.addClass('fieldset-error');
											$(
													'.network-perfomance-utilization-help-block')
													.html(
															'Network utilization cannot be greater than 100%. ');
											return false;
										} else {
											$('#total_network_utilization_tr')
													.removeClass(
															'fieldset-error');
											$(
													'.network-perfomance-utilization-help-block')
													.html('');
										}

									});

					$(document).on('keyup', '.calculate-amount', function() {

						Calculateamount();

					});

					$(document).on('keyup', '.plan-spend-calc', function() {

						calculatePlanspend();

					});

					$(document).on('keyup', '.pharmacy-sum', function() {

						CalculatePharmacy();

					});

					$(document).on('keyup', '.cal-mon-finance', function() {
						var item_id = $(this).attr('id');
						var id = item_id.split("-");
						var id_val = id[1];
						Calculatemonthlyfinancials(id_val);
					});
					/**
					 * ******This change function is for disabling already
					 * selected dropdown in contribution enrollment tab ********
					 */
					$(document)
							.on(
									'change',
									'.selecttiername',
									function() {

										var dataselect = $(this).attr(
												'data-select-id');
										// Get the selected options of all
										// positions
										var allSelected = $(
												".tiernameTypes-" + dataselect)
												.map(function() {
													return $(this).val();
												}).get();

										// set all enabled
										$(
												".tiernameTypes-" + dataselect
														+ " option")
												.removeAttr("disabled");

										// Disable selected options in other
										// positions
										$(
												".tiernameTypes-"
														+ dataselect
														+ " option:not(:selected):not([value=''])")
												.each(
														function() {
															if ($
																	.inArray(
																			$(
																					this)
																					.val(),
																			allSelected) != -1) {
																$(this)
																		.attr(
																				'disabled',
																				true);
															}
														});
									});

					/**
					 * ******This change function is for disabling already
					 * selected dropdown in renewal contribution enrollment tab
					 * ********
					 */
					$(document)
							.on(
									'change',
									'.selecttiername-renewal',
									function() {

										var dataselect = $(this).attr(
												'data-select-id');
										// Get the selected options of all
										// positions
										var allSelected = $(
												".tiernameTypes-renewal-"
														+ dataselect).map(
												function() {
													return $(this).val();
												}).get();

										// set all enabled
										$(
												".tiernameTypes-renewal-"
														+ dataselect
														+ " option")
												.removeAttr("disabled");

										// Disable selected options in other
										// positions
										$(
												".tiernameTypes-renewal-"
														+ dataselect
														+ " option:not(:selected):not([value=''])")
												.each(
														function() {
															if ($
																	.inArray(
																			$(
																					this)
																					.val(),
																			allSelected) != -1) {
																$(this)
																		.attr(
																				'disabled',
																				true);
															}
														});
									});
					/*
					 * $(document).on('change', '.additional-financial-claim',
					 * function () {
					 * 
					 *  // Get the selected options of all positions var
					 * allSelected =
					 * $(".additional-financial-claim").map(function () { return
					 * $(this).val(); }).get();
					 *  // set all enabled $(".additional-financial-claim
					 * option").removeAttr("disabled");
					 *  // Disable selected options in other positions
					 * $(".additional-financial-claim
					 * option:not(:selected):not([value=''])").each(function () {
					 * if ($.inArray($(this).val(), allSelected) != -1) {
					 * $(this).attr('disabled', true); } }); });
					 * 
					 */
					$(document)
							.on(
									'change',
									'.reinsurance-rates-claim',
									function() {

										// Get the selected options of all
										// positions
										var allSelected = $(
												".reinsurance-rates-claim")
												.map(function() {
													return $(this).val();
												}).get();

										// set all enabled
										$(".reinsurance-rates-claim option")
												.removeAttr("disabled");

										// Disable selected options in other
										// positions
										$(
												".reinsurance-rates-claim option:not(:selected):not([value=''])")
												.each(
														function() {
															if ($
																	.inArray(
																			$(
																					this)
																					.val(),
																			allSelected) != -1) {
																$(this)
																		.attr(
																				'disabled',
																				true);
															}
														});
									});
					/**
					 * ******This change function is for loadind tab content by
					 * ajax ********
					 */
					$(
							'#manage-plan-tabs li,#cost_projections_tab li,#input_monthly_financial_tab li,#reports-plan-tabs li')
							.click(
									function(e) {
										e.preventDefault();
										var element_id = $(this).closest(
												'.tab-pane').attr("id");
										load_main_element = $('li[href="#'
												+ element_id + '"]');

										if (is_changed == true
												&& already_click == true) {
											already_click = false;
											return false;

										} else if (is_changed == true) {

											load_element = this;
											$('#modal_confirm_dialog').modal(
													'show');

										} else if (is_changed == false) {

											AjaxLoadPage(this);
										}

									});

					$(document).on('click', '#modal_confirm_dialogYes',
							function(e) {

								$('#modal_confirm_dialog').modal('hide');
								is_changed = false;
								$('#lock_page_icon').hide();
								$(load_main_element).tab('show');
								AjaxLoadPage(load_element);
								load_main_element = '';

							});

					$(document).on('click', '#modal_confirm_dialogNo',
							function(e) {

								load_element = '';
								load_main_element = '';
								$('#modal_confirm_dialog').modal('hide');
							});

					/**
					 * *****function to check if any thing is changed in form
					 * and show alert if changed************
					 */
					$(document).on(
							'click',
							'.check-changed',
							function(e) {
								e.preventDefault();

								if (is_changed == false) {

									var pane = $(this);

									pane.tab('show');
									var clickId = $($(this).attr('href')).find(
											'ul li.active').attr('id');
									if (clickId != '' && clickId != undefined) {
										$("#" + clickId).trigger('click');
									}

								} else {
									var pane = $(this);
									// pane.tab('show');
									var clickId = $($(this).attr('href')).find(
											'ul li.active').attr('id');
									if (clickId != '' && clickId != undefined) {
										$("#" + clickId).trigger('click');
									}

								}

							});

					$('#anchor-pb-1').trigger('click');
				});

function AjaxLoadPage(element) {

	var url = $(element).attr("data-url");
	var href = $(element).attr("href");
	var pane = $(element);

	pane.tab('show');
	$(href)
			.html(
					'<div class="load-gif"  style="position: inherit;">'
							+ '<div class="procressing_plz_wait" style="margin: 7% auto;">'
							+ '<img class="" src="/../images/default.gif" />'
							+ '</div>'
							+ '</div></div><div class="modal-footer"></div>');

	// ajax load from data-url
	$.ajax({
		async : true,
		url : url,
		dataType : 'html',
		cache : true, // otherwise will get fresh copy every page load
		success : function(response) {

			// script loaded, do stuff!
			$(href).html(response);
			load_element = '';
			$(".price").maskMoney();
			$('.no-cents').mask("#,##0", {
				reverse : true
			});
			is_changed = false;
			$('#lock_page_icon').hide();

		},

	}).done(function() {
		$("[data-toggle=tooltip]").tooltip();
		$("[data-toggle=popover-hover]").popover({
			trigger : "manual",
			html : true,
			animation : false,

		}).on("mouseenter", function() {
			var _this = this;
			$(this).popover("show");
			$(".popover").on("mouseleave", function() {
				$(_this).popover('hide');
			});
		}).on("mouseleave", function() {
			var _this = this;
			setTimeout(function() {
				if (!$(".popover:hover").length) {
					$(_this).popover("hide");
				}
			}, 300);
		});

	});
	// load first tab content

}

/** *****Ajax function for saving plan basics tab******** */
$('body')
		.on(
				'beforeSubmit',
				'form#planbasics_form',
				function(e) {	
					var plan_funding ='';
					var formData = new FormData($(this)[0]);
					plan_funding = $('#planbasics_form').find('input[name="SupportVariable[plan_funding]"]').val();
					
					if (is_changed == true) {

						var form = $(this);

						var client_id = '';
						// check for client id
						if (plan_funding!='undefined' ||  plan_funding!='') {
							plan_year_id = $('#planbasics_form').find('input[name="SupportVariable[plan_year_id]"]').val();
								
						} else {
							toastr.error('Plan Year id missing.');
							return false;
						}

						if (($('#planbasics-network').val() != '')) {
							// console.log($(this).find('.adjustment-item-name').val());
							var result = checkAlpha($('#planbasics-network')
									.val());
							if (result) {
								$('.field-planbasics-network>div.help-block')
										.css("color", "#a94442");
								$('.field-planbasics-network>div.help-block')
										.html("Network must be alphanumeric.");
								$('#planbasics-network').css("border-color",
										"#a94442");
								document.getElementById("planbasics-network")
										.focus();
								return false;

							}
						}

						if (($('#planbasics-administrative_carrier').val() != '')) {
							// console.log($(this).find('.adjustment-item-name').val());
							var result = checkAlpha($(
									'#planbasics-administrative_carrier').val());
							if (result) {
								$(
										'.field-planbasics-administrative_carrier>div.help-block')
										.css("color", "#a94442");
								$(
										'.field-planbasics-administrative_carrier>div.help-block')
										.html(
												"Administrative carrier must be alphanumeric.");
								$('#planbasics-administrative_carrier').css(
										"border-color", "#a94442");
								document.getElementById(
										"planbasics-administrative_carrier")
										.focus();
								return false;

							}
						}

						if (($('#planbasics-pharmacy_benefit_manager').val() != '')) {
							// console.log($(this).find('.adjustment-item-name').val());
							var result = checkAlpha($(
									'#planbasics-pharmacy_benefit_manager')
									.val());
							if (result) {
								$(
										'.field-planbasics-pharmacy_benefit_manager>div.help-block')
										.css("color", "#a94442");
								$(
										'.field-planbasics-pharmacy_benefit_manager>div.help-block')
										.html(
												"Pharmacy benefit manager must be alphanumeric.");
								$('#planbasics-pharmacy_benefit_manager').css(
										"border-color", "#a94442");
								document.getElementById(
										"planbasics-pharmacy_benefit_manager")
										.focus();
								return false;

							}
						}

						$.ajax({
									url : form.attr('action'),
									type : 'post',
									data : formData,
									async : false,
									processData : false,
									success : function(response) {

										if (response.error) {
											toastr.error(response.error);

										} else if (response.errorarray) {

											$.each(
															response.errorarray,
															function(key, val) {

																$('#' + key).next('div.help-block').html(val);
																$('#' + key).closest(".form-group").removeClass('has-success');
																$('#' + key).closest(".form-group").addClass('has-error');
															});

										} else if (response.success) {
											// toastr.success(response.success);
											is_changed = false;
											$('#lock_page_icon').hide();
											if ((plan_funding == 'Partially Self Insured')
													|| (plan_funding == 'Self Insured')) {
												nextButton(1);
											} else {
												nextButton(2);
											}

										}

									},
									cache : false,
									contentType : false,
									processData : false

								});

					} else {
						if ((plan_funding == 'Partially Self Insured')
								|| (plan_funding == 'Self Insured')) {
							nextButton(1);
						} else {
							nextButton(2);
						}
					}

					return false;

				});

/** *****Ajax function for saving reinsurance tab******** */
$('body')
		.on(
				'beforeSubmit',
				'form#reinsurance_form',
				function() {

					if (is_changed == true) {
						var form = $(this);

						var formData = new FormData($(this)[0]);
						var client_id = '';
						var field_count = 1;
						var has_error = false;
						// check for client id
						if (formData.has('SupportVariable[plan_year_id]')) {
							plan_year_id = formData
									.get('SupportVariable[plan_year_id]');
						} else {
							toastr.error('Plan Year id missing.');
							return false;
						}

						if (($('#reinsurancedetails-reinsurance_carrier').val() != '')) {
							// console.log($(this).find('.adjustment-item-name').val());
							var result = checkAlpha($(
									'#reinsurancedetails-reinsurance_carrier')
									.val());
							if (result) {
								$(
										'.field-reinsurancedetails-reinsurance_carrier>div.help-block')
										.css("color", "#a94442");
								$(
										'.field-reinsurancedetails-reinsurance_carrier>div.help-block')
										.html(
												"Reinsurance carrier must be alphanumeric .");
								$('#reinsurancedetails-reinsurance_carrier')
										.css("border-color", "#a94442");
								document
										.getElementById(
												"reinsurancedetails-reinsurance_carrier")
										.focus();
								return false;

							}
						}

						var is_null = false;
						$(this)
								.find('#editable_reinsurance_rate')
								.find('tbody')
								.find('tr')
								.not(".no-reinsurance-block-div")
								.each(
										function(index) {

											// var
											// check_for_atleaast_one_field=false;
											for ( var i = 2; i <= 6; i++) {
												if ($(this).find(
														'#reinsurance-' + i
																+ '-'
																+ field_count)
														.val() == '') {

													is_null = true;
													// return false;
												}

											}

											if (is_null == true) {

												$(this)
														.closest('table')
														.next(
																'div.plan-help-block')
														.html(
																'Please fill all data in reinsurance rates row number '
																		+ field_count);

												has_error = true;
												return false;
											} else {
												$(this).closest('table').next(
														'div.plan-help-block')
														.html('');
												// $(this).removeClass('fieldset-error');
											}

											field_count++;
										});

						if (has_error) {
							return false;
						}
						$.ajax({
							url : form.attr('action'),
							type : 'post',
							data : formData,
							async : false,
							processData : false,
							success : function(response) {

								if (response.error) {
									toastr.error(response.error);

								} else if (response.errorarray) {

									$.each(response.errorarray, function(key,
											val) {

										$('#' + key).next('div.help-block')
												.html(val);
										$('#' + key).closest(".form-group")
												.removeClass('has-success');
										$('#' + key).closest(".form-group")
												.addClass('has-error');
									});

								} else if (response.success) {
									// toastr.success(response.success);
									is_changed = false;
									$('#lock_page_icon').hide();
									nextButton(2);

								}

							},
							cache : false,
							contentType : false,
							processData : false

						});
					} else {
						nextButton(2);
					}

					return false;

				});

/** *****Ajax function for saving cliam types******** */
$('body').on(
		'beforeSubmit',
		'form#claimtypestrack_form',
		function() {

			if (is_changed == true) {
				var form = $(this);

				var formData = new FormData($(this)[0]);
				var client_id = '';
				// check for client id
				if (formData.has('SupportVariable[plan_year_id]')) {
					plan_year_id = formData
							.get('SupportVariable[plan_year_id]');
				} else {
					toastr.error('Plan Year id missing.');
					return false;
				}

				$.ajax({
					url : form.attr('action'),
					type : 'post',
					data : formData,
					async : false,
					processData : false,
					success : function(response) {

						if (response.error) {
							toastr.error(response.error);

						} else if (response.errorarray) {

							$.each(response.errorarray, function(key, val) {

								$('#' + key).next('div.help-block').html(val);
								$('#' + key).closest(".form-group")
										.removeClass('has-success');
								$('#' + key).closest(".form-group").addClass(
										'has-error');
							});

						} else if (response.success) {
							// toastr.success(response.success);
							is_changed = false;
							$('#lock_page_icon').hide();
							nextButton(3);

						}

					},
					cache : false,
					contentType : false,
					processData : false

				});

			} else {
				nextButton(3);
			}

			return false;

		});

/** *****Ajax function for saving additional financial******** */
$('body')
		.on(
				'beforeSubmit',
				'form#additionalfinancial_form',
				function() {

					if (is_changed == true) {
						var form = $(this);
						var field_count = 1;
						var field_count_two = 1;
						var has_error = false;

						$(this)
								.find('#editable_reimbursementtrack')
								.find('tbody')
								.find('tr')
								.not(".no-claimAdjustements-tr-block")
								.each(
										function(index) {

											var is_null = false;

											if (($(this).find(
													'.adjustment-item-name')
													.val() == '' && $(this)
													.find(
															'.adjustment-financial-claim')
													.val() != '')
													|| ($(this)
															.find(
																	'.adjustment-item-name')
															.val() != '' && $(
															this)
															.find(
																	'.adjustment-financial-claim')
															.val() == '')) {
												is_null = true;
											}
											if (($(this).find(
													'.adjustment-item-name')
													.val() != '')) {
												// console.log($(this).find('.adjustment-item-name').val());
												var result = checkAlpha($(this)
														.find(
																'.adjustment-item-name')
														.val());
												if (result) {

													$(this)
															.closest('fieldset')
															.next(
																	'div.plan-help-block')
															.html(
																	'Item name must be alphanumeric in claims adjustments row number '
																			+ field_count);
													$(this).addClass(
															'fieldset-error');
													has_error = true;
													return false;

												}
											}

											if (is_null) {

												$(this)
														.closest('fieldset')
														.next(
																'div.plan-help-block')
														.html(
																'Please fill all data in claims adjustments row number '
																		+ field_count);
												$(this).addClass(
														'fieldset-error');
												has_error = true;
												return false;
											} else {
												$(this)
														.closest('fieldset')
														.next(
																'div.plan-help-block')
														.html('');
												$(this).removeClass(
														'fieldset-error');
											}

											field_count++;
										});

						$(this)
								.find('#editable_cost_track')
								.find('tbody')
								.find('tr')
								.not(".no-costItems-tr-block")
								.each(
										function(index) {
											if (($(this).find(
													'.additional-cost-item')
													.val() != '')) {
												// console.log($(this).find('.adjustment-item-name').val());
												var result = checkAlpha($(this)
														.find(
																'.additional-cost-item')
														.val());
												if (result) {

													$(this)
															.closest('fieldset')
															.next(
																	'div.plan-help-block')
															.html(
																	'Item name must be alphanumeric in additional cost items row number '
																			+ field_count_two);
													$(this).addClass(
															'fieldset-error');
													has_error = true;
													return false;

												}
											}
											field_count_two++;
										});

						if (has_error) {
							return false;
						}

						var formData = new FormData($(this)[0]);
						var client_id = '';
						// check for client id
						if (formData.has('SupportVariable[plan_year_id]')) {
							plan_year_id = formData
									.get('SupportVariable[plan_year_id]');
						} else {
							toastr.error('Plan Year id missing.');
							return false;
						}

						$.ajax({
							url : form.attr('action'),
							type : 'post',
							data : formData,
							async : false,
							processData : false,
							success : function(response) {

								if (response.error) {
									toastr.error(response.error);

								} else if (response.success) {
									// toastr.success(response.success);
									is_changed = false;
									$('#lock_page_icon').hide();
									nextButton(4);

								}

							},
							cache : false,
							contentType : false,
							processData : false

						});
					} else {
						nextButton(4);
					}

					return false;

				});

/** *****Ajax function for saving contribution enrollment******** */
$('body')
		.on(
				'beforeSubmit',
				'form#contribution_enrollment_form',
				function() {
					var formData = new FormData($(this)[0]);
					plan_funding = formData
							.get('SupportVariable[plan_funding]');
					if (is_changed == true) {
						var form = $(this);
						var field_count = 1;
						var has_error = false;
						$("#contribution_strategies")
								.find('fieldset')
								.each(
										function(index) {

											if ($(this).find(
													'.contribution-name').val() == '') {
												$(this)
														.find(
																'.contribution-name')
														.next('div.help-block')
														.html(
																'Contribution name required');
												$(this).find(
														'.contribution-name')
														.closest(".form-group")
														.addClass('has-error');
												$(this).find(
														'.contribution-name')
														.focus();
												has_error = true;
												return false;
											} else if (checkAlpha($(this).find(
													'.contribution-name').val())) {
												$(this)
														.find(
																'.contribution-name')
														.next('div.help-block')
														.html(
																'Contribution name must be alphanumeric ');
												$(this).find(
														'.contribution-name')
														.closest(".form-group")
														.addClass('has-error');
												$(this).find(
														'.contribution-name')
														.focus();
												has_error = true;
												return false;
											} else {
												$(this).find(
														'.contribution-name')
														.next('div.help-block')
														.html('');
												$(this).find(
														'.contribution-name')
														.closest(".form-group")
														.removeClass(
																'has-error');

												var fieldtiercount = 1;
												$(this)
														.find('tbody')
														.find('tr')
														.not(
																".no-contribution-block-div")
														.each(
																function(index) {

																	var is_null = false;
																	for ( var i = 2; i <= 4; i++) {
																		if ($(
																				this)
																				.find(
																						'#contribution'
																								+ field_count
																								+ '-'
																								+ i
																								+ '-'
																								+ fieldtiercount)
																				.val() == '') {
																			is_null = true;
																		}

																	}
																	if (is_null) {

																		$(this)
																				.closest(
																						'fieldset')
																				.next(
																						'div.plan-help-block')
																				.html(
																						'Please fill all data in Plan'
																								+ field_count
																								+ ' and Tier '
																								+ fieldtiercount);
																		$(this)
																				.addClass(
																						'fieldset-error');
																		has_error = true;
																		return false;
																	} else {
																		$(this)
																				.closest(
																						'fieldset')
																				.next(
																						'div.plan-help-block')
																				.html(
																						'');
																		$(this)
																				.removeClass(
																						'fieldset-error');
																	}

																	fieldtiercount++;

																});

											}

											field_count++;
										});

						if (has_error) {
							return false;
						}

						var formData = new FormData($(this)[0]);
						var client_id = '';
						// check for client id
						if (formData.has('SupportVariable[plan_year_id]')) {
							plan_year_id = formData
									.get('SupportVariable[plan_year_id]');
							plan_funding = formData
									.get('SupportVariable[plan_funding]');
						} else {
							toastr.error('Plan Year id missing.');
							return false;
						}

						$.ajax({
							url : form.attr('action'),
							type : 'post',
							data : formData,
							async : false,
							processData : false,
							success : function(response) {

								if (response.error) {
									toastr.error(response.error);

								} else if (response.success) {

									is_changed = false;
									$('#lock_page_icon').hide();

									if (plan_funding == 1) {
										nextButton(5);
									} else {
										nextButton(6);
									}

								}

							},
							cache : false,
							contentType : false,
							processData : false

						});

					} else {
						if (plan_funding == 1) {
							nextButton(5);
						} else {
							nextButton(6);
						}
					}

					return false;

				});

/** *****Ajax function for saving additional financial******** */
$('body')
		.on(
				'beforeSubmit',
				'form#renewalcostitem_form',
				function() {

					if (is_changed == true) {
						var form = $(this);
						var field_count = 1;
						var has_error = false;

						$(this)
								.find('#editable_renewal_cost_items')
								.find('tbody')
								.find('tr')
								.each(
										function(index) {

											var is_null = false;
											var valid_count = 0;
											$(this)
													.find(
															'input[type=text], textarea')
													.each(
															function() {

																if ($(this)
																		.val() != '') {
																	valid_count++;
																	is_null = true;
																}

															});

											if (is_null == true) {
												if ($(this)
														.find(
																'.renewal-cost-item-name')
														.val() == '') {

													$(this)
															.closest(
																	'#renewal_cost_items_div')
															.next(
																	'div.plan-help-block')
															.html(
																	'Item name is required in row number '
																			+ field_count);
													$(this).addClass(
															'fieldset-error');
													has_error = true;
													return false;

												} else {

													if ($(this)
															.find(
																	'.renewal-cost-item-name')
															.val() != ''
															&& checkAlpha($(
																	this)
																	.find(
																			'.renewal-cost-item-name')
																	.val())) {
														$(this)
																.closest(
																		'#renewal_cost_items_div')
																.next(
																		'div.plan-help-block')
																.html(
																		'Item name must be alphanumeric in renewal cost items row number '
																				+ field_count);
														$(this)
																.addClass(
																		'fieldset-error');
														has_error = true;
														return false;
													} else {
														$(this)
																.closest(
																		'#renewal_cost_items_div')
																.next(
																		'div.plan-help-block')
																.html('');
														$(this)
																.removeClass(
																		'fieldset-error');
													}

												}

												var Charges = '';
												var allowedCharges = $(this)
														.find(
																'.renewal-cost-item-estimated-renewal')
														.val();

												if (allowedCharges != '') {
													Charges = parseFloat(allowedCharges
															.replace(/\,/g, ""));
												}

												if (Charges == '') {
													$(this)
															.closest(
																	'#renewal_cost_items_div')
															.next(
																	'div.plan-help-block')
															.html(
																	'Estimated renewal is required in row number '
																			+ field_count);
													$(this).addClass(
															'fieldset-error');
													has_error = true;
													return false;

												} else {
													/*
													 * if(parseFloat(allowedCharges) >
													 * 100){
													 * $(this).closest('#renewal_cost_items_div').next('div.plan-help-block').html('Estimate
													 * renewal cannot be greater
													 * than 100% in renewal cost
													 * items row number
													 * '+field_count);
													 * $(this).addClass('fieldset-error');
													 * has_error = true; return
													 * false; } else{
													 * $(this).closest('#renewal_cost_items_div').next('div.plan-help-block').html('');
													 * $(this).removeClass('fieldset-error'); }
													 */
												}

											}
											field_count++;
										});

						if (has_error) {
							return false;
						}

						var formData = new FormData($(this)[0]);
						var client_id = '';
						// check for client id
						if (formData.has('SupportVariable[plan_year_id]')) {
							plan_year_id = formData
									.get('SupportVariable[plan_year_id]');
						} else {
							toastr.error('Plan Year id missing.');
							return false;
						}

						$.ajax({
							url : form.attr('action'),
							type : 'post',
							data : formData,
							async : false,
							processData : false,
							success : function(response) {

								if (response.error) {
									toastr.error(response.error);

								} else if (response.success) {
									// toastr.success(response.success);
									is_changed = false;
									$('#lock_page_icon').hide();
									nextButton(8);

								}

							},
							cache : false,
							contentType : false,
							processData : false

						});

					} else {
						nextButton(8);
					}

					return false;

				});

/** *****Ajax function for saving contribution enrollment******** */
$('body')
		.on(
				'beforeSubmit',
				'form#renewal_contribution_enrollment_form',
				function() {

					if (is_changed == true) {
						var form = $(this);
						var field_count = 1;
						var has_error = false;
						$("#renewal_contribution_strategies")
								.find('fieldset')
								.each(
										function(index) {

											if ($(this).find(
													'.contribution-name').val() == '') {
												$(this)
														.find(
																'.contribution-name')
														.next('div.help-block')
														.html(
																'Contribution name required');
												$(this).find(
														'.contribution-name')
														.closest(".form-group")
														.addClass('has-error');
												$(this).find(
														'.contribution-name')
														.focus();
												has_error = true;
												return false;
											} else if (checkAlpha($(this).find(
													'.contribution-name').val())) {
												$(this)
														.find(
																'.contribution-name')
														.next('div.help-block')
														.html(
																'Contribution name must be alphanumeric');
												$(this).find(
														'.contribution-name')
														.closest(".form-group")
														.addClass('has-error');
												$(this).find(
														'.contribution-name')
														.focus();
												has_error = true;
												return false;
											} else {
												$(this).find(
														'.contribution-name')
														.next('div.help-block')
														.html('');
												$(this).find(
														'.contribution-name')
														.closest(".form-group")
														.removeClass(
																'has-error');

												var fieldtiercount = 1;
												$(this)
														.find('tbody')
														.find('tr')
														.not(".no-block-div")
														.each(
																function(index) {

																	var is_null = false;
																	for ( var i = 2; i <= 4; i++) {
																		if ($(
																				this)
																				.find(
																						'#contributioncopy'
																								+ field_count
																								+ '-'
																								+ i
																								+ '-'
																								+ fieldtiercount)
																				.val() == '') {
																			is_null = true;
																		}

																	}
																	if (is_null) {

																		$(this)
																				.closest(
																						'fieldset')
																				.next(
																						'div.plan-help-block')
																				.html(
																						'Please fill all data in Plan'
																								+ field_count
																								+ ' and Tier '
																								+ fieldtiercount);
																		$(this)
																				.addClass(
																						'fieldset-error');
																		has_error = true;
																		return false;
																	} else {
																		$(this)
																				.closest(
																						'fieldset')
																				.next(
																						'div.plan-help-block')
																				.html(
																						'');
																		$(this)
																				.removeClass(
																						'fieldset-error');
																	}

																	fieldtiercount++;

																});

											}

											field_count++;
										});

						if (has_error) {
							return false;
						}

						var formData = new FormData($(this)[0]);
						var client_id = '';
						// check for client id
						if (formData.has('SupportVariable[plan_year_id]')) {
							plan_year_id = formData
									.get('SupportVariable[plan_year_id]');
						} else {
							toastr.error('Plan Year id missing.');
							return false;
						}

						$.ajax({
							url : form.attr('action'),
							type : 'post',
							data : formData,
							async : false,
							processData : false,
							success : function(response) {

								if (response.error) {
									toastr.error(response.error);

								} else if (response.success) {
									// toastr.success(response.success);
									is_changed = false;
									$('#lock_page_icon').hide();

									nextButton(9);

								}

							},
							cache : false,
							contentType : false,
							processData : false

						});

					} else {
						nextButton(9);
					}

					return false;

				});

/** *****Ajax function for saving renewal projection fully insured******** */
$('body')
		.on(
				'beforeSubmit',
				'form#renewal_projection_form',
				function() {

					if (is_changed == true) {
						var form = $(this);

						var has_error = false;
						console.log($(
								'#renewalprojection-assumed_renewal_value')
								.val());
						if (($('#renewalprojection-assumed_renewal_value')
								.val() != '')) {

							if (($('#renewalprojection-assumed_renewal_value')
									.val() > 100)) {

								$(
										'.field-renewalprojection-assumed_renewal_value>div.help-block')
										.css("color", "#a94442");
								$(
										'.field-renewalprojection-assumed_renewal_value>div.help-block')
										.html(
												"Percentage cannot be greater than 100.");
								$('#renewalprojection-assumed_renewal_value')
										.css("border-color", "#a94442");
								document
										.getElementById(
												"renewalprojection-assumed_renewal_value")
										.focus();
								return false;
								has_error = true;
							} else {
								$(
										'.field-renewalprojection-assumed_renewal_value>div.help-block')
										.html("");
								$('#renewalprojection-assumed_renewal_value')
										.css("border-color", "");
							}
						}

						if (has_error) {
							return false;
						}

						var formData = new FormData($(this)[0]);
						var client_id = '';
						// check for client id
						if (formData.has('SupportVariable[plan_year_id]')) {
							plan_year_id = formData
									.get('SupportVariable[plan_year_id]');
						} else {
							toastr.error('Plan Year id missing.');
							return false;
						}

						$.ajax({
							url : form.attr('action'),
							type : 'post',
							data : formData,
							async : false,
							processData : false,
							success : function(response) {

								if (response.error) {
									toastr.error(response.error);

								} else if (response.success) {
									// toastr.success(response.success);
									is_changed = false;
									$('#lock_page_icon').hide();
									nextButton(7);

								}

							},
							cache : false,
							contentType : false,
							processData : false

						});

					} else {
						nextButton(7);
					}
					return false;

				});

function preparerow(type, claim_type) {

	var reference_block = $(".remainder_projection_form_" + claim_type);
	var rowCount = reference_block.find("#remainder_" + type + "_data tr").length;

	var start_date = $("#remainder_period_start_month").val();
	var end_date = $("#remainder_period_end_month").val();
	var credibility = $("#remainder_period_credibility").val();
	var trend = $("#remainder_period_trend").val();

	if (start_date == '') {
		// document.getElementById("systempricing-update-basic").style.borderColor
		// = "red";
		$('#remainder_period_start_month').addClass('has-error');
		$('#remainder_period_start_month').next().html('Start month required');
		document.getElementById("remainder_period_start_month").focus();
		return false;
	} else {
		$('#remainder_period_start_month').removeClass('has-error')
		// document.getElementById("systempricing-update-basic").style.borderColor
		// = "";
		$('#remainder_period_start_month').next().html('');

	}

	if (end_date == '') {
		// document.getElementById("systempricing-update-basic").style.borderColor
		// = "red";
		$('#remainder_period_end_month').addClass('has-error');
		$('#remainder_period_end_month').next().html('End month required');
		document.getElementById("remainder_period_end_month").focus();
		return false;
	} else {
		$('#remainder_period_end_month').removeClass('has-error')
		// document.getElementById("systempricing-update-basic").style.borderColor
		// = "";
		$('#remainder_period_end_month').next().html('');

	}

	if (credibility == '') {
		// document.getElementById("systempricing-update-basic").style.borderColor
		// = "red";
		$('#remainder_period_credibility').addClass('has-error');
		$('#remainder_period_credibility').next().html('Credibility required');
		document.getElementById("remainder_period_credibility").focus();
		return false;
	} else if (credibility > 100) {
		$('#remainder_period_credibility').addClass('has-error');
		$('#remainder_period_credibility').next().html(
				'Credibility cannot be greater than 100');
		document.getElementById("remainder_period_credibility").focus();
		return false;
	} else {
		$('#remainder_period_credibility').removeClass('has-error')
		// document.getElementById("systempricing-update-basic").style.borderColor
		// = "";
		$('#remainder_period_credibility').next().html('');

	}

	if (trend == '') {
		// document.getElementById("systempricing-update-basic").style.borderColor
		// = "red";
		$('#remainder_period_trend').addClass('has-error');
		$('#remainder_period_trend').next().html('Trend required');
		document.getElementById("remainder_period_trend").focus();
		return false;
	} else if (trend > 100) {
		$('#remainder_period_trend').addClass('has-error');
		$('#remainder_period_trend').next().html(
				'Trend cannot be greater than 100');
		document.getElementById("remainder_period_trend").focus();
		return false;
	} else {
		$('#remainder_period_trend').removeClass('has-error')
		// document.getElementById("systempricing-update-basic").style.borderColor
		// = "";
		$('#remainder_period_trend').next().html('');

	}

	var html = '<tr id="' + type + '_' + (rowCount + 1) + '"><td id="'
			+ type.toLowerCase() + 'two-left-header-' + (rowCount + 1)
			+ '" class="period_month line-height-twohalf" name="remainder['
			+ type + '][' + rowCount + '][period]">Period ' + (rowCount + 1)
			+ '</td>';
	html += '<td ><input type="text" id="'
			+ type.toLowerCase()
			+ 'two-2-'
			+ (rowCount + 1)
			+ '"  class="period_start_date form-control reinsurance-rates-td text-align-center" value="'
			+ start_date + '" disabled=""></td>';
	html += '<input type="hidden" name="remainder['
			+ type
			+ ']['
			+ rowCount
			+ '][start_date]" class="period_start_date_1 form-control reinsurance-rates-td text-align-center" value="'
			+ start_date + '" >';
	html += ' <td><input type="text" id="'
			+ type.toLowerCase()
			+ 'two-3-'
			+ (rowCount + 1)
			+ '"  class="period_end_date form-control reinsurance-rates-td text-align-center numbers" disabled="" value="'
			+ end_date + '"></td>';
	html += ' <input type="hidden" name="remainder['
			+ type
			+ ']['
			+ rowCount
			+ '][end_date]" class="period_end_date form-control reinsurance-rates-td text-align-center numbers" value="'
			+ end_date + '">';
	html += '<td><input type="text" id="'
			+ type.toLowerCase()
			+ 'two-4-'
			+ (rowCount + 1)
			+ '" name="remainder['
			+ type
			+ ']['
			+ rowCount
			+ '][credibility]" class="period_credibility form-control reinsurance-rates-td text-align-center numbers no-cents padding-left-5 padding-right-5" value="'
			+ credibility + '" maxlength="3"></td>';
	html += '<td><input type="text" id="'
			+ type.toLowerCase()
			+ 'two-5-'
			+ (rowCount + 1)
			+ '" name="remainder['
			+ type
			+ ']['
			+ rowCount
			+ '][trend]" class="period_trend form-control reinsurance-rates-td text-align-center numbers price padding-left-5 padding-right-5" value="'
			+ trend + '" maxlength="6"></td>';
	html += '<td class="line-height-twohalf"><a class="color-red" onclick="removeremainderrow(\'remainder_'
			+ type + '_data\',' + claim_type + ');"><u>Remove</u></a></td>';
	html += '</tr>';

	reference_block.find("#remainder_" + type + "_data").append(html);

	$("." + type + '-div').addClass('hidden');
	$('#lock_page_icon').show();
	is_changed = true;

	$('#add_plan').modal('hide');
	$(".price").maskMoney();
}

function removeremainderrow(row_id, claim_type) {

	$('#modal_dropdown_dialogYes').attr('onclick',
			'removeremainderrowYes("' + row_id + '","' + claim_type + '");');
	$('#modal_dropdown_dialogNo').attr('onclick', 'removeremainderrowNo();');
	$('#modal-dropdown-change-message').html(
			'All the rows will be deleted if YES selected');
	$('#modal-dropdown-change').modal('show');

}

/** *****Function on clickiing yes in remainder row popup**************** */
function removeremainderrowYes(row_id, claim_type) {
	var reference_block = $(".remainder_projection_form_" + claim_type);
	reference_block.find("#" + row_id).html('');
	$('#lock_page_icon').show();

	var res = row_id.split("_");

	$("." + res[1] + '-div').removeClass('hidden');

	is_changed = true;

	$('#modal_dropdown_dialogYes').attr('onclick', '');
	$('#modal_dropdown_dialogNo').attr('onclick', '');
	$('#modal-dropdown-change-message').html('');
	$('#modal-dropdown-change').modal('hide');

}

/** *****Function on clickiing no in remainder row popup*************** */
function removeremainderrowNo() {

	$('#modal_dropdown_dialogYes').attr('onclick', '');
	$('#modal_dropdown_dialogNo').attr('onclick', '');
	$('#modal-dropdown-change-message').html('');
	$('#modal-dropdown-change').modal('hide');

}

function saveremainderprojection(id, claim_type) {

	if (is_changed == true) {

		var validation_error = false;
		var reference_block = $(".remainder_projection_form_" + claim_type);

		$(".remainder_projections_tbody")
				.each(
						function(index, i) {

							var type = i.id;
							// console.log(i.id);
							var particular_credibility = 0;
							var exist_credibility = false;
							var type_block = type.split('_');
							var is_trend_error_1 = false;
							var is_trend_error_2 = false;
							var is_creditbility_error = false;
							var is_creditbility_type = null;
							var is_trend_type_1 = null;
							var is_trend_type_2 = null;
							reference_block
									.find("#" + type)
									.find('tr')
									.each(
											function() {
												exist_credibility = true;

												var credibility = $(this).find(
														'.period_credibility')
														.val();
												var trend = $(this).find(
														'.period_trend').val();

												if (credibility == '') {
													// toastr.error(type_block[1]
													// +' Credibility cannot be
													// empty');
													is_creditbility_error = true;
													is_creditbility_type = type_block[1];
													validation_error = true;
													return false;
												} else {
													particular_credibility = parseFloat(particular_credibility)
															+ parseFloat(credibility);

												}

												if (trend == '') {
													// toastr.error(type_block[1]
													// +' trend cannot be
													// empty');
													is_trend_error_1 = true;
													is_trend_type_1 = type_block[1];
													validation_error = true;
													return false;
												} else if (trend != ''
														&& trend > 100) {
													// toastr.error(type_block[1]
													// +' trend cannot be
													// greater than 100');
													is_trend_error_2 = true;
													is_trend_type_2 = type_block[1];
													validation_error = true;
													return false;
												}

											});

							// console.log(particular_credibility);
							if (is_creditbility_error == true) {
								toastr.error(is_creditbility_type
										+ ' Credibility cannot be empty');
								return false;
							}

							if (is_trend_error_1 == true) {
								toastr.error(is_trend_type_1
										+ ' trend cannot be empty');
								return false;
							}

							if (is_trend_error_2 == true) {
								toastr.error(is_trend_type_2
										+ ' trend cannot be greater than 100');
								return false;
							}

							if (exist_credibility == true
									&& particular_credibility != 100) {

								toastr
										.error('The sum of all '
												+ type_block[1]
												+ ' credibility should be equal to 100');

								validation_error = true;
								return false;

							}

						});

		if (validation_error) {
			return false;
		}
		//

		var data = $("#remainder_projection_form_" + claim_type).serialize()
				+ '&plan_year=' + id + '&claim_type=' + claim_type;

		$.ajax({
			url : staticurl + 'firm-plan/save-remainder-projection',
			type : 'post',
			data : data,
			dataType : 'json',
			// processData : false,
			success : function(response) {
				console.log(response);
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

				} else if (response.success) {
					// toastr.success(response.success);
					is_changed = false;
					$('#lock_page_icon').hide();
					if (claim_type == 1) {
						nextButton(6);
					} else {
						nextButton(7);
					}

				}

			}

		});
	} else {
		if (claim_type == 1) {
			nextButton(6);
		} else {
			nextButton(7);
		}
	}
}

function savemonthlyfinancials(id) {

	if (is_changed == true) {

		var data = $("#monthly_financials_form").serialize() + '&plan_year='
				+ id;

		// console.log(data);

		$.ajax({
			url : staticurl + 'firm-plan/save-monthly-financials',
			type : 'post',
			data : data,
			dataType : 'json',
			processData : false,
			success : function(response) {
				console.log(response);
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

				} else if (response.success) {
					// toastr.success(response.success);
					is_changed = false;
					$('#lock_page_icon').hide();

					nextButton(10);
				}

			}

		});
	} else {
		nextButton(10);
	}
}

function preparelargeclaimrow(count) {

	var claim_id = $("#modal_lg_claimant_id").val();
	var enrollment_status = $("#claimant_enrollment_status").val();
	var member_type = $("#claimant_member_type").val();
	var age = $("#claimant_age").val();
	var gender = $("#claimant_gender").val();
	var claim_condition = $("#claimant_condition").val();
	var prognosis = $("#claimant_prognosis").val();
	var plan_claims = $("#claimant_plan_claim").val();

	if (claim_id == '') {
		// document.getElementById("systempricing-update-basic").style.borderColor
		// = "red";
		$('#modal_lg_claimant_id').addClass('has-error');
		$('#modal_lg_claimant_id').next().html('Claimant Id required');
		document.getElementById("modal_lg_claimant_id").focus();
		return false;
	} else {
		$('#modal_lg_claimant_id').removeClass('has-error')
		// document.getElementById("systempricing-update-basic").style.borderColor
		// = "";
		$('#modal_lg_claimant_id').next().html('');

	}

	/*
	 * if (enrollment_status == '') {
	 * 
	 * $('#claimant_enrollment_status').addClass('has-error');
	 * $('#claimant_enrollment_status').next().html('Enrollment status
	 * required');
	 * document.getElementById("claimant_enrollment_status").focus(); return
	 * false; } else { $('#claimant_enrollment_status').removeClass('has-error')
	 * $('#claimant_enrollment_status').next().html('');
	 *  }
	 * 
	 * if (member_type == '') {
	 * 
	 * $('#claimant_member_type').addClass('has-error');
	 * $('#claimant_member_type').next().html('Member type required');
	 * document.getElementById("claimant_member_type").focus(); return false; }
	 * else { $('#claimant_member_type').removeClass('has-error')
	 * $('#claimant_member_type').next().html('');
	 *  }
	 */

	/*
	 * if (age == '') { $('#claimant_age').addClass('has-error');
	 * $('#claimant_age').next().html('Age required');
	 * document.getElementById("claimant_age").focus(); return false; }else
	 */
	if (age != '') {
		if (age > 150 || age == 0) {
			$('#claimant_age').addClass('has-error');
			$('#claimant_age').next().html('Enter valid age');
			document.getElementById("claimant_age").focus();
			return false;
		} else {
			$('#claimant_age').removeClass('has-error')
			$('#claimant_age').next().html('');

		}
	}
	/*
	 * if (gender == '') { $('#claimant_gender').addClass('has-error');
	 * $('#claimant_gender').next().html('Gender required');
	 * document.getElementById("claimant_gender").focus(); return false; } else {
	 * $('#claimant_gender').removeClass('has-error')
	 * $('#claimant_gender').next().html('');
	 *  }
	 */

	/*
	 * if (claim_condition == '') {
	 * //document.getElementById("systempricing-update-basic").style.borderColor =
	 * "red"; $('#claimant_condition').addClass('has-error');
	 * $('#claimant_condition').next().html('Condition required');
	 * document.getElementById("claimant_condition").focus(); return false; }
	 * else
	 */
	/*
	 * if(claim_condition != ''){ if(checkAlpha(claim_condition)){
	 * $('#claimant_condition').addClass('has-error');
	 * $('#claimant_condition').next().html('Condition must be alphanumeric.');
	 * document.getElementById("claimant_condition").focus(); return false; }
	 * else { $('#claimant_condition').removeClass('has-error')
	 * //document.getElementById("systempricing-update-basic").style.borderColor =
	 * ""; $('#claimant_condition').next().html('');
	 *  } }
	 */

	/*
	 * if (prognosis == '') { $('#claimant_prognosis').addClass('has-error');
	 * $('#claimant_prognosis').next().html('Prognosis required');
	 * document.getElementById("claimant_prognosis").focus(); return false;
	 * }else
	 */
	if (prognosis != '') {
		if (checkAlpha(prognosis)) {
			$('#claimant_prognosis').addClass('has-error');
			$('#claimant_prognosis').next().html(
					'Prognosis must be alphanumeric');
			document.getElementById("claimant_prognosis").focus();
			return false;
		} else {
			$('#claimant_prognosis').removeClass('has-error')
			$('#claimant_prognosis').next().html('');

		}
	}

	if (plan_claims == '') {
		$('#claimant_plan_claim').addClass('has-error');
		$('#claimant_plan_claim').next().html('Plan Claim required');
		document.getElementById("claimant_plan_claim").focus();
		return false;
	} else {
		$('#claimant_plan_claim').removeClass('has-error')
		$('#claimant_plan_claim').next().html('');

	}

	var member_type_html = $('#claimant_member_type').html();
	var claimant_enrollment_status_html = $('#claimant_enrollment_status')
			.html();
	var claimant_condition_html = $('#claimant_condition').html();

	var html = "<tr>" + '<td id="largeclaims-left-header-'
			+ count
			+ '" class="line-height-twohalf text-align-center">'
			+ count
			+ '</td>'
			+ '<td><input type="text" name="LargeClaims['
			+ count
			+ '][claimant_id]" id="largeclaims-2-'
			+ count
			+ '" class="form-control reinsurance-rates-td text-align-center" value="'
			+ claim_id
			+ '" maxlength="50" onkeypress="return cliamid(event);"></td>'
			+ '<td> <select class="form-control reinsurance-rates-td text-align-center" name="LargeClaims['
			+ count
			+ '][enrollment_status]" id="largeclaims-3-'
			+ count
			+ '"  >'
			+ claimant_enrollment_status_html
			+ ' </select> </td>'

			+ '<td><select id="largeclaims-4-'
			+ count
			+ '" name="LargeClaims['
			+ count
			+ '][member_type]" class="form-control reinsurance-rates-td text-align-center" >'
			+ member_type_html
			+ '</td>'
			+ '<td><input type="text" id="largeclaims-5-'
			+ count
			+ '" name="LargeClaims['
			+ count
			+ '][age]" class="form-control reinsurance-rates-td text-align-center no-cents" value="'
			+ age
			+ '" maxlength="3"></td>'
			+ '<td> <select class="form-control reinsurance-rates-td text-align-center" name="LargeClaims['
			+ count
			+ '][gender]" id="largeclaims-6-'
			+ count
			+ '"  >'
			+ '<option  value="">Select</option>'
			+ '<option  value="Male">Male</option>'
			+ '<option  value="Female">Female</option>'
			+ '<option  value="Others">Others</option> </select> </td>'
			+ '<td><select id="largeclaims-7-'
			+ count
			+ '" name="LargeClaims['
			+ count
			+ '][claim_condition]" class="form-control reinsurance-rates-td text-align-center">'
			+ claimant_condition_html
			+ '</select> </td>'
			+ '<td><input type="text" id="largeclaims-8-'
			+ count
			+ '" name="LargeClaims['
			+ count
			+ '][prognosis]" class="form-control reinsurance-rates-td text-align-center"  value="'
			+ prognosis
			+ '" onkeypress="return planscreenname(event);" maxlength="50"></td>'
			+ '<td><input type="text" name="LargeClaims['
			+ count
			+ '][plan_claims]" id="largeclaims-9-'
			+ count
			+ '" class="form-control reinsurance-rates-td text-align-center no-cents numbers" value="'
			+ plan_claims
			+ '" maxlength="10"></td>'
			+ '<td><a onclick="removeParticularLgclaim(this);"><span class="line-height-twohalf text-align-center " ><i class="fa fa-trash-o" aria-hidden="true"></i></span></a></td>'
			+ '</tr>';

	$("#lg_claims_body").append(html);

	$("#largeclaims-4-" + count).val(member_type);
	$("#largeclaims-7-" + count).val(claim_condition);

	$("#largeclaims-3-" + count).val(enrollment_status);
	$("#largeclaims-6-" + count).val(gender);
	$('#create_claim').modal('hide');

	is_changed = true;
	$('#lock_page_icon').show();

}

function openClaimModal() {

	$("#large_claimant_form_modal").find("input,textarea,select,checkbox").val(
			'').end();
	$("#large_claimant_form_modal").find("div.help-block").text('').end();
	$("#large_claimant_form_modal").find(".form-group")
			.removeClass('has-error').end();

	$('#create_claim').modal('show');

	var rowCount = $('#lg_claims_body tr').length;

	rowCount++;

	$('#lg_claims_row_prepare_click').attr('onclick',
			'preparelargeclaimrow(' + rowCount + ');');
}

function saveselflargeclaim(id) {

	var field_count = 1;
	var has_error = false;
	$('#editable_large_claims_tbl')
			.find('tbody')
			.find('tr')
			.each(
					function(index) {

						// var is_null = false;
						// var check_for_atleaast_one_field=false;
						var claimant_id_null = false;
						var plan_claim_null = false;
						for ( var i = 2; i <= 9; i++) {
							if ((i == 2)
									&& ($(this).find(
											'#largeclaims-' + i + '-'
													+ field_count).val() == '')) {
								// is_null = true;
								claimant_id_null = true;
							}

							if ((i == 9)
									&& ($(this).find(
											'#largeclaims-' + i + '-'
													+ field_count).val() == '')) {
								// is_null = true;
								plan_claim_null = true;
							}
							/*
							 * else{ check_for_atleaast_one_field=true; }
							 */

							/*
							 * || ((i == 9) &&
							 * ($(this).find('#largeclaims-'+i+'-'+field_count).val() ==
							 * '')) if((i == 2) &&
							 * ($(this).find('#largeclaims-'+i+'-'+field_count).val() ==
							 * '')){ claimant_id = true; return false; }
							 * 
							 * if((i == 9) &&
							 * ($(this).find('#largeclaims-'+i+'-'+field_count).val() ==
							 * '')){ plan_claim = true; return false; }
							 */

							if ((i == 5)
									&& ($(this).find(
											'#largeclaims-' + i + '-'
													+ field_count).val() != '')) {
								var age = $(this)
										.find(
												'#largeclaims-' + i + '-'
														+ field_count).val();

								if (age > 150) {
									toastr
											.error('Age cannot be greater be 150 in large claims row number '
													+ field_count);
									has_error = true;
									return false;
								} else if (age == 0) {
									toastr
											.error('Age cannot be 0 in large claims row number '
													+ field_count);
									has_error = true;
									return false;
								}
							}

							/*
							 * if((i == 7) &&
							 * ($(this).find('#largeclaims-'+i+'-'+field_count).val() !=
							 * '')){ var condition =
							 * $(this).find('#largeclaims-'+i+'-'+field_count).val();
							 * 
							 * if(checkAlpha(condition)){
							 * toastr.error('Condition name must be alphanumeric
							 * in large claims row number '+field_count);
							 * has_error=true; return false; } }
							 */

							if ((i == 8)
									&& ($(this).find(
											'#largeclaims-' + i + '-'
													+ field_count).val() != '')) {
								var Prognosis = $(this)
										.find(
												'#largeclaims-' + i + '-'
														+ field_count).val();

								if (checkAlpha(Prognosis)) {
									toastr
											.error('Prognosis name must be alphanumeric in large claims row number '
													+ field_count);
									has_error = true;
									return false;
								}
							}

						}

						if (claimant_id_null == true) {

							$(this).closest('table')
									.next('div.plan-help-block').html(
											'Please fill Claimant Id in large claims row number '
													+ field_count);

							has_error = true;
							return false;
						} else {
							$(this).closest('table')
									.next('div.plan-help-block').html('');
							// $(this).removeClass('fieldset-error');
						}

						if (plan_claim_null == true) {

							$(this).closest('table')
									.next('div.plan-help-block').html(
											'Please fill Plan claim in large claims row number '
													+ field_count);

							has_error = true;
							return false;
						} else {
							$(this).closest('table')
									.next('div.plan-help-block').html('');
							// $(this).removeClass('fieldset-error');
						}

						/*
						 * if(check_for_atleaast_one_field==true &&
						 * is_null==true) {
						 * 
						 * $(this).closest('table').next('div.plan-help-block').html('Please
						 * fill all data in large claims row number
						 * '+field_count);
						 * 
						 * has_error = true; return false; }else{
						 * $(this).closest('table').next('div.plan-help-block').html(''); //
						 * $(this).removeClass('fieldset-error'); }
						 */

						field_count++;
					});

	if (has_error) {
		return false;
	}

	// console.log();

	if (is_changed == true) {
		// if(1){

		var data = $("#largeClaims").serialize() + '&plan_year=' + id;

		// console.log(data);

		$.ajax({
			url : staticurl + 'firm-plan/save-large-claim-financials',
			type : 'post',
			data : data,
			dataType : 'json',
			processData : false,
			success : function(response) {
				// console.log(response);
				// return false;
				if (response.error) {

					$.each(response.error, function(key, val) {
						toastr.error(val);
						return false;
					});

				} else if (response.success) {
					// toastr.success(response.success);
					is_changed = false;
					$('#lock_page_icon').hide();

					nextButton(11);
				}

			}

		});
	} else {
		nextButton(11);
	}

}

/** *****Function to check if anything is changed in large claims*********** */
function particularlargeclaim() {

	if (is_changed == true) {

		$('#modal_dropdown_dialogYes').attr('onclick',
				'particularlargeclaimYes();');
		$('#modal_dropdown_dialogNo').attr('onclick',
				'particularlargeclaimNo();');
		$('#modal-dropdown-change-message').html(
				'Data will be lost if selecting YES is selected');
		$('#modal-dropdown-change').modal('show');
	} else {
		particularlargeclaimYes();
	}

}

/** *****Function on clickiing yes in large claims popup**************** */
function particularlargeclaimYes() {
	is_changed = false;
	$('#lock_page_icon').hide();

	var month = $("#large_claims_month_select").val();
	var dataurl = $("#anchor-pb-11").attr('data-url');
	$("#anchor-pb-11").attr('data-url', dataurl + '&month=' + month);
	$("#anchor-pb-11").trigger('click');

	$('#modal_dropdown_dialogYes').attr('onclick', '');
	$('#modal_dropdown_dialogNo').attr('onclick', '');
	$('#modal-dropdown-change-message').html('');
	$('#modal-dropdown-change').modal('hide');

}

/** *****Function on clickiing no in large claims popup*************** */
function particularlargeclaimNo() {
	$("#large_claims_month_select").val(
			$('#large_claims_month_select').attr('data-value'));
	$('#modal_dropdown_dialogYes').attr('onclick', '');
	$('#modal_dropdown_dialogNo').attr('onclick', '');
	$('#modal-dropdown-change-message').html('');
	$('#modal-dropdown-change').modal('hide');

}

function removeParticularLgclaim(trblock) {

	var num_claims = $(trblock).closest('tr').prevAll().length;
	// console.log($(trblock).closest('tr').prevAll().length);
	var nextAll = $(trblock).closest('tr').parent().siblings();

	var nextAll = $(trblock).closest('tr').nextAll();

	nextAll.each(function(index, html) {

		num_claims++;

		var arr_names = [ '', 'claimant_id', 'enrollment_status',
				'member_type', 'age', 'gender', 'claim_condition', 'prognosis',
				'plan_claims' ];

		$(html).find('td').each(
				function(tdindex, tdhtml) {

					if (tdindex == 0) {
						$(tdhtml).attr('id',
								'largeclaims-left-header-' + num_claims);
						$(tdhtml).text(num_claims);
					} else if (tdindex != 9) {
						var count_id = tdindex + 1;
						$(tdhtml).children().attr('id',
								'largeclaims-' + count_id + '-' + num_claims);
						$(tdhtml).children().attr(
								'name',
								'LargeClaims[' + num_claims + ']['
										+ arr_names[tdindex] + ']');
					}

				});

	});

	$(trblock).closest('tr').remove();

	is_changed = true;
	$('#lock_page_icon').show();

}

function getNetworkdata(date, plan_year_id) {

	if (is_changed == true) {

		$('#modal_dropdown_dialogYes').attr('onclick',
				'getNetworkdataYes("' + date + '","' + plan_year_id + '");');
		$('#modal_dropdown_dialogNo').attr('onclick', 'getNetworkdataNo();');
		$('#modal-dropdown-change-message').html(
				'Data will be lost if selecting YES is selected');
		$('#modal-dropdown-change').modal('show');

	} else {
		getNetworkdataYes(date, plan_year_id);
	}

}

function getNetworkdataNo() {
	$('#network_claim_value').val($('#network_claim_value').attr('data-value'));
	$('#modal_dropdown_dialogYes').attr('onclick', '');
	$('#modal_dropdown_dialogNo').attr('onclick', '');
	$('#modal-dropdown-change-message').html('');
	$('#modal-dropdown-change').modal('hide');
}

function getNetworkdataYes(date, plan_year_id) {
	tab_change = false;
	var formData = '';
	formData = 'plan_year_id=' + plan_year_id + '&plan_date=' + date;

	$('#network-2-1').val('');
	$('#network-2-2').val('');
	$('#network-2-3').val('');
	$('#network-total-savings').val('');
	$('#network-discount').val('');
	$('#total_sumitted_charges_tr').removeClass('fieldset-error');
	$('#total_allowed_charges_tr').removeClass('fieldset-error');
	$('#total_network_utilization_tr').removeClass('fieldset-error');
	$('.network-perfomance-utilization-help-block').html('');
	$('.network-perfomance-charges-help-block').html('');

	$
			.ajax({
				url : staticurl + 'firm-plan/get-network-data',
				type : 'get',
				data : formData,
				async : false,
				processData : false,
				dataType : 'JSON',
				success : function(response) {

					var network_utilization = '';
					var total_sumitted_charges = 0;
					var total_allowed_charges = 0;
					var savings = 0;
					var discount = 0;

					if (response != '') {
						if (response['network_utilization'] != null) {
							network_utilization = response['network_utilization'];
							$('#network-2-1').val(network_utilization);
						}

						if (response['total_sumitted_charges'] != null) {
							total_sumitted_charges = response['total_sumitted_charges'];
							$('#network-2-2').val(total_sumitted_charges);
						}

						if (response['total_allowed_charges'] != null) {
							total_allowed_charges = response['total_allowed_charges'];
							$('#network-2-3').val(total_allowed_charges);
						}

						if (total_sumitted_charges != null
								|| total_allowed_charges != null) {
							Calculateamount();
						}
					}

					$('#lock_page_icon').hide();
					is_changed = false;

					$('#modal_dropdown_dialogYes').attr('onclick', '');
					$('#modal_dropdown_dialogNo').attr('onclick', '');
					$('#modal-dropdown-change-message').html('');
					$('#modal-dropdown-change').modal('hide');

				},
				cache : false,
				contentType : false,
				processData : false

			});
}

/** *****Ajax function for saving cliam types******** */
$('body')
		.on(
				'beforeSubmit',
				'form#networkperfomance_form',
				function() {

					var form = $(this);

					var formData = new FormData($(this)[0]);

					plan_funding = formData
							.get('SupportVariable[plan_funding]');
					plan_type = formData.get('SupportVariable[plan_type]');

					if (is_changed == true) {

						var submittedCharges = 0;
						var allowedCharges = 0;
						var network_utilization = '';

						var client_id = '';
						// check for client id
						if (formData.has('SupportVariable[plan_year_id]')) {
							plan_year_id = formData
									.get('SupportVariable[plan_year_id]');
						} else {
							toastr.error('Plan Year id missing.');
							return false;
						}

						if (formData
								.has('MonthlyFinancialsNetworkPerformance[total_sumitted_charges]')) {
							submittedCharges = formData
									.get('MonthlyFinancialsNetworkPerformance[total_sumitted_charges]');
							submittedCharges = parseFloat(submittedCharges
									.replace(/\,/g, ""));

							if (isNaN(submittedCharges)) {
								submittedCharges = 0;
							}
						}

						if (formData
								.has('MonthlyFinancialsNetworkPerformance[total_allowed_charges]')) {
							allowedCharges = formData
									.get('MonthlyFinancialsNetworkPerformance[total_allowed_charges]');
							allowedCharges = parseFloat(allowedCharges.replace(
									/\,/g, ""));

							if (isNaN(allowedCharges)) {
								allowedCharges = 0;
							}
						}

						if (formData
								.has('MonthlyFinancialsNetworkPerformance[network_utilization]')) {
							network_utilization = formData
									.get('MonthlyFinancialsNetworkPerformance[network_utilization]');

						}

						if (parseFloat(network_utilization) > 100) {
							$('#total_network_utilization_tr').addClass(
									'fieldset-error');
							$('.network-perfomance-utilization-help-block')
									.html(
											'Network utilization cannot be greater than 100%. ');
							return false;
						} else {
							$('#total_network_utilization_tr').removeClass(
									'fieldset-error');
							$('.network-perfomance-utilization-help-block')
									.html('');
						}

						if (submittedCharges < allowedCharges) {
							$('#total_sumitted_charges_tr').addClass(
									'fieldset-error');
							$('#total_allowed_charges_tr').addClass(
									'fieldset-error');
							$('.network-perfomance-charges-help-block')
									.html(
											'Total submitted charges should be always greater than total allowed charges.');
							return false;

						} else {
							$('#total_sumitted_charges_tr').removeClass(
									'fieldset-error');
							$('#total_allowed_charges_tr').removeClass(
									'fieldset-error');
							$('.network-perfomance-charges-help-block')
									.html('');

						}

						$.ajax({
							url : form.attr('action'),
							type : 'post',
							data : formData,
							async : false,
							processData : false,
							success : function(response) {

								if (response.error) {
									toastr.error(response.error);

								} else if (response.errorarray) {

									$.each(response.errorarray, function(key,
											val) {

										$('#' + key).next('div.help-block')
												.html(val);
										$('#' + key).closest(".form-group")
												.removeClass('has-success');
										$('#' + key).closest(".form-group")
												.addClass('has-error');
									});

								} else if (response.success) {
									// toastr.success(response.success);
									is_changed = false;
									$('#lock_page_icon').hide();
									if (plan_type == 1) {
										nextButton(12);
									} else {
										nextButton(13);
									}

								}

							},
							cache : false,
							contentType : false,
							processData : false

						});

					} else {
						if (plan_type == 1) {
							nextButton(12);
						} else {
							nextButton(13);
						}
					}

					return false;

				});

function Calculateamount() {
	var submittedCharges = 0;
	var allowedCharges = 0;
	var savings = 0;
	var discount = 0;

	$('#network-total-savings').val('');
	$('#network-discount').val('');

	if ($('#network-2-2').val() != '') {
		submittedCharges = $('#network-2-2').val();
		submittedCharges = parseFloat(submittedCharges.replace(/\,/g, ""));

		if (isNaN(submittedCharges)) {
			submittedCharges = 0;
		}
	}

	if ($('#network-2-3').val() != '') {
		allowedCharges = $('#network-2-3').val();
		allowedCharges = parseFloat(allowedCharges.replace(/\,/g, ""));

		if (isNaN(allowedCharges)) {
			allowedCharges = 0;
		}

	}

	if (submittedCharges < allowedCharges) {
		$('#total_sumitted_charges_tr').addClass('fieldset-error');
		$('#total_allowed_charges_tr').addClass('fieldset-error');
		$('.network-perfomance-charges-help-block')
				.html(
						'Total submitted charges should be always greater than total allowed charges.');

	} else {
		$('#total_sumitted_charges_tr').removeClass('fieldset-error');
		$('#total_allowed_charges_tr').removeClass('fieldset-error');
		$('.network-perfomance-charges-help-block').html('');
	}

	if (submittedCharges >= allowedCharges) {
		savings = parseFloat(submittedCharges) - parseFloat(allowedCharges);

		if (savings != 0 || submittedCharges != 0) {
			discount = parseFloat(savings * 100) / parseFloat(submittedCharges);
		}

		total_savings = parseFloat(savings);

		var total_savings = total_savings.toString().replace(
				/\B(?=(\d{3})+(?!\d))/g, ",");

		$('#network-total-savings').val(total_savings);
		$('#network-discount').val(discount.toFixed(2));

	}
}

function changeitemperfomance(prev_val, type) {

	if (is_changed == true) {

		$('#modal_dropdown_dialogYes').attr('onclick',
				'changeitemperfomanceYes("' + prev_val + '","' + type + '");');
		$('#modal_dropdown_dialogNo').attr('onclick',
				'changeitemperfomanceNo("' + type + '");');
		$('#modal-dropdown-change-message').html(
				'Data will be lost if selecting YES is selected');
		$('#modal-dropdown-change').modal('show');
	} else {
		changeitemperfomanceYes(prev_val, type);
	}

}

/** *****Function on clickiing yes in perfomance popup**************** */
function changeitemperfomanceYes(prev_val, type) {
	is_changed = false;
	$('#lock_page_icon').hide();

	var month = $("#pharmacy_item_claim_value").val();
	var drug_month = $("#pharmacy_drug_claim_value").val();

	var dataurl = $("#anchor-pb-13").attr('data-url');
	$("#anchor-pb-13").attr('data-url',
			dataurl + '&item_month=' + month + '&drug_month=' + drug_month);

	$("#anchor-pb-13").trigger('click');

	$('#modal_dropdown_dialogYes').attr('onclick', '');
	$('#modal_dropdown_dialogNo').attr('onclick', '');
	$('#modal-dropdown-change-message').html('');
	$('#modal-dropdown-change').modal('hide');

}

/** *****Function on clickiing no in perfomance popup*************** */
function changeitemperfomanceNo(type) {
	if (type == 1) {
		$("#pharmacy_item_claim_value").val(
				$('#pharmacy_item_claim_value').attr('data-value'));
	} else if (type == 2) {
		$("#pharmacy_drug_claim_value").val(
				$('#pharmacy_drug_claim_value').attr('data-value'));
	}

	$('#modal_dropdown_dialogYes').attr('onclick', '');
	$('#modal_dropdown_dialogNo').attr('onclick', '');
	$('#modal-dropdown-change-message').html('');
	$('#modal-dropdown-change').modal('hide');

}

/** *****Ajax function for saving cliam types******** */
$('body')
		.on(
				'beforeSubmit',
				'form#pharmacyperfomance_form',
				function() {

					if (is_changed == true) {

						var submittedCharges = 0;
						var allowedCharges = 0;
						var compliance_rate = '';
						var has_error = false;
						var form = $(this);

						var formData = new FormData($(this)[0]);
						var client_id = '';
						// check for client id
						if (formData.has('SupportVariable[plan_year_id]')) {
							plan_year_id = formData
									.get('SupportVariable[plan_year_id]');
						} else {
							toastr.error('Plan Year id missing.');
							return false;
						}

						if (formData
								.has('MonthlyFinancialsPharmacyPerformance[compliance_rate]')) {
							compliance_rate = formData
									.get('MonthlyFinancialsPharmacyPerformance[compliance_rate]');
							compliance_rate = compliance_rate
									.replace(/\,/g, "");
						}

						if (parseFloat(compliance_rate) > 100) {
							$('#total_compliance_rate_tr').addClass(
									'fieldset-error');
							$('.pharmacy-compliance-rate-help-block')
									.html(
											'Formulary brand compliance rate cannot be greater than 100%. ');
							return false;
						} else {
							$('#total_compliance_rate_tr').removeClass(
									'fieldset-error');
							$('.pharmacy-compliance-rate-help-block').html('');
						}

						if (formData
								.has('MonthlyFinancialsPharmacyPerformance[brand_discount]')) {
							brand_discount = formData
									.get('MonthlyFinancialsPharmacyPerformance[brand_discount]');
							brand_discount = brand_discount.replace(/\,/g, "");
						}

						if (parseFloat(brand_discount) > 100) {
							$('#total_brand_discount_tr').addClass(
									'fieldset-error');
							$('.pharmacy-brand-discount-help-block')
									.html(
											'Average brand discount cannot be greater than 100%. ');
							return false;
						} else {
							$('#total_brand_discount_tr').removeClass(
									'fieldset-error');
							$('.pharmacy-brand-discount-help-block').html('');
						}

						if (formData
								.has('MonthlyFinancialsPharmacyPerformance[generic_discount]')) {
							generic_discount = formData
									.get('MonthlyFinancialsPharmacyPerformance[generic_discount]');
							generic_discount = generic_discount.replace(/\,/g,
									"");
						}

						if (parseFloat(generic_discount) > 100) {
							$('#total_generic_discount_tr').addClass(
									'fieldset-error');
							$('.pharmacy-generic-discount-help-block')
									.html(
											'Average generic discount cannot be greater than 100%. ');
							return false;
						} else {
							$('#total_generic_discount_tr').removeClass(
									'fieldset-error');
							$('.pharmacy-generic-discount-help-block').html('');
						}

						var fieldtiercount = 1;
						$('#pharmacy_drugs_body')
								.find('tr')
								.each(
										function(index) {
											if ($(this).id != 'drugs_result_tr') {

												var is_null = false;
												for ( var i = 2; i <= 5; i++) {
													if ($(this)
															.find(
																	'#pharmacymedical-'
																			+ i
																			+ '-'
																			+ fieldtiercount)
															.val() == '') {
														if (!$(this)
																.find(
																		'#pharmacymedical-'
																				+ i
																				+ '-'
																				+ fieldtiercount)
																.hasClass(
																		"pharmacy_condition_"
																				+ fieldtiercount)) {

															is_null = true;

														}

													}

												}
												if (is_null) {

													$(this)
															.closest('fieldset')
															.next(
																	'div.plan-help-block')
															.html(
																	'Drug Name, Plan Spend, Unique No. is mandatory in pharmacy perfomance top 20 drugs row '
																			+ fieldtiercount);
													$(this).addClass(
															'fieldset-error');
													has_error = true;
													return false;
												} else {
													$(this)
															.closest('fieldset')
															.next(
																	'div.plan-help-block')
															.html('');
													$(this).removeClass(
															'fieldset-error');
												}

												fieldtiercount++;
											}

										});

						if (has_error == true) {
							return false;
						}

						$.ajax({
							url : form.attr('action'),
							type : 'post',
							data : formData,
							async : false,
							processData : false,
							success : function(response) {

								if (response.error) {
									toastr.error(response.error);

								} else if (response.errorarray) {

									$.each(response.errorarray, function(key,
											val) {

										$('#' + key).next('div.help-block')
												.html(val);
										$('#' + key).closest(".form-group")
												.removeClass('has-success');
										$('#' + key).closest(".form-group")
												.addClass('has-error');
									});

								} else if (response.success) {
									// toastr.success(response.success);
									is_changed = false;
									$('#lock_page_icon').hide();
									nextButton(13);

								}

							},
							cache : false,
							contentType : false,
							processData : false

						});

					} else {
						nextButton(13);
					}

					return false;

				});

function copyPreviousmonth(selected_date, plan_year_id) {

	// alert(title);
	var data = 'date=' + selected_date + '&plan_year_id=' + plan_year_id;
	$.ajax({
		type : 'POST',
		url : staticurl + "firm-plan/savepreviouslargeclaims",
		data : data,
		processData : false,
		dataType : 'json',
		success : function(data) {
			// alert(data);
			if (data.error) {

				$.each(data.error, function(key, val) {
					toastr.error(val);
					return false;
				});

			} else if (data.success) {
				// toastr.success(response.success);

				nextButton(10);
			}
		},

	});
}

function opendrugmodals() {

	$("#drug_details_form").find("input,textarea,select,checkbox").val('')
			.end();
	$("#pharmacy_drug_name").val("").trigger("change");
	$("#pharmacy_condition").val("").trigger("change");
	$("#drug_details_form").find("div.help-block").text('').end();
	$("#drug_details_form").find(".form-group").removeClass('has-error').end();

	$('#drug_details').modal('show');

	var rowCount = $('#pharmacy_drugs_body tr').length;

	rowCount++;

	$('#drug_details_click').attr('onclick',
			'preparedrugrow(' + rowCount + ');');

}

function preparedrugrow(count) {

	count = count - 1;

	if (count <= 20) {
		var pharmacy_drug_name = $("#pharmacy_drug_name").select2('data');
		var pharmacy_plan_spend = $("#pharmacy_plan_spend").val();
		var pharmacy_condition = $("#pharmacy_condition").select2('data');
		var pharmacy_unique_number = $("#pharmacy_unique_number").val();

		var drug_name = '';
		var drug_val = '';
		var condition_name = '';
		var condition_val = '';

		if (pharmacy_drug_name == '' || pharmacy_drug_name == null) {
			// document.getElementById("systempricing-update-basic").style.borderColor
			// = "red";
			$('#pharmacy_drug_name').parent('.form-group')
					.addClass('has-error');
			$('.drug-name-help-block').html('Drug name required');
			document.getElementById("pharmacy_drug_name").focus();
			return false;
		} else {
			$('#pharmacy_drug_name').parent('.form-group').removeClass(
					'has-error')
			// document.getElementById("systempricing-update-basic").style.borderColor
			// = "";
			$('.drug-name-help-block').html('');

			drug_name = pharmacy_drug_name[0].drug_name;
			drug_val = pharmacy_drug_name[0].id;

		}
		if (pharmacy_plan_spend == '') {

			$('#pharmacy_plan_spend').parent('.form-group').addClass(
					'has-error');
			$('#pharmacy_plan_spend').next('.help-block').html(
					'Plan spend required');
			document.getElementById("pharmacy_plan_spend").focus();
			return false;
		} else {
			$('#pharmacy_plan_spend').parent('.form-group').removeClass(
					'has-error')
			$('#pharmacy_plan_spend').next('.help-block').html('');

		}

		if (pharmacy_condition != '' || pharmacy_condition != null) {

			condition_name = pharmacy_condition[0].drug_condition;
			condition_val = pharmacy_condition[0].id;

		}

		if (pharmacy_unique_number == '') {
			$('#pharmacy_unique_number').parent('.form-group').addClass(
					'has-error');
			$('#pharmacy_unique_number').next('.help-block').html(
					'Unique number required');
			document.getElementById("pharmacy_unique_number").focus();
			return false;
		} else {
			$('#pharmacy_unique_number').parent('.form-group').removeClass(
					'has-error')
			$('#pharmacy_unique_number').next('.help-block').html('');

		}

		var html = "<tr>" + '<td id="pharmacymedical-left-header-'
				+ count
				+ '" class="line-height-twohalf text-align-center">'
				+ count
				+ '</td>'
				+ '<td><select name="MonthlyFinancialsPharmacyTopDrugs['
				+ count
				+ '][pharmacy_drug_name]" id="pharmacymedical-2-'
				+ count
				+ '" class="form-control reinsurance-rates-td pharmacy_drug_name_'
				+ count
				+ ' text-align-center example1"   ><option value="'
				+ drug_val
				+ '" selected="selected">'
				+ drug_name
				+ '</option></select></td>'
				+ '<td><select name="MonthlyFinancialsPharmacyTopDrugs['
				+ count
				+ '][pharmacy_condition]" id="pharmacymedical-3-'
				+ count
				+ '" class="form-control reinsurance-rates-td pharmacy_condition_'
				+ count
				+ ' text-align-center example1"  ><option value="'
				+ condition_val
				+ '" selected="selected">'
				+ condition_name
				+ '</option></select></td>'
				+ '<td><input type="text" name="MonthlyFinancialsPharmacyTopDrugs['
				+ count
				+ '][pharmacy_plan_spend]" id="pharmacymedical-4-'
				+ count
				+ '" maxlength="10"  class="form-control reinsurance-rates-td text-align-center example1 numbers no-cents plan-spend-calc"  autocomplete="off"  value="'
				+ pharmacy_plan_spend
				+ '"></td>'
				+ '<td><input type="text" name="MonthlyFinancialsPharmacyTopDrugs['
				+ count
				+ '][pharmacy_unique_number]" id="pharmacymedical-5-'
				+ count
				+ '" class="form-control reinsurance-rates-td text-align-center example1 numbers"  autocomplete="off"  maxlength="10" value="'
				+ pharmacy_unique_number
				+ '"></td>'
				+ '<td><div class="remove-icon"><span class="button-remove-premiums button-remove cursor-pointer line-height-twohalf" id="remove-icon-id-'
				+ count
				+ '" ><a class="color-red"><u>Remove</u></a></span></div></td>'
				+ '</tr>';

		// $("#pharmacy_drugs_body").append(html);
		$(html).insertBefore("#drugs_result_tr");
		calculatePlanspend();
		$('#drug_details').modal('hide');

		is_changed = true;
		$('#lock_page_icon').show();

		Pharamacydropdown(count);
		Conditiondropdown(count);

		$(".price").maskMoney();
		$('.no-cents').mask("#,##0", {
			reverse : true
		});

	}
}

function calculatePlanspend() {
	var total_spend = 0;
	$(".plan-spend-calc").each(function(i) {
		var spend_val = $(this).val();
		spend_val = parseFloat(spend_val.replace(/\,/g, ""));

		if (isNaN(spend_val)) {
			spend_val = 0.00;
		}
		total_spend += parseFloat(spend_val);

	});

	if (total_spend != '' || total_spend != null) {

		if (isNaN(total_spend)) {
			total_spend = 0.00;
		}

		total_spend = parseFloat(total_spend);

		var total = total_spend.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		$('#drugs_result_tr').html(
				'<td class="text-align-center"></td>' + '<td></td>'
						+ '<td class="text-align-center">Total</td>'
						+ '<td class="text-align-center">' + total + '</td>'
						+ '<td></td>');
	}
}

function Calculatemonthlyfinancials(id) {
	var gross_total = 0;
	var net_total = 0;
	var sub_net_values = 0;
	$(".cal-mon-" + id).each(function(i) {
		var spend_val = $(this).val();
		spend_val = parseFloat(spend_val.replace(/\,/g, ""));

		if (isNaN(spend_val)) {
			spend_val = 0.00;
		}
		if ($(this).hasClass("gross-total")) {
			if (!$(this).hasClass("negative")) {
				gross_total += parseFloat(spend_val);
			} else {
				gross_total -= parseFloat(spend_val);
			}
		}

		if ($(this).hasClass("net-total")) {
			sub_net_values += parseFloat(spend_val);
		}

	});

	if (gross_total != '' || gross_total != null) {

		if (isNaN(gross_total)) {
			gross_total = 0.00;
		}

		// gross_total = parseFloat(Math.max(0, gross_total));
		gross_total = parseFloat(gross_total);
		net_total = gross_total - sub_net_values;
		if (isNaN(net_total)) {
			net_total = 0.00;
		}
		// net_total = parseFloat(Math.max(0, net_total));
		net_total = parseFloat(net_total);
		// var total = total_spend.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
		// ",");

		$('#inputfinance-' + id + '-14').html('$' + gross_total);
		$('#inputfinance-' + id + '-20').html('$' + net_total);
	}
}
function Pharamacydropdown(row_count) {

	$(".pharmacy_drug_name_" + row_count).select2({

		placeholder : "Select a drug name",
		ajax : {
			url : "get-drug-name",
			dataType : 'json',
			delay : 250,
			data : function(params) {
				return {
					q : params.term, // search term
					page : params.page
				};
			},
			processResults : function(data, params) {
				// parse the results into the format expected by Select2
				// since we are using custom formatting functions we do not need
				// to
				// alter the remote JSON data, except to indicate that infinite
				// scrolling can be used
				params.page = params.page || 1;

				return {
					results : data.items,
					pagination : {
						more : (params.page * 30) < data.total_count
					}
				};
			},
			cache : true
		},
		escapeMarkup : function(markup) {
			return markup;
		}, // let our custom formatter work
		minimumInputLength : 1,
		templateResult : formatRepo, // omitted for brevity, see the source
										// of this page
		templateSelection : formatRepoSelection
	// omitted for brevity, see the source of this page
	});

}

function formatRepo(repo) {
	if (repo.loading)
		return repo.text;

	var markup = repo.drug_name;

	return markup;
}

function formatRepoSelection(repo) {
	return repo.drug_name || repo.text;
}

function Conditiondropdown(row_count) {

	$(".pharmacy_condition_" + row_count).select2({

		placeholder : "Select a condition",
		ajax : {
			url : "get-condition",
			dataType : 'json',
			delay : 250,
			data : function(params) {
				return {
					q : params.term, // search term
					page : params.page
				};
			},
			processResults : function(data, params) {
				// parse the results into the format expected by Select2
				// since we are using custom formatting functions we do not need
				// to
				// alter the remote JSON data, except to indicate that infinite
				// scrolling can be used
				params.page = params.page || 1;

				return {
					results : data.items,
					pagination : {
						more : (params.page * 30) < data.total_count
					}
				};
			},
			cache : true
		},
		escapeMarkup : function(markup) {
			return markup;
		}, // let our custom formatter work
		minimumInputLength : 1,
		templateResult : formatRepocondition, // omitted for brevity, see the
												// source of this page
		templateSelection : formatRepoSelectioncondition
	// omitted for brevity, see the source of this page
	});

}

function formatRepocondition(repo) {
	if (repo.loading)
		return repo.text;

	var markup = repo.drug_condition;

	return markup;
}

function formatRepoSelectioncondition(repo) {
	return repo.drug_condition || repo.text;
}

function generateReport(element) {
	var data_url = $(element).attr("data-url");
	var plan_year_id = $(element).attr("plan-year-id");
	var plan_id = $(element).attr("plan-id");

	if (data_url != '') {
		$(element).tooltip('hide');
		$(element).parent().closest('td').html(
				'<img class="" src="../images/ajax-loader.gif" />');

		$.ajax(
				{
					url : data_url,
					type : 'get',
					dataType : 'json',
					success : function(response) {

						if (response.success) {
							toastr.success(response.success);

						} else if (response.error) {
							toastr.success(response.error);
						}

						$.pjax.reload({
							container : '#reports-pjax-div',
							timeout : 4000,
							replace : false,
							url : staticurl + "firm-plan/reports?plan_year_id="
									+ plan_year_id + '&plan_id=' + plan_id,
							enablePushState : false
						});
						$("[data-toggle=tooltip]").tooltip();
					}

				}).done(function() {
			$("[data-toggle=tooltip]").tooltip();

		});
	}

}

/*
 * function downloadPdf(id,plan_year_id) {
 * 
 * 
 * $.ajax({ url : staticurl +
 * '/reports/report?id='+id+'&plan_year_id='+plan_year_id, type : 'get',
 * dataType:'json', success : function(response) {
 *  }
 * 
 * });
 * 
 *  }
 */

function generateTable() {
	var data = $('textarea[name=excel_data]').val();

	var rows = data.split("\n");

	var table = $('<table />');

	for ( var y in rows) {

		var td_y = parseInt(y) + 1;

		var cells = rows[y].split("\t");
		var row = $('<tr />');
		for ( var x in cells) {

			var td_x = parseInt(x) + 1 + 1;

			var num1 = cells[x];
			var num = num1.replace(/,/g, '');

			if (!isNaN(num)
					&& $("td.copy_cell_" + td_y + "_" + td_x + " input").length) {
				// rounding off
				num = Math.round(num);

				// adding commas
				num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

				$("td.copy_cell_" + td_y + "_" + td_x + " input").val(num);

				/** *******Calculation Part********** */
				var item_id = $("td.copy_cell_" + td_y + "_" + td_x + " input")
						.attr('id');
				var id = item_id.split("-");
				var id_val = id[1];
				Calculatemonthlyfinancials(id_val);
				/** *******Calculation Part********** */

				/** *******Trigger change********** */
				$("td.copy_cell_" + td_y + "_" + td_x + " input").trigger(
						'change');

			}
			// console.log($( "td [class='"+td_y+"_"+td_x+"']" ).find('input'));
			row.append('<td>' + cells[x] + '</td>');

		}
		table.append(row);
	}

	// Insert into DOM
	// $('#excel_table').html(table);
	$('#copy_from_excel_modal').modal('hide');
	$('textarea[name=excel_data]').val('');

}

function CalculatePharmacy() {
	var gross_total = 0;
	$(".pharmacy-sum").each(function(i) {
		var spend_val = $(this).val();
		spend_val = parseFloat(spend_val.replace(/\,/g, ""));

		if (isNaN(spend_val)) {
			spend_val = 0;
		}
		gross_total += spend_val;

	});

	if (gross_total != '' || gross_total != null) {

		if (isNaN(gross_total)) {
			gross_total = 0;
		}

		// gross_total = parseFloat(Math.max(0, gross_total));
		gross_total = parseFloat(gross_total);

		var total = gross_total.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		$('#pharmacy-2-4').val(total);
	}
}

/** ***** callback function called by html2pdf ******** */
function myCallbackReport(pdf, plan_year_id, plan_id, filename,
		report_master_id, header_pdf) {

	/*
	 * var pdf_pages = pdfObj.internal.pages; var width =
	 * pdfObj.internal.pageSize.width; for (var i = 1; i < pdf_pages.length;
	 * i++) { // We are telling our pdfObject that we are now working on this
	 * page if(i>1) { pdfObj.setPage(i); // The 10,200 value is only for A4
	 * landscape. You need to define your own for other page sizes
	 * pdfObj.addImage(header_pdf, 'jpeg', 0.6, 1, width - 1.6, 2.2); }
	 *  }
	 * 
	 * 
	 * 
	 * 
	 * var pdf = pdfObj.output('dataurlstring');
	 */
	// console.log(pdf);
	$.ajax({
		url : staticurl + 'reports/savereportpdf?',
		type : 'post',
		data : 'data=' + pdf + '&plan_year_id=' + plan_year_id + '&plan_id='
				+ plan_id + '&filename=' + filename + '&report_master_id='
				+ report_master_id,
		// contentType:
		success : function(response) {
			$('#loading-gif-reports').hide();
			// alert(response);
			if (response == 'success') {
				if (report_master_id == 5 || report_master_id == 9
						|| report_master_id == 10 || report_master_id == 11
						|| report_master_id == 12) {
					// window.open(staticurl+'web/pdf_reports/'+plan_id+'/'+filename);
					var fileURL = staticurl + 'web/pdf_reports/' + plan_id
							+ '/' + filename;
					SaveToDisk(fileURL, filename);
				} else {
					// window.open(staticurl+'web/pdf_reports/'+plan_id+'/'+plan_year_id+'/'+filename);
					var fileURL = staticurl + 'web/pdf_reports/' + plan_id
							+ '/' + plan_year_id + '/' + filename;
					SaveToDisk(fileURL, filename);
				}

				$.pjax.reload({
					container : '#reports-pjax-div',
					timeout : 4000,
					replace : false,
					url : staticurl + "firm-plan/reports?plan_year_id="
							+ plan_year_id + '&plan_id=' + plan_id,
					enablePushState : false
				});

			} else {
				console.log(response);
			}
		}
	});
}

/** ***** function to check pdf exists or not ******** */
function checkPdfExist(plan_year_id, plan_id, report_master_id, report_id,
		charts, filename, type) {

	$.ajax({
		url : staticurl + 'reports/checkpdfexistance?',
		type : 'post',
		data : 'plan_year_id=' + plan_year_id + '&plan_id=' + plan_id
				+ '&report_master_id=' + report_master_id,
		// contentType:
		success : function(response) {
			if (response == 'create') {
				/*
				 * html2pdf(element, { pdfCallback: myCallbackReport,
				 * plan_year_id: plan_year_id, plan_id: plan_id, newWindow:
				 * true, margin: 1, filename: filename, report_master_id:
				 * report_master_id, enableLinks: true, image: { type: 'jpeg',
				 * quality: 1 }, html2canvas: { dpi: 192, letterRendering: false },
				 * jsPDF: { unit: 'cm', format: 'a4', orientation: 'landscape' }, //
				 * header_pdf: header_pdf });
				 */
				generateReportPdf(plan_year_id, plan_id, report_master_id,
						report_id, charts, filename, type);
			} else if (response == 'open') {
				if (report_master_id == 5 || report_master_id == 9 || report_master_id == 10 || report_master_id == 11 || report_master_id == 12) {
					var fileURL = staticurl + 'web/pdf_reports/' + plan_id + '/' + filename;
					
					if(type != 'download'){
						fileURL = encodeURI(fileURL);
						$('#'+type).append( "<iframe id='"+type+"_block' src='"+fileURL+"'></iframe>" );
						var iframe = document.getElementById(type+'_block');
						iframe.contentWindow.print();
					}else{
						SaveToDisk(fileURL, filename);
					}					
				} else {
					var fileURL = staticurl + 'web/pdf_reports/' + plan_id + '/' + plan_year_id + '/' + filename;
					
					if(type != 'download'){
						fileURL = encodeURI(fileURL);
						$('#'+type).append( "<iframe id='"+type+"_block' src='"+fileURL+"'></iframe>" );
						var iframe = document.getElementById(type+'_block');
						iframe.contentWindow.print();
					}else{
						SaveToDisk(fileURL, filename);
					}					
				}
				$('#loading-gif-reports').hide();
			} else if (response == 'create report') {
				$('#loading-gif-reports').hide();
				toastr.error('Pls generate report first');
			} else {
				$('#loading-gif-reports').hide();
				console.log(response);
				toastr.error('Some error occured while creating PDF');
			}
		}
	});
}
/** ***** function to check pdf exists or not (for claim based reports) ******** */
function checkClaimBasedPdfExist(plan_year_id, plan_id, report_master_id,
		report_id, charts, fileName, type) {
	$.ajax({
		url : staticurl + 'reports/checkclaimbasedpdfexistance?',
		type : 'post',
		data : 'plan_year_id=' + plan_year_id + '&plan_id=' + plan_id
				+ '&report_master_id=' + report_master_id,
		// contentType:
		success : function(response) {
			if (response == 'create') {

				generateReportPdf(plan_year_id, plan_id, report_master_id,
						report_id, charts, fileName, type);
				/*
				 * for(var i=1; i< total_count;i++){ var element =
				 * document.getElementById('claim_specific_'+i);
				 * html2pdf(element, { pdfCallback: myCallbackClaimBasedReport,
				 * plan_year_id: plan_year_id, plan_id: plan_id, newWindow:
				 * true, margin: 1, count: i, total_count: total_count,
				 * filename: i+'.pdf', report_master_id: 1, enableLinks: true,
				 * image: { type: 'jpeg', quality: 1 }, html2canvas: { dpi: 192,
				 * letterRendering: false }, jsPDF: { unit: 'cm', format: 'a4',
				 * orientation: 'landscape' } }); }
				 * 
				 */
			} else if (response == 'open') {

				// window.open(staticurl+'web/pdf_reports/'+plan_id+'/'+file_name);
				var fileURL = staticurl + 'web/pdf_reports/' + plan_id + '/'
						+ fileName;					
				if(type != 'download'){
					fileURL = encodeURI(fileURL);
					$('#'+type).append( "<iframe id='"+type+"_block' src='"+fileURL+"'></iframe>" );
					var iframe = document.getElementById(type+'_block');
					iframe.contentWindow.print();
				}else{
					SaveToDisk(fileURL, fileName);
				}
				//SaveToDisk(fileURL, fileName);
				$('#loading-gif-reports').hide();

			} else if (response == 'create report') {
				$('#loading-gif-reports').hide();
				toastr.error('Pls generate report first');
			} else {
				$('#loading-gif-reports').hide();
				console.log(response);
				toastr.error('Some error occured while creating PDF');
			}
		}
	});
}

/** ***** callback function called by html2pdf (for claim based reports) ******** */
function myCallbackClaimBasedReport(pdf, plan_year_id, plan_id, filename,
		report_master_id, count, total_count) {
	$.ajax({
		url : staticurl + 'reports/saveindividualreports?',
		type : 'post',
		data : 'data=' + pdf + '&plan_year_id=' + plan_year_id + '&plan_id='
				+ plan_id + '&filename=' + filename + '&report_master_id='
				+ report_master_id,
		success : function(response) {
			if (response == 'success' && count == (total_count - 1)) {
				$.ajax({
					url : staticurl + 'reports/combinereports?',
					type : 'post',
					data : 'plan_year_id=' + plan_year_id + '&plan_id='
							+ plan_id + '&report_master_id=' + report_master_id
							+ '&total_count=' + count,
					success : function(response) {
						if (response == 'success') {
							if (report_master_id == 1) {
								var file_name = "Claims Trend Report.pdf";
							}
							// window.open(staticurl +
							// 'web/pdf_reports/'+plan_id+'/'+file_name);
							var fileURL = staticurl + 'web/pdf_reports/'
									+ plan_id + '/' + file_name;
							SaveToDisk(fileURL, file_name);
							$('#loading-gif-reports').hide();
						} else {
							console.log(response);
							$('#loading-gif-reports').hide();
						}

						$.pjax.reload({
							container : '#reports-pjax-div',
							timeout : 4000,
							replace : false,
							url : staticurl + "firm-plan/reports?plan_year_id="
									+ plan_year_id + '&plan_id=' + plan_id,
							enablePushState : false
						});
					}
				});
			} else {
				$('#loading-gif-reports').hide();
				console.log(response);
			}
		}
	});
}

function SaveToDisk(fileURL, fileName) {

	var fileURL = encodeURI(fileURL);
	
	// for non-IE
	if (!window.ActiveXObject) {
		var save = document.createElement('a');
		save.href = fileURL;
		save.target = '_blank';
		save.download = fileName || 'unknown';

		var evt = new MouseEvent('click', {
			'view' : window,
			'bubbles' : true,
			'cancelable' : false
		});
		save.dispatchEvent(evt);

		(window.URL || window.webkitURL).revokeObjectURL(save.href);
	}

	// for IE < 11
	else if (!!window.ActiveXObject && document.execCommand) {
		var _window = window.open(fileURL, '_blank');
		_window.document.close();
		_window.document.execCommand('SaveAs', true, fileName || fileURL)
		_window.close();
	}
}

/** ******** function to generate PDF of reports ************ */
function generateReportPdf(plan_year_id, plan_id, report_master_id, id, charts,
		fileName, type) {

	$.ajax({
		url : staticurl + 'reports/report?id=' + id + '&plan_year_id='
				+ plan_year_id + '&plan_id=' + plan_id + '&report_master_id='
				+ report_master_id,
		type : 'post',
		data : {
			chart : JSON.stringify(charts),
			fileName : fileName
		},
		dataType : 'json',
		// contentType:
		success : function(response) {

			if (response.success) {
				if(type != 'download'){
					$('#'+type).append( "<iframe id='"+type+"_block' src='"+response.fileURL+"'></iframe>" );
					var iframe = document.getElementById(type+'_block');
					iframe.contentWindow.print();
				}else{
					SaveToDisk(response.fileURL, response.fileName);
				}
				$('#loading-gif-reports').hide();
			}

		}

	});
}

function sendEmailReport(generated_report_id, plan_id, plan_year_id,
		report_title) {
	$('#reportsMail_toAddress').val('');
	$('#reportsMail_subject').val(report_title);

	$('.field-reportsMail-toAddress').removeClass('has-error');
	$('.field-reportsMail-toAddress').find('p.help-block').html('');

	$('.field-reportsMail-subject').removeClass('has-error');
	$('.field-reportsMail-subject').find('p.help-block').html('');

	$('#reports_email_modal').find('.modal-title').html(
			'Send ' + report_title + '');
	$('#emailReportsBtn').html('Send');
	$('#emailReportsBtn').removeAttr('disabled');
	$('#emailReportsBtn').attr(
			'onclick',
			'sendReport("' + generated_report_id + '","' + plan_id + '","'
					+ plan_year_id + '");');
	$('#reports_email_modal').modal('show');

}

function sendReport(generated_report_id, plan_id, plan_year_id) {

	if (document.getElementById("reportsMail_toAddress").value == '') {
		// document.getElementById("systempricing-bulk").style.borderColor =
		// "red";
		$('.field-reportsMail-toAddress').addClass('has-error');
		$('.field-reportsMail-toAddress').find('p.help-block').html(
				'To email address required');
		document.getElementById("reportsMail_toAddress").focus();
		return false;
	} else if (!validateEmail(document.getElementById("reportsMail_toAddress").value)) {
		$('.field-reportsMail-toAddress').addClass('has-error');
		$('.field-reportsMail-toAddress').find('p.help-block').html(
				'Vaild email address required');
		document.getElementById("reportsMail_toAddress").focus();
		return false;
	}

	else {
		// document.getElementById("systempricing-bulk").style.borderColor = "";
		$('.field-reportsMail-toAddress').removeClass('has-error');
		$('.field-reportsMail-toAddress').find('p.help-block').html('');

	}

	if (document.getElementById("reportsMail_subject").value == '') {
		// document.getElementById("systempricing-bulk").style.borderColor =
		// "red";
		$('.field-reportsMail-subject').addClass('has-error');
		$('.field-reportsMail-subject').find('p.help-block').html(
				'To email address required');
		document.getElementById("reportsMail_subject").focus();
		return false;
	} else {
		// document.getElementById("systempricing-bulk").style.borderColor = "";
		$('.field-reportsMail-subject').removeClass('has-error');
		$('.field-reportsMail-subject').find('p.help-block').html('');

	}

	var data = $('#reportsMailForm').serialize();
	data += '&plan_id=' + plan_id + '&plan_year_id=' + plan_year_id
			+ '&generated_report_id=' + generated_report_id;

	$('#emailReportsBtn').attr('disabled', 'disabled');
	$('#emailReportsBtn').html('Sending...');
	$.ajax({
		url : staticurl + 'firm-plan/send-report-mail',
		type : 'post',
		data : data,
		dataType : 'json',
		success : function(response) {

			if (response.error) {

				toastr.error(response.error);
				$('#emailReportsBtn').html('Send');
				$('#emailReportsBtn').removeAttr('disabled');

			} else if (response.success) {

				toastr.success(response.success);
				$('#emailReportsBtn').html('Sent');
				$('#reports_email_modal').modal('hide');

			}

		}
	});

}
function validateEmail(email) {
	var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (reg.test(email))
		testresults = true;
	else
		testresults = false;
	return (testresults);
}

function printPdf(id) {
	var iframe = document.getElementById(id);
	iframe.contentWindow.print();
}