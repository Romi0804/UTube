# 20190618 Youtube clone 

# About Node. JS
--
### What is Node.JS?

Javascript는 Browser에 내장되어 있다.
Node.JS는 JS를 Browser밖으로 가지고 나와서 유저가 사용할수 있게 한것이다.
자바스크립트가 브라우저 밖에서 유저의 컴퓨터에서 돌아갈수 있도록.

It is Javascript outside of the Browser.

우리는 File system을 다룰수 있는데, Javascript를 이용해Server를 만들수도 있고, Web scrapper를 만들어서 웹페이지에 접속해 필요한 정보를 수집 할 수도 있다.

왜냐면, Javascript는 프로그래밍 언어니까.
그래서 Javascript를 이용해서 브라우저와는 별도로 작동되는 것을 만들수 있다. 그것이 바로 Node.JS !

우리는 Node.JS를 이용해서 모바일 어플리케이션도 만들수 있고, Electron 어플도 만들수 있어. 더이상 Javascript를 쓰기위해 브라우저가 필요없으니까.
브라우저에 종속되고, 브라우저에 맞춰 설계된 언어였는데, 이제는 다양한 목적으로 자바스크립트를 쓸수 있게 되었다.

--

### Why should I choose Node.JS ?

제대로 갖춰진걸 원한다면 장고나 라라벨을 선택하는것이 맞지만,
coustomize 하고 마음대로 원하는 것들을 자유롭게 붙이고 떼고 싶다면 Node.JS를 사용하면 된다.

Node.JS를 사용하는 가장 좋은 케이스는 내가 많은 데이터를 움직여야 할때이다.
Database 생성, Database삭제, 사용자에게 전송하고, 이쪽에서 받아서 저장하고, 알림, 실시간처리 등등
Node.JS 는 데이터를 다루는 성능이 아주 좋다.


근데, 하드웨어 파워가 필요하고 서버를 이용해야 하는 경우, Data science 나, 이미지를 crop하고 filter를 적용하고 저장해야하는 경우, Node.JS는 도움이 안된다.
메모리, 램 같은 내 컴퓨터 하드웨어에 자바스크립트는 접근할수 없다.

자바스크립트는 하드웨어, 하드코어한것들을 처리하기 위해 설계된 언어가 아니야.
하드코어한 처리, 즉, 서버의 램을 필요로하고, 서버의 하드드라이브를 써야하고, 바이트단위의 어려운 작업이나, 비디오 인코딩, 디코딩 같은 어려운 작업을 해야한다면, node.JS 보단 장고같은 걸 쓰는게 좋다.

단순히, 데이터를 저장하고 보여주고 생성하고 삭제하고 그걸 최대한 빠르게 실시간으로 보여준다고 하면(Realtimeway!!) Node.JS 만한건 없다.

만약, 채팅기능을 만든다면 python으로 만들지 않는것이 좋다. python은 비동기 언어가 아니기 때문에 실시간 처리를 할 element가 없어. 채팅기능을 만든다면 분명 Node. JS가 필요할거야.

지금부터 우리가 만들 Youtube clone은 정적인 웹사이트가 될거야 그닥, Interactive 하지 않아.
로그인, 로그아웃, 프로필수정, Form 처리, 파일업로드, 파일 다운로드 처리 => Node.JS로 다루기 딱 ! 좋아 !

이것과 같은 정적인 웹사이트를 보면, 클릭하면 다른 페이지를 볼수 있고.. 이런것들. 장고도 이런 정적인 웹사이트를 만들기 좋긴하다.(like 인스타그램), PHP를 가지고 Laravel로 해도 좋아.

이렇게 우리가 어떤 프로젝트를 함에 있어서 효율적으로 일하기 위해서는 언어별 장단점을 잘 알고, 목적에 맞는 언어를 잘 선택하여 빌드업 해야한다.

미니멀리스틱하고 간략한 프로그래밍을 위해 좋은 Node.JS ! 
0부터 시작하고 아무것도 없는 상태에서 내가 원하는대로 추가하고 만드는 방식에 매우 적합하다. 

--

### Who uses Node.JS ?

누가 Node.JS를 이용하는가. Paypal, Uber, Netflix 등이 있다. 모두 데이터를 다루는게 맹점인 회사들. 

--

### How to install Node.JS ?

Mac OS User들은 Brew를 통해 install 이 가능하다.

`brew install node`

`brew upgrade node`


  
