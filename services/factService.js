import axios from 'axios'
const baseUrl = 'http://api.icndb.com/jokes/random'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {getAll}