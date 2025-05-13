import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../../styles/greenLight.css';
import '../../styles/index.css';

const GreenLight = ({active}) => {

    const greenLightClass = active ? 'greenLightOn' : 'greenLightOff';

    return (
        <div className={greenLightClass}></div>
    )
    
}

export default GreenLight;