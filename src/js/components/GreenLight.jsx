import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../../styles/greenLight.css';
import '../../styles/index.css';

const GreenLight = ({active}) => {

        const [isSwitchedOn, setIsSwitchedOn] = useState(false);
         
        useEffect(() => {
            let timeout;

            if (active) {
                setIsSwitchedOn(true);
                timeout = setTimeout (() => setIsSwitchedOn(false), 4000); 
            } else {
                setIsSwitchedOn(false);
            }
        return () => clearTimeout(timeout);

        }, [active]);
    
        const greenLightClass = isSwitchedOn ? 'greenLightOn' : 'greenLightOff';
    
        return (
            <div className={greenLightClass}></div>
        )
    
}

GreenLight.propTypes = {
    active: PropTypes.bool.isRequired,
}

export default GreenLight;