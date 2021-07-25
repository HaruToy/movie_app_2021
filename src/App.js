import React from 'react';
import PropTypes from 'prop-types';
function Food({name,picture,rating}){
  //console.log(potato);
  return(
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>);
}
const foodLike=[
  {
    id :1,
    name:'Kimchi',
    image:'https://shop.hansalim.or.kr/im/is/activeDesigner/100101004_content1.jpg',
    rating: 5,
  },
  {
    id :2,
    name:'SamGyeopSal',
    image:'http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
    rating: 4.9,
  },
  {
    id :3,
    name:'BiBimBap',
    image:'http://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg',
    rating: 4.3,
  },
  {
    id :4,
    name:'DonCaSu',
    image:'http://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg',
    rating: 4.7,
  },
  {
    id :5,
    name:'KimBap',
    image:'https://lh3.googleusercontent.com/proxy/OfASIYWoK82xYuq2cDCoeu-nLo2F7awstfj-CI-qcYK1mm061gECAAhY0Q-5KBfw4j4YaPAaF5FleTrgA_H7XPZi8SqDEBVqfbYjDJT9RWJBVIW0vq4',
    rating: 4.5,
  },

];
//컴포넌트로 데이터를 보내는 방법 : props
//단, 문자열을 제외한 경우는 모두 중괄호로 값을 감싸야 한다
function App() {
  return (
  <div>
      {foodLike.map(dish=>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
  </div>
  );
}
//자료형은 string, number이여야 함
//isRequired는 있으면 필수로 있어야하는 요소 없으면 없어도 되는 요소
Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
export default App;
