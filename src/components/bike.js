// function Bike (props){
//     const startBike = () =>{
//         alert("Starting Bike now..... ")
        
//     }
//     const offBIke = (a) => {
//             alert(a)
//     }
//     return(
//         <div className="Bike">
//             <h6>Using Bike Component</h6>
//             <hr />
//             <h2>this Bike is {props.name} Branded</h2>
//             <hr />
//             <h3>the model is this kind of bike is {props.model}</h3>
//             <button onClick={startBike}> Start the Bike!</button>
//             <button onClick={()=>offBIke("Offing Bike Now......")}> Off the Bike</button>

//         </div>
//     )
// }

function Boy(props) {
    const a= props.name
    return (
        <div>
            <h1>boy : {props.name}</h1>
            <h3>age : {props.age}</h3>
        </div>
    )
}

// const h= {
//     Bike,Boy
// }
export default Boy;
