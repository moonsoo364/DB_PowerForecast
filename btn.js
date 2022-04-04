'use strict'



window.addEventListener('load',()=>{
  document.getElementById('month').value="2016-01%";
  console.log(month.value);
  fetch('http://localhost:3040/cnn',{
    method: 'POST',
    headers:{
      "Content-Type":'application/json',
    },
    body: JSON.stringify({"month" : document.getElementById('month').value})
  })

  .then((res)=>{
   
    return res.json();
  })
  .then((call)=>{
    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(chartLoadCallback);
    function chartLoadCallback(){

      drawChart();
      window.onresize=function(event) {drawChart();};
    }
    function drawChart(){
      let realdata=[];
      var chartData=[
        ['날짜','실제 전력값','예측 전력값'],
      ];

      for(var i=0;i<call.length;i++){
    
        const day= new Date(call[i][1]);
        const predict=Number(call[i][2]);
        const real=Number(call[i][3]);
        
         
     
        realdata.push(day);     
        realdata.push(predict);
        realdata.push(real);
        chartData.push(realdata);
        realdata=[];
      
      }
      console.log(chartData);
      
      var dataTable=google.visualization.arrayToDataTable(chartData);
            
            var options={
              
              'title':' CNN+LSTM 모델로 1시간 단위로 예측한 그래프',

              "legend": {"position":'bottom'},
              "chartArea": {'width': '90%', 'height':'50%'},         
              "selectionMode":'multiple',
              "tooltip":{"trigger":'both'},
              "aggreationTarget":'none',
              "focusTarget":"category",
              "explorer":{
                "axis":'horizontal',
                "actions":['dragToZoom','rightClickToReset']
              },
              "crosshair":{
                "trigger":"both",
                "orientation":'vertical'
              },           
               width: '100%',
               height: $(window).height()*0.3,   
              hAxis: {
                gridlines: {
                  units: {
                    days: {format: ['dd일']},
                    hours: {format: ['HH', 'ha']},
                    
                  }
                },
                minorGridlines: {
                  units: {
                    hours: {format: ['hh a', 'ha']},
                    minutes: {format: ['HH a Z', ':mm']},
                   
                  }
                }
               
                
                
              },
              colors: ['#3CC2FF', '#CD1039' ]
              
            };
            var chart=new google.visualization.LineChart(document.getElementById('cnn_chart'));
            chart.draw(dataTable,options);

    }
    

  })
})

document.getElementById('month').addEventListener('change',()=>{
  fetch(`http://localhost:3040/cnn`,{
    method : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"month" : document.getElementById('month').value})
  })
  .then((res)=>{
   
    return res.json();
  })
  .then((call)=>{
    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(chartLoadCallback);
    function chartLoadCallback(){

      drawChart();
      window.onresize=function(event) {drawChart();};
    }
    function drawChart(){
      let realdata=[];
      var chartData=[
        ['날짜','실제 전력값','예측 전력값'],
      ];

      for(var i=0;i<call.length;i++){
    
        const day= new Date(call[i][1]);
        const predict=Number(call[i][2]);
        const real=Number(call[i][3]);
        
         
     
        realdata.push(day);     
        realdata.push(predict);
        realdata.push(real);
        chartData.push(realdata);
        realdata=[];
      
      }
      console.log(chartData);
      
      var dataTable=google.visualization.arrayToDataTable(chartData);
            
            var options={
              
              'title':' CNN+LSTM 모델로 1시간 단위로 예측한 그래프',

              "legend": {"position":'bottom'},
              "chartArea": {'width': '90%', 'height':'50%'},         
              "selectionMode":'multiple',
              "tooltip":{"trigger":'both'},
              "aggreationTarget":'none',
              "focusTarget":"category",
              "explorer":{
                "axis":'horizontal',
                "actions":['dragToZoom','rightClickToReset']
              },
              "crosshair":{
                "trigger":"both",
                "orientation":'vertical'
              },           
               width: '100%',
               height: $(window).height()*0.3,   
              hAxis: {
                gridlines: {
                  units: {
                    days: {format: ['dd일']},
                    hours: {format: ['HH', 'ha']},
                    
                  }
                },
                minorGridlines: {
                  units: {
                    hours: {format: ['hh a', 'ha']},
                    minutes: {format: ['HH a Z', ':mm']},
                   
                  }
                }
               
                
                
              },
              colors: ['#3CC2FF', '#CD1039' ]
              
            };
            var chart=new google.visualization.LineChart(document.getElementById('cnn_chart'));
            chart.draw(dataTable,options);

    }
    

  })

})