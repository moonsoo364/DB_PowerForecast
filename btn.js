'use strict'



window.addEventListener('load',()=>{
  fetch('http://localhost:3040/cnn',{
    method: 'POST',
    headers:{
      "Content-Type":'application/json',
    },
  })
  .then((res)=>{
    // console.log(res);
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
        // const day=new Date(call[i][1]);
        // const reg=new Date(call[i][1]+3240*10000).toISOString().replace("T","").replace(/\..*/,'');
        // console.log('reg : '+reg);
        // const str=String(day);
        // const slice=str.slice(0,5);
        const day= new Date(call[i][1]);
        const predict=Number(call[i][2]);
        const real=Number(call[i][3]);
        
         
        // console.log('slice(0,5) : '+typeof(day));
        //  realdata.push(new Date(call[i][1].slice(0,4),call[i][1].slice(5,7),call[i][1].slice(8,10),call[i][1].slice(11,13)));
        // realdata.push(new Date(2016,1,1,11));
        realdata.push(day);     
        realdata.push(predict);
        realdata.push(real);
        chartData.push(realdata);
        realdata=[];
        // console.log(call[i][2]);
        // console.log(call[i][3]);
        
      }
      console.log(chartData);
      
      var dataTable=google.visualization.arrayToDataTable(chartData);
            
            var options={
              
              'title':' 1월의 LSTM 모델로 1시간 단위로 예측한 그래프',

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
              colors: ['#2D9FF1', '#E22A2A' ]
              
            };
            var chart=new google.visualization.LineChart(document.getElementById('cnn_chart'));
            chart.draw(dataTable,options);

    }
    

  })
})