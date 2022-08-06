import React from 'react';

function MapItem(props) {
    return <p>{props.item}</p>
}

function Maps() {
    const c=[
        {
            key:1,
            name:'Prince'
        },
        {
            key:2,
            name:'John'
        },{
            key:3,
            name:'James'
        },
    ];
    return(
        <div>
            <h3>Maping</h3>
            {c.map((i)=>(<div key={i.key}>
                <h1>{i.name} : {i.key}</h1>
            </div>))}
        </div>
    )
}
export default Maps;