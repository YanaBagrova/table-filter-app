import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCitiesFetchAC } from '../../redux/actionCreators/citiesAC'
import { setCurrentPageAC } from '../../redux/actionCreators/currentPageAC'
import { v4 as uuidv4 } from 'uuid'
import Table from '../Table/Table'
import { errorInitAC } from '../../redux/actionCreators/errorAC'
import { setFormAC } from '../../redux/actionCreators/formAC'
import { setMessageAC } from '../../redux/actionCreators/messageAC'
import Menu from '../Menu/Menu'
import FormComponent from '../FormComponent/FormComponent'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import Pagination from '../Pagination/Pagination'
import './App.css'

function App() {
  const pages = [1, 2, 3, 4, 5]

  const dispatch = useDispatch()

  const cities = useSelector((state) => state.citiesReducer.cities)
  const error = useSelector((state) => state.errorReducer.error)
  const currentPage = useSelector((state) => state.currentPageReducer.currentPage)
  const filter1 = useSelector((state) => state.filterReducer.filter)
  const form = useSelector((state) => state.formReducer.form)
  const message = useSelector((state) => state.messageReducer.message)

  useEffect(() => {
    dispatch(setCurrentPageAC(1))
  }, [dispatch])

  useEffect(() => {
    dispatch(getCitiesFetchAC({ currentPage, filter1 }))
  }, [filter1, currentPage, dispatch])

  useEffect(() => {
    dispatch(setFormAC(false))
    dispatch(setMessageAC(false))
  }, [cities, dispatch])

  return (
    <div className="App">
      <Menu />
      {error && <ErrorComponent />}
      {form && <FormComponent />}
      {message && <div className="validation">Введите параметр для поиска</div>}
      <Table cities={cities} />
      {pages?.map((page) => <Pagination key={uuidv4()} page={page} />)}
      {error && <div className="hidden">{setTimeout(() => { dispatch(errorInitAC('')) }, 2500)}</div>}
    </div>
  );
}

export default App;
