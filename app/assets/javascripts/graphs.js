var loans = []; 
var grants = [];  
var years = []; 
var universities = []; 

// Retrieves data from database for charts 
  function getTotals() {
    $.getJSON("/totals", function(response) {
      for (i = 0; i < response.length; i++){ 
        l = response[i]["loans"]
        g = response[i]["grants"] 
        y = response[i]["year"]  
        u = response[i]["universities"]
        loans.push(l)
        grants.push(g)
        years.push(y)
        universities.push(u)
      }
      createTotalsGraph(); 
      createUniGraph(); 
      createDonut(); 
    });
  } 

// Creates Summary bar graph 
  function createTotalsGraph(){
    var data = {
      labels: years,
      datasets :[ 
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : loans
        },
        {
          fillColor : "rgba(54, 77, 25,0.5)",
          strokeColor : "rgba(54, 77, 25,1)",
          pointColor : "rgba(54, 77, 25,1)",
          pointStrokeColor : "#fff",
          data : grants  
        }, 
      ]
    }
    var myLine = new Chart(document.getElementById("intro-chart").getContext("2d")).Line(data);
  }

// Creates bar graph with number of universities funded 
  function createUniGraph(){
    var data = {
      labels: years,
      datasets :[ 
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : universities 
        }
      ]
    }
    var myLine = new Chart(document.getElementById("uni-chart").getContext("2d")).Line(data);
  }

 // function createDonutDoms(){
 //    for(i = 0; i < years.length; i++)
 //      document.createElementById(years[i]
 //        id = years[i]

 // }

 function createDonut(){
    var data = [
      {
        value: 30,
        color:"#ADE0A3" 
      },
      {
        value : 50,
        color : "#2F8E31"
      },
    ]

    var options = {  segmentShowStroke : false } 

  var ctx = document.getElementById("donut-chart").getContext("2d");
  new Chart(ctx).Doughnut(data, options);
}
 

// Fades in homepage with overview bar chart 
  function homeAnimation (){
    $('#chart1').hide(); 
    $('#chart2').hide(); 
    $('#all-lvgdonut').hide(); 
    $('#about').hide(); 
    $('#chart1').addClass('animated fadeInDown').show(); 
  }

// Menu functions 

  function menuCommands(){
    $('#home-button').on("click", function(){
       $('#chart1').hide(); 
       $('#chart2').hide();
       $('#all-lvgdonut').hide(); 
       $('#about').hide(); 
       $('#chart1').addClass('animated fadeInDown').show()
    }); 

    $('#funding-button').on("click", function(){
       $('#chart1').hide(); 
       $('#chart2').hide(); 
       $('#all-lvgdonut').hide(); 
       $('#about').hide(); 
       $('#all-lvgdonut').addClass('animated fadeInDown').show(); 
    });

    $('#university-button').on("click", function(){
       $('#chart1').hide(); 
       $('#chart2').hide(); 
       $('#about').hide(); 
       $('#all-lvgdonut').hide(); 
       $('#chart2').addClass('animated fadeInDown').show()
    }); 

    $('#about-button').on("click", function(){
       $('#chart1').hide(); 
       $('#chart2').hide(); 
       $('#all-lvgdonut').hide(); 
       $('#about').hide(); 
       $('#about').addClass('animated fadeInDown').show()
    }); 
  }

$(getTotals());
$(homeAnimation()); 
$(menuCommands()); 
