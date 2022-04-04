
Mysql과 NodeJS를 이용한 전력 예측 페이지 제작(그래프 예측 페이지만 구현했음, 다른 페이지는 동작하지 않음)

개발 언어 : HTML,CSS,JavaScript,Node.js,Mysql
Node Libraries : mysql,cors,express,fs

    파일 설명:
        
        -lib Directory
        
            1.db.power.js : 
              기능1 : 2016년 1월1일 부터 12월31일 까지의 전력 실제값과 예측값이 들어가있는 데이터베이스
              기능2 : 페이지 상단에 버튼을 반복문으로 구현하기위해서 Mysql에 버튼 이름을 데이터베이스화했음
            3.template.js : HTML코드가 담기는 부문 Header부분을 List변수로 선언해서 DB에서 읽어오게 구현함
            4.topic.js : 'Select * from' SQL문으로 상단 버튼의 텍스트를 읽어옴 header 테이블에는 상단 버튼을 list 테이블에서는 연구과정 하위 버튼을 읽는 부분

         -public : Node.js에서 css,js,img Directory를 읽을수있게 담은 폴더

         -read.js : 
            1.전력 예측 테이블에서 날짜,예측값,실제값을 가지고 오고 배열로 저장한다 
              그리고 btn.js로 Post값으로 전송한다.
            
            2.3040포트로 html코드 전송
        
         -btn.js : 구글 차트로 read.js에서 받아온 전력값을 구글 차트에 Column으로 넣고 ID가 cnn_chart 인 곳에 차트를 출력해준다.
          js에서 날짜를 읽어올 때 런던표준시로 나오는데 이를 그대로 구글 차트에 넣어도 윈도우 시간 기준으로 해당 국가의 표준시로 자동 변환해준다.
    
실제 구현한 화면
![db](https://user-images.githubusercontent.com/77738437/161460028-85445930-a517-401e-a49f-ecb7b25c0dd3.PNG)

          

     


            


