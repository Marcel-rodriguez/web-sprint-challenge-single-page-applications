import React from 'react';

function Pizza( {items} ) {
    if(!items){
        return <h3>Loading.... fetching your pizza&apos;s details....</h3>
    }
    return (
        <div>
            <h2>Name: {items.name}</h2>
            <p>Sauce: {items.sauce}</p>
            <p>Size: {items.size}</p>
            <p>Extras: {items.extras}</p>
            {
                !!items.toppings && !!items.toppings.length &&
                <div>
                    Toppings
                    <ul>
                        {items.toppings.map((id) => <li key={id.name}>name</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Pizza
