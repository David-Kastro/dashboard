import api from './api-service'

export const properties = () => {
  return api.get('/propriedades')
}