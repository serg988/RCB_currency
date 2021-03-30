export const SET_DATE = 'SET_DATE'
export const SET_RATE = 'SET_RATE'
export const SET_INIT_RATE = 'SET_INIT_RATE'
export const SET_LOADING = 'SET_LOADING'
export const UNSET_LOADING = 'UNSET_LOADING'
export const SET_ERROR = 'SET_ERROR'
import axios from 'axios'

export const setDate = (date) => {
  return { type: SET_DATE, date: date }
}

export const setRate = (selectedDate) => async (dispatch, getState) => {
  dispatch(setError(''))
  console.log('SELECT_DATE', selectedDate)
  const yyyy = selectedDate.getUTCFullYear()
  let mm =
    selectedDate.getUTCMonth() + 1 > 9
      ? selectedDate.getUTCMonth() + 1
      : '0' + (selectedDate.getUTCMonth() + 1)
  const dd =
    selectedDate.getUTCDate() > 9
      ? selectedDate.getUTCDate()
      : '0' + selectedDate.getUTCDate()
  let url = `https://www.cbr-xml-daily.ru/archive/${yyyy}/${mm}/${dd}/daily_json.js`
  dispatch({ type: SET_LOADING })
  try {
    const data = await axios.get(url)
    // console.log('ACTION SET_INIT_RATE DATA', data.data)
    dispatch({ type: SET_RATE, payload: data.data })
  } catch (error) {
    dispatch(
      setError(
        'На данную дату курс ЦБ не установлен. Пожалуйста, выберите другую дату.'
      )
    )
  }
  dispatch({ type: UNSET_LOADING })
}

export const setInitRate = () => async (dispatch, getState) => {
  const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
  dispatch({ type: SET_LOADING })
  try {
    const data = await axios.get(url)
    // console.log('ACTION SET_INIT_RATE DATA', data.data)
    dispatch({ type: SET_INIT_RATE, payload: data.data })
  } catch (error) {}
  dispatch({ type: UNSET_LOADING })
}

export const setError = (error) => (dispatch) => {
  dispatch({ type: SET_ERROR, payload: error })
}
