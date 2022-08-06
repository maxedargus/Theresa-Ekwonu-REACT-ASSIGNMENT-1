import React, { useState } from 'react';

function Forms() {
    const [name, setname]= useState('');
    const [age, editage]= useState(0)

    function submit(e) {
        e.preventDefault()
        alert(name)
        alert(age)
    }

    return(
        <form onSubmit={submit}>
            <label for="name">Name:</label>
            <br/>
            <input type="text" name="name" onChange={(e)=>setname(e.target.value)} />
            <br />
            <br/>
            <label for="age">Age:</label>
            <br/>
            <input type="number" name="age" placeholder='age' onChange={(e)=>editage(e.target.value)} />

            <br/>
            <input type="submit" value="Submit" />

        </form>
    )
}

export default Forms;