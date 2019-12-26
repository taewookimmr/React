## Component

### props

* properties를 나타낸다. 컴포넌트 속성을 설정할 때 사용하는 요소
* 부모 컴포넌트가 자식 컴포넌트를, 마치 함수 호출하듯 호출할 때, 그 때 넘겨주는 매개변수와 같은 것이라고 생각할 수 있다.

* defaultProps를 설정하는 방법
    ```javascript
    // 컴포넌트 클래스 정의 내부에서
    static defaultProps = {
        name: 'Taewoo Kim'
    }
    // 이와 같이 설정한다.
    ```
* 컴포넌트의 필수 props를 지정하고나 props 타입을 지정할 때 : propTypes 사용

    ```javascript
    // 우선 import
    import PropTypes from 'prop-types'
    // 컴포넌트 클래스 정의 내부에서
    static propTypes = {
        name: PropTypes.string
    }
    ```

### state

* props : 부모 컴포넌트가 설정, 컴포넌트 자신은 props를 read-only 처럼 사용
* state : 컴포넌트 내부에서 read-write 할 수 있음
    * 이때 write(update)하려면 this.setState() 메서드를 사용
* state는 class construct 내부에서 정의할 수도 있지만, 외부에서도 정의 가능

    ```javascript
    class MyComponent extends Component{
        ...
        state = {
            number : 0
        }
        ...
    }
    ```
* state 값을 업데이트할 때 주의 사항 
    * setState() 함수로만 업데이트 해야한다!
