import React from 'react';

const headerImage = require('../../assets/dolphin.jpg');

/**
 * The header for the home page
 */
export const IndexHeader = () => {
    return(
        <div>
            <h1>Fishbowl Scorekeeper</h1>
            <img src={headerImage} alt="Picture of Dolphin" width="250"/>
        </div>
    );
}