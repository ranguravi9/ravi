
function diagnosisType(data){
	return Highcharts.chart('diagnosis_container', {


		// renewal projections
		 
			  chart: {
		 	     backgroundColor: '#ffe4d6',
		 	     polar: true,
		 	     type: 'scatter',
		 	     zoomType: 'xy'
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
		    
		    
			   xAxis: {
				  
			    	
				        startOnTick: true,
				        endOnTick: true,
				        lineColor: 'rgb(173, 170, 161)',
				        lineWidth: 2,
				      
			    	 title: {
			    		  style: {
			    	 	         color: 'black',
			    	 	      },
			              enabled: true,
			              text: ''
			          },
			          labels: {
					         style: {
					             color: 'black'
					         }
					       
					    },
			          gridLineWidth: 1,
			          gridLineColor: '#439bd1',
			        //  categories: data['years']
			    },
			    yAxis: {
			    	
			    	//opposite: true,
					 allowDecimals: false,
			    	 
			    	
			    	// lineColor: 'rgb(173, 170, 161)',
			    	// minorGridLineColor: 'rgb(173, 170, 161)',
			        
			   	 labels: {
			         style: {
			             color: 'black'
			         },
					 formatter: function () {
					return   '$' + numberWithCommas(this.value);
				}
			       
			    },
			        title: {
			        	 style: {
			     	         color: 'black',
			     	      },
			            text: ' '
			        },
			        
			    	// minorTickInterval: 'auto',
			    	// minorGridLineColor: 'rgb(173, 170, 161)',
				        startOnTick: true,
				        endOnTick: true,
				        lineColor: 'rgb(173, 170, 161)',
				        lineWidth: 2,
				        gridLineWidth: 1,
				        gridLineColor: '#439bd1',
				     
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
				itemStyle: { "color": "black",fontFamily: "Lato, sans", },
		    },
		    plotOptions: {
				 /*series: {
            marker: {
                enabled: false
            }
        },*/
		        scatter: {
		            marker: {
		                radius: 5,
		                states: {
		                    hover: {
		                        enabled: true,
		                        lineColor: 'rgb(100,100,100)'
		                    }
		                }
		            },
		            states: {
		                hover: {
		                    marker: {
		                        enabled: false
		                    }
		                }
		            },
		            tooltip: {
		                headerFormat: '<b>{series.name}</b><br>',
		                pointFormat: '$ {point.y}'
		            }
		        }
		    },
			
		    exporting: { enabled: false },
			 colors: ['#439bd1','#fc793f','#a4a4a4','#ffbd36','#3073bf','#63ac52'],
		    series: data['data']
		  
		});
}

function memberType(data){
	return Highcharts.chart('member_container', {


		// renewal projections
		 
			  chart: {
		 	     backgroundColor: 'transparent',
		 	     polar: true,
		 	     type: 'scatter',
		 	     zoomType: 'xy'
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

		    xAxis: {
		    	
		   	// minorTickInterval: 'auto',
	    	// minorGridLineColor: 'rgb(173, 170, 161)',
		        startOnTick: true,
		        endOnTick: true,
		        lineColor: 'rgb(173, 170, 161)',
		        lineWidth: 2,
		        
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
		       // categories: data['years'],
		          gridLineWidth: 1,
		          gridLineColor: '#439bd1',
		    },
		    yAxis: {
				// allowDecimals: false,
		    	 //gridLineColor: 'rgb(173, 170, 161)',
		    	  
			    	 lineColor: 'rgb(173, 170, 161)',
			    	// minorTickInterval: 'auto',
			    	// minorGridLineColor: 'rgb(173, 170, 161)',
				       startOnTick: true,
				        endOnTick: true,
				      //  lineColor: 'rgb(173, 170, 161)',
				        lineWidth: 2,
		   	 labels: {
		         style: {
		             color: 'black'
		         },
		       formatter: function () {
				return   '$' + numberWithCommas(this.value);
			}
		    },
		        title: {
		        	 style: {
		     	         color: 'black',
		     	      }
		            //text: ''
		        },
		    gridLineWidth: 1,
	          gridLineColor: '#439bd1',
		    },
		   /* yAxis: {
		        gridLineWidth: 1, // The default value, no need to change it
		        lineColor: '#adaaa1',
		        gridLineColor: '#adaaa1',
		        formatter: function () {
					return   '$' + numberWithCommas(this.value);
				}
		    },

		    xAxis: {
		        gridLineWidth: 1, // New value
		        lineColor: '#adaaa1',
		        gridLineColor: '#adaaa1'
		        //categories: data['years']
		    },*/
		    legend: {
		        align: 'center',
		       // x: -30,
		        verticalAlign: 'bottom',
		        //y: 25,
		        floating: false,
		       // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'black',
		       // borderColor: '#CCC',
		      //  borderWidth: 1,
		        shadow: false,
				itemStyle: { "color": "black" ,fontFamily: "Lato, sans", }
		    },
		    plotOptions: {
				/* series: {
            marker: {
                enabled: false
            }
        },*/
		        scatter: {
		            marker: {
		                radius: 5,
		                states: {
		                    hover: {
		                        enabled: true,
		                        //lineColor: 'rgb(100,100,100)'
		                    }
		                }
		            },
		            states: {
		                hover: {
		                    marker: {
		                        enabled: false
		                    }
		                }
		            },
		            tooltip: {
		                headerFormat: '<b>{series.name}</b><br>',
		                pointFormat: '$ {point.y}'
		           }
		        }
		    },
		    exporting: { enabled: false },
			 colors: ['#439bd1','#fc793f','#a4a4a4'],
		    series: data['data']
		  
		});
}

$('#spec_report_modal').on('show.bs.modal', function() {
    $('#diagnosis_container').css('visibility', 'hidden');
	  $('#member_container').css('visibility', 'hidden');
});
$('#spec_report_modal').on('shown.bs.modal', function() {
    $('#diagnosis_container').css('visibility', 'initial');
	 $('#member_container').css('visibility', 'initial');
	  spec_report1.reflow();
    spec_report2.reflow();
});