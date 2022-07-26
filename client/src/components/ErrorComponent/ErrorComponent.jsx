import React from 'react';
import { useSelector } from 'react-redux'
import './ErrorComponent.css'


function ErrorComponent(props) {
  const error = useSelector((state) => state.errorReducer.error)

  return (
      <div className="error-field"><p>Ой! Произошла ошибка</p><p>{error}</p></div>
  );
}

export default ErrorComponent;
