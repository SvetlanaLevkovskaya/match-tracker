import axios from 'axios'


const instanceAxios = axios.create({
  baseURL: 'https://app.ftoyd.com/fronttemp-service',
})

export default instanceAxios
