## Chapter11. 

---
### Introduction

* 프로젝트 규모가 커질수록 컴포넌트 리렌더링 최적화를 하지 않으면 리렌더링되는 과정에서 버퍼링, 즉 렉이 발생할 수 있다. 


---
### basics

* 우선 불필요한 리렌더링을 발견하는 것이 중요하다. 
    * chrome web browser의 react 개발자 도구 open
    * 위쪽 Hightlight Updates 옵션 활성화 
    * 그런데 이 항목이 없네 
    * Profiler를 활성화하고 여기서 Record하는 방법으로 대신할 수 있을 것 처럼 보인다.

    
* Chrome 개발자 도구의 Performance 탭으로 성능 상태를 시각적으로 확인 가능 

    * https://localhost:3000/?react-perf 처럼 주소 뒷부분에 react-perf를 붙여준다. 

* shouldComponentUpdate로 불필요한 리렌더링(v-DOM에서 진행되는)을 방지할 수 있다.





