import { getSuggestedQuery } from '@testing-library/dom'
import React, { useState } from 'react'

function Pizza() {
    // const [pizza, setPizza] = useState({
    //     cheese: false,
    //     pepperonies: false,
    //     sausage: false,
    //     pineapple: false,
    //     onions: false,
    //     greenPepper: false,
    //     corn: false,
    //     extra: ''
    // })

    const [extrasText, setExtrasText] = useState({
        extras: '',
    })

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckedBoxes = (evt) => {
        console.log(evt.target.id)
    }

    const handleTextInput = (evt) => {
        setExtrasText({...extrasText, extras: evt.target.value})
    }

    return (
        <div>
            <h2>Build Your Own Pizza!</h2>
            <div className='pizza-size'>
                <h3>Choose your size</h3>
                <input type='checkbox' id='small' name='size' value='small' /> Small
                <input type='checkbox' id='medium' name='size' value='medium' /> Medium
                <input type='checkbox' id='large' name='size' value='Large' /> Large
            </div>
            <div className='pizza-sauce'>
                <h3>Choose your sauce</h3>
                <input type='checkbox' checked={null} onChange={handleCheckedBoxes} id='sauce-marinara' name='sauce' value='marinara' /> Marinara
                <input type='checkbox' checked={null} onChange={handleCheckedBoxes} id='sauce-ranch' name='sauce' value='Ranch' /> Ranch
                <input type='checkbox' checked={null} onChange={handleCheckedBoxes} id='sauce-BBQ' name='sauce' value='BBQ' /> BBQ
            </div>
            <div className='pizza-toppings'>
            <h3>Choose your toppings</h3>
            <input type='checkbox' id='toping1' name='topping' value='cheese' /> Cheese
            <input type='checkbox' id='toping2' name='topping' value='pepperonie' /> Pepperonie
            <input type='checkbox' id='toping3' name='topping' value='sausage' /> Sausage
            <input type='checkbox' id='toping4' name='topping' value='onion' /> Onion
            <input type='checkbox' id='toping5' name='topping' value='pineapple' /> PineApple
            <input type='checkbox' id='toping6' name='topping' value='greenPepper' /> Green-Pepper
            <input type='checkbox' id='toping7' name='topping' value='corn' /> Corn
            <input type='text' onChange={handleTextInput} id='extra' name='topping' value={extrasText.extras} placeholder='Add a special Request!'/> 
            </div>
            <div>
                <h3>Submit Order!</h3>
                <button>Submit</button>
            </div>
        </div>
        
    )
}

export default Pizza
