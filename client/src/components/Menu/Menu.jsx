import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { setCurrentPageAC } from '../../redux/actionCreators/currentPageAC'
import LiComponent from '../LiComponent/LiComponent'
import UlComponent from '../UlComponent/UlComponent'
import './Menu.css'


function Menu({ handleMouseOver, setFilter }) {
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
  ]

  const dispatch = useDispatch()
  const formClassName = "form-parent"

  function handleClick(event) {
    event.preventDefault()
    const filter1 = event.target.innerText
    if (filter1.includes('\n')) {
      setFilter(filter1.split('\n')[0])
    } else {
      setFilter(filter1)
    }
    dispatch(setCurrentPageAC(1))
  }

  return (
    <ul className="menu">
      {menu.map((el) => {
        let resultEl
        if (!el.filters) {
          resultEl = (<LiComponent key={uuidv4()} id={0} el={el} />) //zabila zakommentitj predidyshij variant bex componenta
        } else {
          resultEl = (<li key={uuidv4()}>{el.name}
            <ul>
              {el.filters.map((el2) => (<li key={uuidv4()} onClick={handleClick}>{el2.name}
               <UlComponent el={el2} handleMouseOver={handleMouseOver} handleClick={handleClick} formClassName={formClassName}/>
              </li>))}
            </ul>
          </li>
          )
        }
        return resultEl
      })
      }
    </ul>
  );
}

export default Menu;
