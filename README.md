# Learn_Express.js

Node.js는 강력하지만, 그 API는 때로 힘이 부족해 장황한 코드를 작성하게 함.

Express는 Node.js의 웹 서버상에 <u>얹히는</u> 프레임워크임.
Node.js 웹 서버 최상위의 경량 계층으로 동작하는 프레임워크인 Express

일반적으로 Vanilla API는 장황함(Node.js).


이런 면에서 Express는 철학적으로 jQuery와 유사함.
  1. Vanilla API의 장황함을 단순화
  2. 유용한 새로운 기능 추가
  3. 확장성 지향 - 대부분 불필요한 간섭 없이, 서드파티 라이브러리로 쉽게 확장 가능

## Node.js 비즈니스
* Node.js는 JavaScript 플랫폼으로, <u>JavaScript를 실행하는 방식</u>
* JavaScript를 브라우저 외부에서 실행한다는 것은 
실제로 일반 프로그래밍 언어에서 할 수 있는 모든 것을 할 수 있다는 의미

Node.js 덕분에 JS를 서버에서 실행할 수 있다는 것을 알았음
근데 왜 사용해야할까?
* 즉, Node.js를 통해 JS를 C, Java와 같은 프로그래밍 언어로서 사용해볼만 한 이점은 무엇일까?
이유는 대략 두 가지임
1. 빠른 JS 엔진 - **V8** -> 절대적인 수치인지는 모르겠음 C보다는 느리겠지
2. 동시성을 다루는 능력 - **비동기**

비동기 코드는 코드를 병렬로 실행하지 못해도 더 빨리 끝낼 수 있음

but,
Node.js는 하나의 CPU 코어에 대해 최대 성능을 짜내지만,
멀티 코어로 성능을 가속시키지는 못함

저자는 개인적으로, Node.js를 선택하는 가장 큰 이유가 성능은 아니라고 생각한다고 함(...)
가장 큰 이유는 JavaScript 하나로 클라이언트, 서버 모두 사용할 수 있다는 점임

## Express
Node.js의 웹 서버 기능 위에 올라가는 상대적으로 작은 프레임워크
Node.js의 API를 단순화하고 유용한 새로운 기능(미들웨어, 라우팅)을 추가함
Node.js의 HTTP 개체에 유용한 유틸리티를 추가했고, 동적 HTML 뷰의 렌더링을 용이하게 함
쉽게 구현된 확장성 표준을 정의함



# Reference
1. <i>< Express in Action ></i>
2. 