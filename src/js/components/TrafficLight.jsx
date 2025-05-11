import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


const TrafficLight = ({ color, children }) => {

    return (
        <>  
            <div className='traffic-light container d-flex flex-column space-evenly'>
                {children}
            </div>
        </>
    )
}

export default TrafficLight;