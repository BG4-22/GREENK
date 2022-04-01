import * as React from 'react';
import { useEffect, useState } from 'react';
import sunshine from '../img/sunshine.png';
import solarPanel from '../img/Solar.png';

export default function SolarPanel() {
    useEffect(() => {});

    return (
        <div>
            <img id="sunshine" src={sunshine}></img>
            <img id="solar" src={solarPanel}></img>
        </div>
    );
}
