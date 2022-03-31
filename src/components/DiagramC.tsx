import { useEffect, useState } from 'react';
import money from '../img/canvas_1000.png';

export default function DiagramC() {
    const [value, setArray] = useState(0);

    useEffect(() => {});

    var arr = [
        <ul>
            <li>
                <img src={money} width="100" height="50"></img>
            </li>
            <li>
                <img src={money} width="100" height="50"></img>
            </li>
            <li>
                <img src={money} width="100" height="50"></img>
            </li>
            <li>
                <img src={money} width="100" height="50"></img>
            </li>
            <img src={money} width="100" height="50"></img>
        </ul>,
    ];

    /*$('#imageDiv').append('<ul></ul>');
    for (var i in arr) {
        $('#imageList').append(i);
    }*/

    return (
        <div id="imageDiv">
            <p>{arr}</p>
        </div>
    );
}
