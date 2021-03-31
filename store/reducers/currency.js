import {
  SET_DATE,
  SET_RATE,
  SET_INIT_RATE,
  SET_LOADING,
  UNSET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
} from '../actions/currency'
import { dummy } from '../../dummy'

const initialState = {
  date: new Date(),
  loading: false,
  rate: dummy,
  error: '',
}

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.date,
      }
    case SET_INIT_RATE:
      return {
        ...state,
        rate: action.payload,
        loading: false,
      }
    case SET_RATE:
      return {
        ...state,
        rate: action.payload,
        loading: false,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case UNSET_LOADING:
      return {
        ...state,
        loading: false,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export default currencyReducer
