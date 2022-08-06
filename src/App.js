// 

import React from "react";
// import Bike from "./components/bike"
import Boy from "./components/bike"
import Food from"./components/food"
import Maps from "./components/maping";
import Forms from "./components/forms";

// function Good(){
//   return(
//     <div className="Good">
//       <h1>This is Good</h1>
//     </div>
//   )
// }

function Bad() {
  return(
    <div>
      <h1>This is Bad</h1>
      <Boy name="slam" age={5} />
      <Boy name="sham" age={4} />
      <Food food="rice" />
      <Food food="riFUFce" />

    </div>
  );
}

// function Either(props) {
//   const isGood =props.isGood;
//   if (isGood) {
//     return <Good/>;
//   }
//   return <Bad/>;
// }


function App() {
  return (
    <div>
      <Maps />
      <center><h1>Forms</h1></center>
      <Forms />
    </div>
  )
}



// function Prince() {
//   return(
//     <div>
//       <h1>This is a car</h1>

// <Bike name="Suzuki" model="3000" />
// <hr/>
// <Either isGood={false}/>
//     </div>
//   )
  
// }
export default App