
$(function () {
	
                
               
                    
                    /***********************modal planrenewal *************************/
                /*    var chart_planrenewal =	Highcharts.chart('modal_planrenewal', {
                    		//$('#container').highcharts({

                    	chart: {
                    	     backgroundColor: 'transparent',
                    	     polar: true,
                    	     type: 'column',
                    	  
                    	  },
                    	  title: {
                    	 text: ''
                    	},
                    	exporting: { enabled: false },
                    	xAxis: {
                    		labels: {
                    	     style: {
                    	         color: 'black'
                    	     },
                    	   
                    	},
                    		  title: {
                    			 style: {
                    		         color: 'black',
                    		      },
                    	       enabled: true,
                    	       text: ''
                    	   },
                    	    categories: ["Jan-17", "Feb-17", "Mar-17", "Apr-17", "May-17", "Jun-17","Jul-17", "Aug-17", "Sep-17", "Oct-17", "Nov-17", "Dec-17"]
                    	},
                    	yAxis: {
                    		labels: {
                    	     style: {
                    	         color: 'black'
                    	     },
                    	   
                    	},
                    	    min: 0,
                    	    title: {
                    	        text: ''
                    	    },
                    	    stackLabels: {
                    	        enabled: false,
                    	        style: {
                    	            fontWeight: 'normal',
                    	            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    	        }
                    	    }
                    	},
                    	legend: {
                    	    align: 'center',
                    	   // x: -30,
                    	    verticalAlign: 'bottom',
                    	    //y: 25,
                    	    floating: false,
                    	   // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                    	   // borderColor: '#CCC',
                    	  //  borderWidth: 1,
                    	    shadow: false,
                    		itemStyle: { "color": "black" },
                    	},
                    	tooltip: {
                    	    headerFormat: '<b>{point.x}</b><br/>',
                    	    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                    	},
                    	plotOptions: {
                    	    column: {
                    	        stacking: 'normal',
                    	        dataLabels: {
                    	            enabled: false,
                    	            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black'
                    	        }
                    	    }
                    	},
						colors: [  '#13a9cc','#64b044','#7e3795'],
                    	series: [{
                    	    name: 'Medical Plan',
                    	    data: [60, 50, 10, 20,60, 50, 10, 20,60, 50, 10, 20]
                    	}, {
                    	    name: 'Dental Plan',
                    	    data: [40, 30, 10, 10,50, 40, 30, 10, 10,50, 8, 10]
                    	}, {
                    	    name: 'Vision Plan',
                    	    data: [30, 20, 5, 10,40, 30, 5, 10,50, 40, 5, 10]
                    	}]
                        });	
                       // var chart = $('#container').highcharts();
                        $('#chart-modal-planrenewal').on('show.bs.modal', function() {
                            $('#modal_planrenewal').css('visibility', 'hidden');
                        });
                        $('#chart-modal-planrenewal').on('shown.bs.modal', function() {
                            $('#modal_planrenewal').css('visibility', 'initial');
                            chart_planrenewal.reflow();
                        });   */
                    /***************************end modal ******************/
                        
                        /***********************modal earningdetails *************************/
                  /*      var chart_earningdetails =	Highcharts.chart('modal_earningdetails', {
                        		//$('#container').highcharts({
                         
                        	    chart: {
                        	        //renderTo: 'earnings-details',
                        	        type: 'pie',
                        	     //   backgroundColor:'#f0f4f5'
                        	    },
                        		  title: {
                        				 style: {
                        			         color: 'black',
                        			      },
                        		       enabled: true,
                        		       text: 'Apr 2016'
                        		   },
                        	    plotOptions: {
                        	        pie: {
                        	            innerSize: '60%'
                        	        }
                        	    },
                        	    exporting: { enabled: false },
                        	    colors: [  '#f7971e'],
                        	    series: [{
                        	        data: [
                        	            ['Details', 44.2],
                        	            
                        	            ]}]
                            });	
                           // var chart = $('#container').highcharts();
                            $('#chart-modal-earningdetails').on('show.bs.modal', function() {
                                $('#modal_earningdetails').css('visibility', 'hidden');
                            });
                            $('#chart-modal-earningdetails').on('shown.bs.modal', function() {
                                $('#modal_earningdetails').css('visibility', 'initial');
                                chart_earningdetails.reflow();
                            });   */
                        /***************************end modal ******************/
/*
 var chart= new Highcharts.Chart({
    chart: {
        renderTo: 'earnings-details',
        type: 'pie',
     //   backgroundColor:'#f0f4f5'
    },
	  title: {
			 style: {
		         color: 'black',
		      },
	       enabled: true,
	       text: 'Apr 2016'
	   },
    plotOptions: {
        pie: {
            innerSize: '60%'
        }
    },
    exporting: { enabled: false },
    colors: [  '#f7971e'],
    series: [{
        data: [
            ['Details', 44.2],
            
            ]}]
},
                                 
function(chart) { // on complete
    var textX = chart.plotLeft + (chart.plotWidth  * 0.5);
    var textY = chart.plotTop  + (chart.plotHeight * 0.5);

    var span = '<span id="pieChartInfoText" style="position:absolute; text-align:center;">';
    span += '<span style="font-size: 16px">$27,475</span><br>';
    span += '</span>';

    $("#addText").append(span);
    span = $('#pieChartInfoText');
    span.css('left', textX + (span.width() * -0.5));
    span.css('top', textY + (span.height() * -0.5));
});
 */
 

 //var chartbreakdown = $('.client_break_down').highcharts({
 


/*
 $(".redrawchart").click(function(){ 
 	
	// chartbreakdown.redraw();
	// chartbreakdown.reflow();
	 chartbreakdown.setSize(780,300);
	 chartrenewalmonth.setSize(780,300);
 //chart.setSize(w,h)chartrenewalmonth.redraw();
 //chartrenewalmonth.reflow();

 });
 */

}); 

