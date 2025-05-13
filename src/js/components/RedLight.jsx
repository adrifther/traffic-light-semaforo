import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../../styles/redLight.css';

const RedLight = ({ active }) => {

    const redLightClass = active ? 'redLightOn' : 'redLightOff';

    return (
        <div className={redLightClass}></div>
    )
}

export default RedLight;