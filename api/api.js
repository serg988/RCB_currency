import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
  baseURL: 'https://www.cbr-xml-daily.ru/archive',
})

export default instance