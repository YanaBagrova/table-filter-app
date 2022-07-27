import React from 'react';
import { useDispatch } from 'react-redux'
import { setSearchFilterAC } from '../../redux/actionCreators/searchFilterAC';
import { setFormAC } from '../../redux/actionCreators/formAC';
import './LiComponent.css'

function LiComponent({ handleClick, id, el }) {

  const dispatch = useDispatch()

  function handleMouseOver(event) {
    dispatch(setSearchFilterAC(event.target.parentNode.parentElement.innerHTML.split('<')[0]))
    dispatch(setFormAC(true))
  }

  return (
    <>
      {id === 9876 && <li>{el.name}</li>}
      {(handleClick && id !== 9876) && (<li className="form-parent" onClick={handleClick}>{el}</li>)}
      {(!handleClick && id !== 9876) && (<li className="form-parent" onMouseOver={handleMouseOver}>{id === 4321 ? el : el.name}</li>)}
    </>
  );
}

export default LiComponent;
