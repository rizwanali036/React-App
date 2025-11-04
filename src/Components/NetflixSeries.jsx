
import sresiesData from "../api/seriesData.json";
import { SeriesCard } from "./seriesCard";
export const NetflixSeries = () => {
  // const name = "Queen of Tears";
  // const rating = "8.2";
  // const summary = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam commodi sit voluptates, magnam, numquam eius delectus minus illo architecto cupiditate ullam ad veritatis quisquam nemo facere possimus expedita dolorem dolores?";
  // let age = 19;
  // let canWatch = "Not Available";
  // if (age >= 18 ) canWatch = "Watch Now";

  // const canWatch = () =>{
  //   if (age  >= 18 ) return "Watch Now ";
  //   return "Not Available";
  // };


  // const returnGenre = () =>{
  //   const genre = "RomCom";
  //   return genre;
  // }
  // 1- It's good but it violate DRY.
  // if (age < 18 ){
  //   return(
  //   <div>
  //     <div>
  //       <img src="girl.png" alt="girl.png" width="20%" height="20%" />
  //     </div>
  //     <h2>Name: {name} </h2>
  //     <h3>Rating: {4 + 3.2}</h3>
  //     <p>Summary: {summary}</p>
  //     <p>Genre: {returnGenre()}</p>
  //     <button>Not Available</button>
  //   </div>
  // );
  // }
  return (
    <ul>
      { sresiesData.map((curElem) =>(
          <SeriesCard key={curElem.id} data = {curElem} />
        ))}
    </ul>
  );
};

export default NetflixSeries;