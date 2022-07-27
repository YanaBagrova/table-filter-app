import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import LiComponent from '../LiComponent/LiComponent';

function UlComponent({el, handleMouseOver, handleClick, formClassName}) {
  return (
    <ul>
    {el.filters2.map((el, index) => {
      let result
      if (index === 2) {
        // result = <li
        //   key={uuidv4()}
        //   onMouseMove={handleMouseOver}
        //   className="form-parent"
        // >{el2}</li>
         result = (<LiComponent key={uuidv4()} id={4321} handleFunction={handleMouseOver} el={el} formClassName={formClassName} />) //dobavitj klass v css UIComponenet.css
      } else {
        // result = <li key={uuidv4()} onClick={handleClick}>{el2}</li>
        result = (<LiComponent key={uuidv4()} id={4321} handleFunction={handleClick} el={el}/>)
      }
      return result
    }
    )}
  </ul>
  );
}

export default UlComponent;
