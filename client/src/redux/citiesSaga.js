import { call, put, takeEvery } from 'redux-saga/effects'
import { citiesInitAC } from './actionCreators/citiesAC'

const fetchCities = async ({currentPage, filter1}) => {
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
  const cities = await response.json()
  return cities
}

function* getCitiesFetch(action) {
  const cities = yield call(fetchCities, { currentPage: action.payload.currentPage, filter1: action.payload.filter1 })
  yield put(citiesInitAC(cities))
}
export function* citiesSaga() {
  yield takeEvery('GET_CITIES_FETCH', getCitiesFetch);
}

export default citiesSaga;
