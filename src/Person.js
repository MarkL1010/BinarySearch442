import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import SelectInput from '@mui/material/Select/SelectInput';

function Person(props) {

    const choose = async () => {
        let onArray= props.onArray;
        let currentIndex = props.currentIndex;
        let targetIndex = props.targetIndex;
        let changeOn = props.changeOn;        
        let copyOnArray = [...onArray];

        let i = currentIndex;
        if (targetIndex < currentIndex) {
            while (i < copyOnArray.length) {
                copyOnArray[i] = false;
                i++;
            }
            changeOn(copyOnArray);
        }
        else if (targetIndex > currentIndex) {
            while (i >= 0) {
                copyOnArray[i] = false;
                i--;
            }
            changeOn(copyOnArray);
        }
        else {
            alert("YOU CHOSE THE RIGHT ONE!");
            changeOn([true, true, true, true, true, true, true, true, true, true]);
        }
    };
    var heightConversion = {"50": "3ft 6in", "55": "3ft 9in", "60": "4ft 0in", "65": "4ft 3in", "70": "4ft 6in", "75": "4ft 9in", "80": "yip that's me :^) i'm 5ft 0in", "85": "5ft 3in", "90": "5ft 6in", "95": "5ft 9in"}
    if (props.targetIndex === props.currentIndex) {
        return (<div style={{display: "inline", cursor: "pointer"}} onClick={choose}> {/* Inline so each Person doesn't go on new line */}
            <Tooltip arrow placement="top" title={props.on ? heightConversion[props.height] : undefined}>
                <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" alt="human" width={props.width} height={props.height} style={{border: "2px solid green"}}></img>
            </Tooltip>
        </div>);
    }
    else if (props.on) {
        return (<div style={{display: "inline", cursor: "pointer"}} onClick={choose}> {/* Inline so each Person doesn't go on new line */}
            <Tooltip arrow placement="top" title={props.on ? heightConversion[props.height] : undefined}>
                <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" alt="human" width={props.width} height={props.height}></img>
            </Tooltip>
        </div>);
    }
    else {
        return (<div style={{display: "inline", position: "relative"}}> {/* Inline so each Person doesn't go on new line */}
            <img src="https://cdn.pixabay.com/photo/2014/03/24/13/50/thinking-294525_1280.png" alt="human" width={props.width} height={props.height}></img>
            <text style={{position:"absolute", top: 0, right: 0, fontSize: "150%", color:"red"}}>X</text>
        </div>);
    }

}


export default Person;