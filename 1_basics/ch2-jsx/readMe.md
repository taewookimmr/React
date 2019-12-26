## JSX

### Introduction

* 번들링이 뭔가? index.js와 관련
* webpack은 번들링 도구
* 리액트에서는 webpack을 사용하는 추세
* 이러한 번들링 도구를 사용하면, import로 모듈을 불러왔을 때 번들링되면서 모듈들을 파일 하나로 합쳐 준다. 
* webpack의 loader가 이를 담당한다. 
    * css-loader가 CSS 파일을 불러오고
    * file-loader가 웹 폰트, 미디어 파일을 불러온다. 
    * babel-loader : js파일들을 불러오면서 ES6로 작성된 코드를 ES5 문법으로 변환 
        * why 변환? : 구 버전의 웹 브라우저와 호환하기 위해서
* lodaer는 직접 설치, 설정해야 하지만, create-react-app이 이를 대신 해줌 
* ES6 특징 : 클래스 문법을 사용할 수 있다.
* render()가 반환하는 거 보자
    ```javascript
    render() {
        return (
        <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
        );
    }   
    ```
    * return 내부를 보면 마치 HTML 같지만 이는 JSX에 해당한다.

### JSX

* 자바스크립트의 확장 문법 : XML과 유사 
* JSX 코드는 나중에 번들링되면서, babel-loader에 의해 JS로 변환된다. 
* JSX는 리액트용, 공식 JS 문법이 아니다.
* 문법 
    * one-root 트리 구조가 형성되게 적절히 감싸야 한다. 이는 v-DOM에서 컴포넌트 변화를 감지해낼 때 효율적으로 비교할 수 있도록, 컴포넌트 내부는 DOM 트리 구조가 하나여야 한다는 규칙이 있기 때문

    * JSX 안에서 JS 표현식을 쓰려면 { }로 감싸면 됩니다.

    * 인라인 스타일링 : CSS 스타일을 자바스크립트 객체 형식으로 만들어서 적용해야 한다.
    
    * class 대신 className 
