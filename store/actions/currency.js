export const SET_DATE = 'SET_DATE'
export const SET_RATE = 'SET_RATE'
export const SET_INIT_RATE = 'SET_INIT_RATE'
export const SET_CURRENT_USD = 'SET_CURRENT_USD'
export const SET_CURRENT_EUR = 'SET_CURRENT_EUR'
export const SET_LOADING = 'SET_LOADING'
export const UNSET_LOADING = 'UNSET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'
import axios from 'axios'

export const setDate = (date) => {
  return { type: SET_DATE, date: date }
}

const tryNextDate = (date) => {
  return (dispatch) => {
    if (+date >= +new Date() || +date < +new Date('1999-01-01')) {
      dispatch(setInitRate())
      return
    }
    date.setDate(date.getDate() + 1)
    dispatch(setRate(date))
  }
}

// https://api.coingate.com/v2/rates/merchant/USD/RUB

export const setCurrentRate = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get(
        'https://api.coingate.com/v2/rates/merchant/USD/RUB'
      )
      console.log(data.data)
      dispatch({ type: SET_CURRENT_USD, payload: data.data })
    } catch (error) {
      dispatch(setError('Текущий курс недоступен. Попытайтесь позже.'))
    }
    try {
      const data = await axios.get(
        'https://api.coingate.com/v2/rates/merchant/EUR/RUB'
      )
      console.log(data.data)
      dispatch({ type: SET_CURRENT_EUR, payload: data.data })
    } catch (error) {
      dispatch(setError('Текущий курс недоступен. Попытайтесь позже.'))
    }
  }
}

export const setRate = (selectedDate = new Date()) => {
  return async (dispatch) => {
    dispatch(setError(''))

    // console.log('SELECTED DATE', selectedDate)
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
    try {
      const data = await axios.get(url)
      dispatch({ type: SET_RATE, payload: data.data })
    } catch (error) {
      dispatch(tryNextDate(selectedDate))
      dispatch(
        setError(
          'Возможно курс ЦБ на данную дату не был установлен. Показаны ближайшие даты.'
        )
      )
    }
    dispatch({ type: UNSET_LOADING })
  }
}

export const setInitRate = () => async (dispatch, getState) => {
  const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
  dispatch({ type: CLEAR_ERROR })
  try {
    const data = await axios.get(url)
    dispatch({ type: SET_INIT_RATE, payload: data.data })
  } catch (error) {}
}

export const setError = (error) => (dispatch) => {
  dispatch({ type: SET_ERROR, payload: error })
}
