import React from 'react';

function Display(props){
    return(
        <div>
            <p>Balls:{props.balls}</p>
            <p>Strikes:{props.strikes}</p>
            <p>Hits:{props.hits}</p>
            <p>Fouls:{props.fouls}</p>
        </div>
    )
}

export default Display;