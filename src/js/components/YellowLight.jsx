import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../../styles/yellowLight.css';

const YellowLight = ({active}) => {
    
    const yellowLightClass = active ? 'yellowLightOn' : 'yellowLightOff';

    return (
        <div className={yellowLightClass}></div>
    )

}


export default YellowLight;