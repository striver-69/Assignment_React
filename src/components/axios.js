import axios from 'axios'

const instance=axios.create({
  baseURL:'https://api.spaceXdata.com/v3/launches'
})

export default instance