import axios from 'axios'
const baseUrl = 'https://raw.githubusercontent.com/iancoleman/cia_world_factbook_api/master/data/factbook.json'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {getAll}