import { call, put, takeEvery } from 'redux-saga/effects'
import { citiesInitAC } from './actionCreators/citiesAC'
import { errorInitAC } from './actionCreators/errorAC'

const fetchCities = async ({ currentPage, filter1 }) => {
  try {
    const perPage = 19
    const response = await fetch(`/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        currentPage,
        perPage,
        filter1: filter1,
      })
    })
    if (response.status === 200) {
      const cities = await response.json()
      return cities 
    } else {
      return response
    }
  } catch (error) {
    console.log(error, error.status, typeof error)
    return error
  }
}

function* getCitiesFetch(action) {
  try {
    const cities = yield call(fetchCities, { currentPage: action.payload.currentPage, filter1: action.payload.filter1 })
    if (cities.status && cities.status !== 200 && typeof cities === 'object') {
      let error = cities
        yield put(errorInitAC(error))
    } else {
      yield put(citiesInitAC(cities))
    }
  } catch (error) {
    yield put(errorInitAC(error))
  }
}
export function* citiesSaga() {
  yield takeEvery('GET_CITIES_FETCH', getCitiesFetch);
}

export default citiesSaga;
