import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../../styles/yellowLight.css';

const YellowLight = () => {
    const [isSwitchedOn, setIsSwitchedOn] = useState(false);

    // useEffect(() => { , }

    return (
        <div className='yellowLight'></div>
    )
}

export default YellowLight;