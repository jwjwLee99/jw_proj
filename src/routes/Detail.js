import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props; //구조분해 할당으로 location, history를 얻고
    if (location.state === undefined) { //없으면
      history.push("/"); //back
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      // return <span>{location.state.title}</span>;
      return (
                <div className="detail__container">
                  {/* <img src={location.state.poster} alt={location.state.title} title={location.state.title} /> */}
                  <div className="detail__data">
                    <h3 className="movie__title">{location.state.title}</h3>
                    <h5 className="movie__year">{location.state.year}</h5>
                    <p className="movie__summary">{location.state.summary}</p>
                  </div>
                  
                  </div>
             );
      
    } else {
      return null;
    }
  }
}
export default Detail;

//실행 순서 render() - > componentDidMount

// function Detail(location){
//     console.log(location);
//     return <span>hello</span>;
// }