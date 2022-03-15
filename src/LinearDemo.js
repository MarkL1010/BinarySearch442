import Person from './Person.js';
import { useState } from 'react';

function LinearDemo() {
    const heights = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95]; //Hard coded heights
    const HARDCODEDWIDTH = 30;
    const HARDCODEDTARGETINDEX = -1;
    const [on, changeOn] = useState([true, true, true, true, true, true, true, true, true, true]);
    const people = heights.map((height, index) => <Person 
      targetIndex={HARDCODEDTARGETINDEX}
      currentIndex={index}
      onArray={on}
      on={on[index]} 
      changeOn={undefined}
      width={HARDCODEDWIDTH} 
      height={height}
    />);
    return (<div>
        {people}
    </div>);
}

export default LinearDemo;