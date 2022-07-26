import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCitiesFetchAC } from '../../redux/actionCreators/citiesAC'
import { setCurrentPageAC } from '../../redux/actionCreators/currentPageAC'
import { v4 as uuidv4 } from 'uuid'
import Table from '../Table/Table'
import './App.css'
import SearchIcon from '@mui/icons-material/Search'
import { errorInitAC } from '../../redux/actionCreators/errorAC'

function App() {
  const pages = [1, 2, 3, 4, 5]
  const menu = [
    {
      name: 'Дата (основания)',
    },
    {
      name: 'Название', filters: [
        { name: 'на русском', filters2: ['составное', 'простое', 'ввести название'] },
        { name: 'на английском', filters2: ['составное Eng', 'простое Eng', 'ввести название'] },
        { name: 'все', filters2: ['по алфавиту', 'в обратном', 'ввести название'] }
      ]
    },
    {
      name: 'Количество', filters: [
        { name: 'жителей', filters2: ['миллионник', 'меньше млна', 'ввести кол-во'] },
        { name: 'м2 площадь', filters2: ['больше 1000км2', 'меньше 1000км2', 'ввести площадь'] },
        { name: 'солнечных дней в году', filters2: ['больше 200', 'меньше 200', 'ввести кол-во'] }
      ]
    },
    {
      name: 'Расстояние', filters: [
        { name: 'от Москвы', filters2: ['> 1000км', '< 1000км', 'ввести расстояние'] },
        { name: 'от Экватора', filters2: ['далеко', 'близко', 'ввести расстояние'] },
        { name: 'с севера на юг', filters2: ['> 20км', '< 20км', 'ввести расстояние'] }
      ]
    }
  ];
  const [form, setForm] = useState(false)
  const [name, setName] = useState('')
  const [filter1, setFilter1] = useState('')
  const [message, setMessage] = useState(false)
  const [searchFilter, setSearchFilter] = useState('')

  const dispatch = useDispatch()

  const cities = useSelector((state) => state.citiesReducer.cities)
  const currentPage = useSelector((state) => state.currentPageReducer.currentPage)
  const error = useSelector((state) => state.errorReducer.error)

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

  function handleClick(event) {
    event.preventDefault()
    const filter1 = event.target.innerText
    if (filter1.includes('\n')) {
      setFilter1(filter1.split('\n')[0])
    } else {
      setFilter1(filter1)
    }
    dispatch(setCurrentPageAC(1))
  }

  return (
    <div className="App">
      <ul className="menu">
        {menu.map((el) => {
          let resultEl
          if (!el.filters) {
            resultEl = (<li key={uuidv4()}>{el.name}</li>)
          } else {
            resultEl = (<li key={uuidv4()}>{el.name}
              <ul>
                {el.filters.map((el2) => (<li key={uuidv4()} onClick={handleClick}>{el2.name}
                  <ul>
                    {el2.filters2.map((el2, index) => {
                      let result
                      if (index === 2) {
                        result = <li
                          key={uuidv4()}
                          onMouseMove={handleMouseOver}
                          className="form-parent"
                        >{el2}</li>
                      } else {
                        result = <li key={uuidv4()} onClick={handleClick}>{el2}</li>
                      }
                      return result
                    }
                    )}
                  </ul>
                </li>))}
              </ul>
            </li>
            )
          }
          return resultEl
        })
        }
      </ul>
      {error && (<div className="error-field"><p>Ой! Произошла ошибка</p><p>{error}</p></div>)}
      {form && <form type="submit" onSubmit={handleSubmit}>
        <input type="text" value={name} name="form_name" className="black" onChange={handleChange} />
        <button><SearchIcon sx={{ height: '20px' }}></SearchIcon></button>
      </form>}
      {message && <div className="validation">Введите параметр для поиска</div>}
      <Table cities={cities} />
      {pages?.map((el) => <span key={uuidv4()}
        className={currentPage === el ? "current-page" : "page"}
        onClick={() => {
          dispatch(setCurrentPageAC(el))
        }}
      >{el}</span>)}
      {error && <div className="hidden">{setTimeout(() => { dispatch(errorInitAC('')) }, 2500)}</div>}
    </div>
  );
}

export default App;
