import * as React from 'react';
import { useEffect, useState } from 'react';
import sunshine from '../img/sunshine.png';

export default function SolarPanel() {
    useEffect(() => {});

    return (
        <div style={{ background: 'red', height: 'fit-content' }}>
            <img id="sunshine" src={sunshine}></img>
        </div>
    );
}
