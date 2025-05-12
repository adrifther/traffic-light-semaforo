import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../../styles/yellowLight.css';

const YellowLight = ({active}) => {
    
    const [isSwitchedOn, setIsSwitchedOn] = useState(false);

    useEffect(() => {
        let timeout;

        if (active) {
            setIsSwitchedOn(true);
            timeout = setTimeout(() => {
                setIsSwitchedOn(false);
            } , 1000)
        } else {
            setIsSwitchedOn(false);
        }

        return () => clearTimeout(timeout);
    }, [active]);

    const yellowLightClass = isSwitchedOn ? 'yellowLightOn' : 'yellowLightOff';

    return (
        <div className={yellowLightClass}></div>
    )

}

YellowLight.propTypes = {
    active: PropTypes.bool.isRequired,
}

export default YellowLight;