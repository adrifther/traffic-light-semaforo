import React from 'react';
import RedLight from './RedLight';
import YellowLight from './YellowLight';
import GreenLight from './GreenLight';
import { useState, useEffect } from 'react';

const TrafficLight = ({ redActive, yellowActive, greenActive }) => {

    const[index, setIndex] = useState(0);

    const steps = [
        { red: true, yellow: false, green: false, duration: 3000 },
        { red: false, yellow: false, green: true, duration: 3000 },
        { red: false, yellow: true, green: false, duration: 2000 },
      ];
    
    useEffect(() => {
        const interval = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % steps.length);
        }, steps[index].duration); // Cada color tiene su propio tiempo
      
        return () => clearTimeout(interval);
      }, [index]);
      
    
    const current = steps[index];  
    return (
        <>  
            <div className='traffic-light container d-flex flex-column space-evenly'>
                <RedLight active={current.red} />
                <YellowLight active={current.yellow} />
                <GreenLight active={current.green} />
            </div>
        </>
    )
}

export default TrafficLight;