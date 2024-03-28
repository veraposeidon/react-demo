// Controls.js
import React from 'react';
import {ICard} from "@/app/interface/ICard";

interface ControlsProps {
    onCheck: () => void;
    onFold: () => void;
    onRaise: (value: number) => void;
    startHidden: boolean;
}

const Controls = ({ onCheck, onFold, onRaise }) => {
    return (
        <div className="ctlbuttons">
        <div id="startctldiv">
            <button id="startbtn">START</button>
        </div>

        <div id="betctldiv" className = ''>
            <div className="scalediv ">
                <div id="scalevalue">Value: 0</div>
                <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
            </div>
            <div>
                <button id="foldbtn" onClick={ onFold }>FOLD</button>
                <button id="callbtn" onClick={ onCheck }>CHECK</button>
                <button id="showscale">RAISE</button>
                <button id="raisebtn" className = 'hidden'>RAISE</button>
            </div>
        </div>

        <div id="resetctldiv" className = ''>
            <button id="continuebtn">CONTINUE</button>
            <button id="endbtn">END GAME</button>
        </div>
    </div>
    );
};

export default Controls;
