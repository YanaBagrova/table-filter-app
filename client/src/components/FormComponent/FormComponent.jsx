import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search'
import { setCurrentPageAC } from '../../redux/actionCreators/currentPageAC'
import { setFilterAC } from '../../redux/actionCreators/filterAC';
import { setMessageAC } from '../../redux/actionCreators/messageAC';
import './FormComponent.css'

function FormComponent() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const searchFilter = useSelector((state) => state.searchFilterReducer.searchFilter)

  function handleSubmit(event) {
    event.preventDefault()
    const filter1 = [searchFilter, name]
    if (name) {
      dispatch(setFilterAC(filter1))
      dispatch(setCurrentPageAC(1))
      setName('')
    } else {
      dispatch(setMessageAC(true))
    }
  }

  function handleChange({ target: { value } }) {
    setName(value)
  }

  return (
    <form type="submit" onSubmit={handleSubmit}>
      <input type="text" value={name} name="form_name" className="black" onChange={handleChange} />
      <button><SearchIcon sx={{ height: '20px' }}></SearchIcon></button>
    </form>
  );
}

export default FormComponent;
