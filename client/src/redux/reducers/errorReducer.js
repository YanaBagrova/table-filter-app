import { errorAT } from '../actionTypes/errorAT';

const errorInitialState = {
  error: '',
}

export const errorReducer = (state = errorInitialState, action) => {

  switch (action.type) {
    case errorAT.INIT_ERROR:
      let error
      if (action.payload.status === 200) {
        error = 'Ошибка произошла на сервере'
      } else if (action.payload.status === 503) {
        error = 'Сервис временно недоступен. Попробуйте позже'
      } else if (action.payload.status >= 500 ) {
        error = 'Ошибка сервера'
      } else if (action.payload.status >= 400 && action.payload.status < 500) {
        error = 'Ошибка соединения с сервером'
      } else if (action.payload === '') {
        error = action.payload
      } else {
        error = 'Скоро мы её исправим'
      }

      return {
        ...state, error: error
      }
    
    default:
      return state
  }
}
