## CSS, SASS

---
### Introduction

```
1. nvm 자체의 version은 (nvm --version)으로 확인 >> 0.33.11
2. node의 version은 (nvm list) 명령으로 확인 
```

* 리액트에서 컴포넌트를 스타일링하는 데 획일화된 방식은 없다.

* webpack의 css-loader를 이용하여 일반 css를 불러오는 방식이 있다. 

* 방식
    * CSS MODULE : 모듈화된 css로 css 클래스를 만들면 자동으로 고유한 클래스네임을 생성하여 스코프를 지역적으로 제한하는 방식

    * Sass : css 전처리기, 확장된 css 문법 사용, css 코드를 더욱 쉽게 작성할 수 있게 해줌

    * styled-components : JS 코드 내부에서 스타일 정의

* yarn eject 명령
    * config 폴더를 최상위 dir로 꺼내기 위한 명령 


* 각 loader의 역할

    * style-loader : 스타일을 불러와 웹페이지에서 활성화하는 역할
    * css-loader : css 파일에서 import, url(...) 문을 webpack의 require 기능으로 처리하는 기능
    * postcss-loader : 모든 웹브라우저에서 입력한 css 구문이 제대로 작동할 수 있도록 자동으로 -webkit, -mos, -ms 등 접두사를 붙여준다.

