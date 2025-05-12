import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../../styles/redLight.css';

const RedLight = ({ active }) => {

    const [isSwitchedOn, setIsSwitchedOn] = useState(false);

    useEffect (() => {
        let timeout;

            if (active) {
                setIsSwitchedOn(true);
                timeout = setTimeout(() => {
                    setIsSwitchedOn(false);
                }, 4000);
            }
            else {
                setIsSwitchedOn(false);
            }
            return () => clearTimeout(timeout);
        }
        , [active]);
    
    
        const redLightClass = isSwitchedOn ? 'redLightOn' : 'redLightOff';
    
        return (
            <div className={redLightClass}></div>
        )
}

RedLight.propTypes = {
    active: PropTypes.bool.isRequired,
}

export default RedLight;