import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import '../styles/trafficLight.css';

// components
import Home from './components/Home';
import TrafficLight from './components/TrafficLight';
import RedLight from './components/RedLight';
import YellowLight from './components/YellowLight';
import GreenLight from './components/GreenLight';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <TrafficLight>
       <RedLight/>
       <YellowLight/>
       <GreenLight/>
    </TrafficLight>
  </React.StrictMode>,
)
