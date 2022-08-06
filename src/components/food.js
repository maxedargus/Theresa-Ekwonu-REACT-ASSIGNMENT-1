import React from 'react';

function Food(props) {
    const food = props.food;
    if (food==="rice") {
        return(
            <h3>white rice</h3>
        )
    }else{
        return(<h3>I no send</h3>)
    }
}

export default Food;