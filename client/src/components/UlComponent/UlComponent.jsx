import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import LiComponent from '../LiComponent/LiComponent';

function UlComponent({ el, handleClick }) {
  return (
    <ul>
      {el.filters2.map((el, index) => {
        let result
        if (index === 2) {
          result = (<LiComponent key={uuidv4()} id={4321} el={el} />)
        } else {
          result = (<LiComponent key={uuidv4()} id={4321} handleClick={handleClick} el={el} />)
        }
        return result
      }
      )}
    </ul>
  );
}

export default UlComponent;
