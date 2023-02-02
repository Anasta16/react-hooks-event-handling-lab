import React from 'react'

function handleChange(event) {
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
           <form>
                <label>
                    <input type="password" name="password" onChange={handleChange}/>
                </label>
           </form>
        </div>
    )
}

export default Keypad;


