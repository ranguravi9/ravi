
function PlanCostByYear(data){
console.log(data);
return Highcharts.chart('year_over_year1', {

chart: {
     backgroundColor: 'transparent',
     polar: true,
    // type: 'column',
  
  },
  credits: {
    enabled: false
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
    categories: data['years']
},
yAxis: {
	 allowDecimals: false,
	labels: {
     style: {
         color: 'black'
     },
    formatter: function () {
			return   '$' +  numberWithCommas(this.value);
		}
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
	symbolRadius: 0,
	symbolWidth: 15,
    align: 'center',
   // x: -30,
    verticalAlign: 'bottom',
    //y: 25,
    floating: false,
   // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'black',
   // borderColor: '#CCC',
  //  borderWidth: 1,
    shadow: false,
	 itemStyle: { color: "black",fontFamily: "Lato, sans" },
},
tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: $ {point.stackTotal}'
},
plotOptions: {
	 series: {
            marker: {
                enabled: false
            }
        },
    column: {
        stacking: 'normal',
        dataLabels: {
            enabled: false,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black'
        }
    }
},
colors: ['#e0811b', '#edc400','#7db041','#df4946' ,'#bffe8e'],
series: data['PlanCostsArray']
});

}

function PePmPlanCost(data){
	return Highcharts.chart('year_over_year2', {
	    chart: {
			backgroundColor: 'transparent',
	        
	    },
		credits: {
    enabled: false
  },
	    title: {
	        text: ''
	    },
	    subtitle: {
	        text: ''
	    },
		exporting: { enabled: false },
	    xAxis: {
			labels: {
	     style: {
	         color: 'black'
	     },
	   
	},
		 
	           categories: data['years'],
	        tickmarkPlacement: 'on',
	        title: {
			 style: {
		         color: 'black',
		      },
	       enabled: true,
	       text: ''
	   },
	    },
	    yAxis: {
			 allowDecimals: false,
			  title: {
	            text: ''
	        },
	        labels: {
	            
				style: {
	         color: 'black'
	     },
		 
	    formatter: function () {
				return   '$' +  numberWithCommas(this.value);
			}
		 
	        }
	    },
		legend: {
			symbolRadius: 0,
	symbolWidth: 15,
	    align: 'center',
	   // x: -30,
	    verticalAlign: 'bottom',
	    //y: 25,
	    floating: false,
	   // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'black',
	   // borderColor: '#CCC',
	  //  borderWidth: 1,
	    shadow: false,
		 itemStyle: { color: "black",fontFamily: "Lato, sans" },
	},
	    tooltip: {
	        split: true,
	        valueSuffix: ''
	    },
	    plotOptions: {
			 series: {
            marker: {
                enabled: false
            }
        },
	        area: {
	            stacking: 'normal',
	            lineColor: '#666666',
	            lineWidth: 1,
	            marker: {
	                lineWidth: 1,
	                lineColor: '#666666'
	            }
	        }
	    },
		colors: ['#e0811b', '#edc400','#81b34a','#dd2f05' ],
	    series: [
		 {
	        name: 'Employer PEPM',
			type: 'area',
	        data: data['employer_pepm'],
	    },
		{
	        name: 'Employee PEPM',
			type: 'area',
	        data: data['employee_pepm']
	    }
		, {
	        type: 'spline',
	        name: 'Employer PMPM',
	        data: data['employer_pmpm'],
	        marker: {
	            lineWidth: 2,
	            lineColor: Highcharts.getOptions().colors[3],
	            fillColor: 'white'
	        }
	    },
		 {
	        type: 'spline',
	        name: 'Employee PMPM',
	        data: data['employee_pmpm'],
	        marker: {
	            lineWidth: 2,
	            lineColor: Highcharts.getOptions().colors[3],
	            fillColor: 'black'
	        }
	    },
		]
	});
}


$('#year_over_year_modal').on('show.bs.modal', function() {
       $('#year_over_year1').css('visibility', 'hidden');
		  $('#year_over_year2').css('visibility', 'hidden');
   });
   $('#year_over_year_modal').on('shown.bs.modal', function() {
       $('#year_over_year1').css('visibility', 'initial');
		 $('#year_over_year2').css('visibility', 'initial');
		  yearoveryear.reflow();
       yearoveryear2.reflow();
   });