import {
  SET_DATE,
  SET_RATE,
  SET_INIT_RATE,
  SET_LOADING,
  UNSET_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_CURRENT_USD,
  SET_CURRENT_EUR,
} from '../actions/currency'
import { dummy } from '../../dummy'

const initialState = {
  date: new Date(),
  loading: false,
  rate: dummy,
  currentUsd: 0,
  currentEur: 0,
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
    case SET_CURRENT_USD:
      return {
        ...state,
        currentUsd: action.payload,
        loading: false,
      }
    case SET_CURRENT_EUR:
      return {
        ...state,
        currentEur: action.payload,
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
