import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCitiesFetchAC } from '../../redux/actionCreators/citiesAC'
import { setCurrentPageAC } from '../../redux/actionCreators/currentPageAC'
import { v4 as uuidv4 } from 'uuid'
import Table from '../Table/Table'
import { errorInitAC } from '../../redux/actionCreators/errorAC'
import Menu from '../Menu/Menu'
import FormComponent from '../FormComponent/FormComponent'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import Pagination from '../Pagination/Pagination'
import './App.css'

function App() {
  const pages = [1, 2, 3, 4, 5]
  const [form, setForm] = useState(false)
  const [name, setName] = useState('')
  const [filter1, setFilter1] = useState('')
  const [message, setMessage] = useState(false)
  const [searchFilter, setSearchFilter] = useState('')

  const dispatch = useDispatch()

  const cities = useSelector((state) => state.citiesReducer.cities)
  const error = useSelector((state) => state.errorReducer.error)
  const currentPage = useSelector((state) => state.currentPageReducer.currentPage)

  useEffect(() => {
    dispatch(setCurrentPageAC(1))
  }, [dispatch])

  useEffect(() => {
    dispatch(getCitiesFetchAC({ currentPage, filter1 }))
  }, [filter1, currentPage, dispatch])

  useEffect(() => {
    // if (form) { - если добавить условие, реакт просит поместить form в массив зависимостей, но это не работает
    setForm(false)
    setMessage(false)
    // }
  }, [cities])

  function handleChange({ target: { value } }) {
    setName(value)
  }

  function handleMouseOver(event) {
    setSearchFilter(event.target.parentNode.parentElement.innerHTML.split('<')[0])
    setForm(true)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const filter1 = [searchFilter, name]
    if (name) {
      setFilter1(filter1)
      dispatch(setCurrentPageAC(1))
      setName('')
    } else {
      setMessage(true)
    }
  }

  return (
    <div className="App">
      <Menu handleMouseOver={handleMouseOver} setFilter={setFilter1}/>
      {error && <ErrorComponent error={error} />}
      {form && <FormComponent handleSubmit={handleSubmit} handleChange={handleChange} value={name} />}
      {message && <div className="validation">Введите параметр для поиска</div>}
      <Table cities={cities} />
      {pages?.map((page) => <Pagination key={uuidv4()} page={page} />)}
      {error && <div className="hidden">{setTimeout(() => { dispatch(errorInitAC('')) }, 2500)}</div>}
    </div>
  );
}

export default App;
