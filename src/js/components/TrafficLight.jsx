import React from 'react';
import RedLight from './RedLight';
import YellowLight from './YellowLight';
import GreenLight from './GreenLight';

const TrafficLight = ({ redActive, yellowActive, greenActive }) => {
    
    return (
        <>  
            <div className='traffic-light container d-flex flex-column space-evenly'>
                <RedLight active={redActive} />
                <YellowLight active={yellowActive} />
                <GreenLight active={greenActive} />
            </div>
        </>
    )
}

export default TrafficLight;