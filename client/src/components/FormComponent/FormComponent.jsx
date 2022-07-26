import React from 'react';
import SearchIcon from '@mui/icons-material/Search'
import './FormComponent.css'

function FormComponent({handleSubmit, handleChange, name}) {
  return (
      <form type="submit" onSubmit={handleSubmit}>
        <input type="text" value={name} name="form_name" className="black" onChange={handleChange} />
        <button><SearchIcon sx={{ height: '20px' }}></SearchIcon></button>
      </form>
  );
}

export default FormComponent;
