## 컴포넌트 반복

---
### JS 배열의 map() 함수

* 배열 객체의 내장 함수 map 사용하여 반복되는 컴포넌트를 렌더링할 수 있다. 

    ```js
    var numbers = [1,2,3,4,5];
    var processed = numbers.map(functon(num){return num*num;});
    console.log(processed);
    ```
    * ES6 문법은 다음과 같음
    ```js
    const numbers = [1,2,3,4,5]
    const result = numbers.map(num=>num*num);
    console.log(result)
    ```

* 데이터 배열을 컴포넌트 배열로 map하기

    ```js
    import React, {Component} from 'react';
    
    class IterationSample extends Component{
        render(){
            const names = ['a', 'b', 'c', 'd'];
            const nameList = names.map(
                (name) => (<li>{name}</li>)
            );
            return (
                <ul>
                    {nameList}
                </ul>
            );
        }
    }
    export default IterationSample;
    ```

### key

* 리액트에서 key는 컴포넌트 배열을 렌더링했을때 어떤 원소에 변동이 있었는지 알아내려고 사용

* key가 없을 때는 v-DOM을 비교하는 과정에서 리스트를 순차적으로 비교하며서 변화를 감지

* 하지만 key가 있다면 이 값을 이용하여 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있다. 

* key 설정
    * map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정하면 된다! 
    * key는 unique해야 한다. 다음은 example

    ```js
    import React, {Component} from 'react';
    
    class IterationSample extends Component{
        render(){
            const names = ['a', 'b', 'c', 'd'];
            const nameList = names.map(
                (name, index) => (<li key={index}>{name}</li>)
            );
            return (
                <ul>
                    {nameList}
                </ul>
            );
        }
    }
    export default IterationSample;
    ```
    

### 응용

* 아래 코드를 직접 보세요~

* [코드](../hello-react/src/Chapter6/IterationSample.js)