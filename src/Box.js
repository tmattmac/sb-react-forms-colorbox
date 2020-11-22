import React, { useState } from 'react';
import './Box.css';

function Box({ width, height, backgroundColor, remove }) {
    const style = {
        width: width + 'px',
        height: height + 'px',
        backgroundColor
    };
    return (
        <div>
            <div style={style} className="Box">
                <button onClick={remove}>X</button>
            </div>
        </div>
    );
}

export default Box;
