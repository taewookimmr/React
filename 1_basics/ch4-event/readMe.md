## Event Handling

### Introduction

* user가 web browser에서 DOM요소들과 상호작용하는 것을 event라고 한다.
* 이벤트 사용 시 주의 사항

    * 이벤트 이름은 camelCase로 작성한다. 
    * 이벤트를 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다. 화살표 함수를 전달한다.
    * DOM 요소에만 이벤트를 설정할 수 있다.
        * DOM 요소란 : div, button, input, form, span
        * 즉, custom 컴포넌트에 직접! 이벤트를 설정할 순 없다
        * 하지만, props로 넘겨서 설정할 수 있지
            ```javascript
            <div onClick={this.props.onClick}>...</div>
            ```

