## Chapter10. 일정관리 웹 어플리케이션 개발

---
### Setting

* nvm list 명령어로 현재 node version 확인
* v12.9.0으로 setting하고
* create-react-app todo-list 명령어 실행
* yarn eject 명령해서, config 폴더 eject하고
* webpack.config.js 수정해야하는데, 수정해도 안 먹어서, 일단 원상태로 유지
* paths.js 파일에  styles: resolveApp('src/styles') 추가
* [paths.js](../todo-list/config/paths.js)

* 중요한 명령
    * yarn add sass-loader node-sass classnames
    * yarn add open-color

---
### 전체적인 구성

* 내가 내 개인 프로젝트를 만들 때 어떤 방식으로 구성해야하는지 생각해보면서 이 프로젝트를 따라해보는 것이 중요

---
### 상태 관리(Without Redux)

* 개발을 할 때 상태 관리는 주로 기능별로 상태가 필요한 컴포넌트들을 감싸는 상위 컴포넌트에서 하는 것이 편리

* 소규모이므로 App에서 해도 된다. 

* parent(root)에서 정의한 state값과 메서드를 props를 통해서 children 컴포넌트에 전달해서 사용하는 것이 바람직한 흐름!

---
### stopPropagation

* 자식 요소에도 onClick, 부모 요소에도 onClick 이벤트가 설정되어 있다면 자식->부모 순으로 메서드가 실행되는데, 이를 propagation이라고 함

* 이를 방지하려면, 자식의 onClick 내부에서 e.stopPropagation() 실행해야 한다.
