## DOM에 이름 달기

---
### Introduction

* HTML에서 id를 사용하여 DOM에 이름을 다는 것처럼, 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법 : ref

* ref를 안쓰고 state만 사용해서 원하는 기능을 구현할 수 있는 상황이 있지만, 그렇지 않은 경우도 있다.
    * 특정 Input에 포커스 주기
    * 스크롤 박스 조작하기
    * Canvas 요소에 그림 그리기 등!

---    
### ref 사용

* ref를 달때는 props를 설정하듯 하면 됩니다. 
* ref 값으로는 콜백 함수를 전달한다. 
    ```js
    render() {
        return (
            <div>
                <input
                    ref={(ref) => {this.inputcom=ref}} // 일종의 ref 정의
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked?(this.state.validated?'success':'failure'):''}
                />
                <button 
                    onClick={this.handleButtonClick}
                >
                    Validate
                </button>

            </div>
        );
    }
    ```

    ```js
    // handleButtonClick 함수를 봅시다.

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.inputcom.focus(); // 이곳에서 ref를 사용하는 것이지!
    }

    ```

### 비구조화 할당, Destructuring assignment 문법

* 객체에서 특정 값을 추축하여 따로 레퍼런스를 만들 때 유용

### 정리

* 컴포넌트 내부에서 DOM에 직접 접근해야 할 때 ref를 사용한다. 
