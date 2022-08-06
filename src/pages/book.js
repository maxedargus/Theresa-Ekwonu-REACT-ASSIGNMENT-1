import React from 'react';
import NavBar from "../components/nav";

const mystyle= {
    color:"blue",
    backgroundColor:"red",
    height:"100%",
    flex:1
}

function Book() {
    return(
        <div style={mystyle}>
            <NavBar/>

            <center><h1 style={{color:'green',fontSize:60}}>Books</h1></center>
        </div>
    )
}



export default Book;