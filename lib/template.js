module.exports={
    list:function(title,slide){
        var list='';
        // console.log('itle[0].name: '+title[0].name);
        // console.log('slide[0].name : '+slide[0].name);
        // console.log('title.length:'+title.length);
        
        for(var i=0;i<title.length;i++){
            
            if(title[i].name != '연구과정'){
                list+=`<li class="labs"><a  id="nav_list">${title[i].name}</a></li>`;

            }else{
                list+=`<li class="labs" id="slide_nav" >                   
                <a style="cursor: pointer;" id="nav_list">${title[i].name}</a>
                <div class="slide_menu">
                     `;
                for(var j=0;j<slide.length;j++){
                    list+=`<div><a id="slide_list" >${slide[j].name}</a></div>`
                }
                list+=`</div>`;
                
            }
         
        }
        return list;
     
    },
    html:function(list){
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>그래프 예측</title>
        <!-- fontawsome: 아이콘 -->
        <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
        <script src="https://kit.fontawesome.com/2d323a629b.js"></script>
        <!-- 구글 폰트 -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
        <!-- IBM Plex KR Font -->
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300&display=swap" rel="stylesheet">
        <!-- css 스타일 -->
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/graph_pred.css">
        <script src="js/hamberg.js" defer></script>
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    
       
    </head>
    <body>
        <nav class="navbar"id="nav">
            
    
            <ul class="navbar_menu">
                <li class="navbar_logo" style="font-size: 36px;">
                    <i class="fas fa-bolt"></i>
                    <a >Team Eletricity</a>
                    </li>
            
                    ${list}
            
                
            </ul>
            <a  class="navbar_togleBtn">
                <i class="fas fa-bars"></i>
            </a>   
           
            <script src="js/navigation_slide.js"></script> 
            
           
           
           
        </nav>
        <section class="graph_content">
        
           
            <div class="graph_predict">그래프 예측</div>
            <div class="graph_title">2016년 런던의 가정용 전력 사용량을 이용한 예측 그래프입니다..</div>
            <div class="month_select">월을 선택해주세요. <select  id="month" type="number">
                <option value="2016-01%">1</option>
                <option value="2016-02%">2</option>
                <option value="2016-03%">3</option>
                <option value="2016-04%">4</option>
                <option value="2016-05%">5</option>
                <option value="2016-06%">6</option>
                <option value="2016-07%">7</option>
                <option value="2016-08%">8</option>
                <option value="2016-09%">9</option>
                <option value="2016-10%">10</option>
                <option value="2016-11%">11</option>
                <option value="2016-12%">12</option>
            </select>
    
    
            </div>
       
        <div id="lstm_chart" align='center' ></div>
        <div id="cnn_chart" align='center' ></div>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script defer src="./btn"></script>
        <div class="data_explain">
            <div class="traing_period">
                Training <br> (2013~2014)
            </div>
            <div class="validation_period">
                Validation <br> (2015)
            </div>
            <div class="test_period">
                 Test <br> (2016)
            </div>
        </div>
        <div class="explain_content">
            -Training&Validation <br>
            2013년 1월 부터 2014년 12월까지의 데이터는 학습(Training)용 데이터로 딥러닝 모델에 적용했고 <br>
            2015년의 데이터는 모델 성능의 평가(Validation) 데이터로 사용했습니다. <br><br>
            
            -Test<br>
            2016년의 데이터는 그래프에서 실제값을 나타내며<br>
            딥러닝 모델이 예측한 값과 얼만큼 차이를 보이는 지 비교할 수 있는 값 입니다<br>
         
        </div>
        </section>
        
    </body>
    </html>
    `;
  }
}