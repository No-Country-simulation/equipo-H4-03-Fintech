import api from './index.service'

const authService = {
  async register(userData) {
    try {
      const { data } = await api.post('/users/register', userData)
      return [null, data]
    } catch (error) {
      return [error]
    }
  },

  async login(credentials) {
    try {
      const { data } = await api.post('/users/login', credentials)
      return [null, data]
    } catch (error) {
      return [error]
    }
  },

  async logout() {
    try {
      await api.post('/users/logout')
      return [null, true]
    } catch (error) {
      return [error]
    }
  }
}

export default authService