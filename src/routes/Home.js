import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
    state = {
      isLoading: true,
      movies: []
    };
    getMovies = async () => {
      const {
        data: {
          data: { movies }
        }
      } = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );
      this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
      this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
          <section className="container">
            {isLoading ? (
              <div className="loader">
                <span className="loader__text">Loading...</span>
              </div>
            ) : (
              <div className="movies">
                {movies.map(movie => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                ))}
              </div>
            )}
          </section>
        );
      }
    }
    
    export default Home;

  //await: axios가 끝날 때 까지 기다렸다가 계속

  // setTimeout( () => {
  //   this.setState({ isLoading: false});
  // }, 6000);
  // fetch위에 있는 작은 layer
  //데이터를 잡기 위해

  //this will happen after 6 seconds
  //이론적으로 componentDidMount에서 data를 fetch 함
  //axios.get는 시간이 오래 걸릴 수 있으므로 javasscript에게 componentDidMount함수가 끝날 때 까지
  //약간 시간이 걸릴 수 있다고 말해야 함.

  
// const foodILike = [
//   {
//     id:1,
//     name: "Kimchi",
//     image:
//       "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
//     rating: 3
//   },
//   {
//     id:2,
//     name: "bulgogi",
//       image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/%ED%8C%8C%EB%B6%88%EA%B3%A0%EA%B8%B0.JPG/1024px-%ED%8C%8C%EB%B6%88%EA%B3%A0%EA%B8%B0.JPG",
//     rating: 4
//     },
//   {
//     id:3,
//     name: "kimbap",
//     image:
//       "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
//     rating: 4.9
//     },
//   {
//     id:4,
//     name: "samgyetang",
//     image:
//       "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
//     rating: 4.8
//     },
// ];

// function renderFood(dish){
//   console.log(dish);
//   return <Food name = {dish.name} picture={dish.image} />
// }

// function Food({ name, picture, rating }) {
//   //console.log(props.fav);
//   return (
//     <div>
//       <h2>I like {name} </h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number,
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("hello");
//   }
//   state = {
//     count: 0,
//   };

//   add = () => {
//     //console.log("add");
//     this.setState(current => ({count: current.count + 1}));
//   };

//   minus = () => {
//     // console.log("minus");
//     this.setState(current => ({count: current.count - 1}));
//   };

//   componentDidMount(){
//     console.log("component rendered");
//   }

//   componentDidUpdate() {
//     console.log("I just updated");
//   }

//   // componentWillMount(){
//   //   console.log("Goodbye, cruel world")''
//   // }

//   render() {
//     console.log("Im rendering");
//     return (
//       <div>
//         <h1> The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>minus</button>
//       </div>
//     );
//   }
// }
//react는 자동적으로 너의 class component의 render method를 실행해! 자동으로!
//class component는 우리가 원하는 state라는 녀석을 가지고 있음 \
//state는 object이고 component의 data를 넣을 공간이 있고, 이 데이터는 변함
//this.add() -> 즉시, this.add -> 클릭 할 때만
//setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않을 거야
//매 순간 너가 setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출할 꺼야

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish =>(
//         <Food key = {dish.id} name = {dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//       {/* map은 여기서 뭐가 돌아오든 array로 돌려줌 */}
//       {/* <h1>Hello!</h1> */}
//       {/* {foodILike.map(dish => <Food name = {dish.name} picture = {dish.image}/>)} */}
//       {/* <Food fav="kimchi" />
//       <Food fav="ramen" />
//       <Food fav="meat" /> */}
//       {/* html의  <div class= "hello"> </div> 와 유사*/}
//       {/* food component에 fav라는 이름의 property를 kimchu라는 value로 줌  */}
//     </div>
//   );
// }
//react는 당신이 거기에 쓰는 모든 요소를 생성함!
//자바스크립트와 함께 그것들을 만들고
//그것들을 html로 만듬
//너의 모든 react application을 div 사이에 넣어! ok?
//react는 소스코드에 처음부터 html를 넣지않고, html에서 html을 추가하거나 제거하는 법을 알고 잇음
//그래서 application이 이것을 로드할 때, 빈 html을 로드하게 되고
//그런 다음에 내가 component에 작성해뒀던 것을 react가 html을 밀어넣게 됨!
//따라서 검사 해보면 div와 h1이 있지만 소스코드(index.html)에는 존재하지 않음
//이 것이 react가 빠른 이유, virtual이고 존재하지 않기 때문 (virtual DOM(Document Object Model))

//component는 HTML을 반환하는 함수

//state는 보통 우리가 동적데이터와 함께 작업할 때 만들어져, 변하는 데이터, 존재하지 않는 데이터,
//그리고 생겨나고 그러고선 사라지고 또는 변경된 데이터, 하나인 데이터 그리고 두개가 되고 또는 0이 되는 그런 종류의 것들
//이게 dynamic data 그리고 이런 props는 우리는 돕지않아 우리가 필요한 건 state

//function component는 function이고 뭔가를 return해 그리고 screen에 표시돼, class component는 class야
//하지만 react component로 부터 확장되고 screen에 표시돼

//map은 array의 각 item에서 function을 실행하는 array를 가지는 javascript function이며
//그 function의 result를 갖는 array를 나에게 줌
// const friends = ["dal", "mark", "lynn", "japan guy"];
// friends.map(function(current){
//   console.log(current);
//   return 0;
// })
//
//result:
// dal
// mark
// lynn
// japan guy
// [0, 0, 0, 0]

//start command -> npm start

//npm run build임 npm build가 아니라 

//deploy가 호출될때마다 그 전에 predeploy가 호출됨 
//업데이트를 할려면 npm i gh-pages -> npm run build -> npm run deploy를 해야한다