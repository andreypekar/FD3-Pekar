import React from 'react';

import './withRainbowFrame.css';

/* // функциональный стиль
function withRainbowFrame(colors) {
  return function(Component) {
    return props => {
      let myJSX = null;
      
      colors.forEach( elem => {
        if (myJSX == null) myJSX = <div style={{border:"solid 5px "+elem, padding:"10px"}}>
                                    <Component {...props} />
                                  </div>;
        else myJSX = <div style={{border:"solid 5px "+elem, padding:"10px"}}>{myJSX}</div>;
      });

      return myJSX;
    }
  }
}
*/

// стрелочная функция
let withRainbowFrame = colors => Component => props => {
  let myJSX = null;
      
  colors.forEach( (elem, i) => {
    if (myJSX == null) myJSX = <div key={i} style={{border:"solid 5px "+elem, padding:"10px"}}>
                                <Component {...props} />
                              </div>;
    else myJSX = <div key={i} style={{border:"solid 5px "+elem, padding:"10px"}}>{myJSX}</div>;
  });

  return myJSX;
};


export { withRainbowFrame };