import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../../styles/redLight.css';

const RedLight = () => {
    const [isSwitchedOn, setIsSwitchedOn] = useState(false);

    // useEffect(() => { , }

    return (
        <div className='redLight'></div>
    )
}

export default RedLight;