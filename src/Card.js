import React from 'react';
import 'tachyons';
const Card =(props)=>{
    return (
        <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="Robots"/>
            <div>
                <h2>{props.first_name}</h2>
                <p>{props.last_name}</p>
            </div>
        </div>
    )
}
export default Card;