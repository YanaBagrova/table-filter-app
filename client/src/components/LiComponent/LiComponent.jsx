import React from 'react';
import './LiComponent.css'

function LiComponent({handleFunction, id, el, formClassName}) {
  let str = handleFunction?.toString().split(' ')[1]
  console.log(str)
  
  return (
    <>
    {(str?.slice(0, str?.length - 7) === 'handleClick') ?
    (<li className={formClassName} ocClick={handleFunction}>{id === 4321 ? el : el.name}</li>) :
    (<li className={formClassName} onMouseOver={handleFunction}>{id === 4321 ? el : el.name}</li>)}
    </>
  );
}

export default LiComponent;
