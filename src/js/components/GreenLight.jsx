import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../../styles/greenLight.css';

const GreenLight = () => {
    const [isSwitchedOn, setIsSwitchedOn] = useState(false);

    // useEffect(() => { , }

    return (
        <div className='greenLight'></div>
    )
}

export default GreenLight;