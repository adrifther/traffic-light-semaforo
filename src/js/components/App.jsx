import React, { useEffect, useState } from 'react';
import TrafficLight from './TrafficLight';

const App = () => {
  const [activeColor, setActiveColor] = useState('red');

  useEffect(() => {
    const steps = ['red', 'green', 'yellow'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % steps.length;
      setActiveColor(steps[index]);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <TrafficLight
      redActive={activeColor === 'red'}
      yellowActive={activeColor === 'yellow'}
      greenActive={activeColor === 'green'}
    />
  );
};

export default App;
