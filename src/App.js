import React from 'react';

function Food(potato){
  //console.log(potato);
  return <h1>I like {potato.fav}</h1>;
}
//컴포넌트로 데이터를 보내는 방법 : props
//단, 문자열을 제외한 경우는 모두 중괄호로 값을 감싸야 한다
function App() {
  return (
  <div>
      <h2>Hello!!!</h2> 
      
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="쭈꾸미"/>
      <Food fav="고르곤졸라 피자"/>
      <Food fav="명란 파스타"/>
  </div>);
}

export default App;
