import React from 'react';
import 'tachyons';
const Card =(props)=>{
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src="https://robohash.org/1?200x200" alt="Robots"/>
            <div>
                <h2>Jane Doe</h2>
                <p>janedoe@gmail.com</p>
            </div>
        </div>
    )
}
export default Card;