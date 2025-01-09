import api from './index.service'

export const userService = {
  async getProfile(userId) {
    try {
      const { data } = await api.get(`/users/${userId}`)
      return [null, data]
    } catch (error) {
      return [error]
    }
  },

  async updateUser(userId, userData) {
    try {
      const { data } = await api.put(`/users/${userId}`, userData)
      return [null, data]
    } catch (error) {
      return [error]
    }
  },

  async deleteUser(userId) {
    try {
      const { data } = await api.delete(`/users/${userId}`)
      return [null, data]
    } catch (error) {
      return [error]
    }
  }
}