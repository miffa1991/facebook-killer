import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'd2f5b007-0ccf-4ac0-acee-b03a552a8ba4'
  }
});

export const userAPI = {
  getUsers(pageCurrent = 1, pageLimit = 8) {
    return instance.get(`users?page=${pageCurrent}&count=${pageLimit}`).then(response => {
      return response.data;
    });
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => {
      return response.data;
    });
  },
  getFollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => {
      return response.data;
    });
  },
  getUnFollow(userId) {
    return instance.post(`follow/${userId}`,{}).then(response => {
      return response.data;
    });
  },
  getAuth() {
    return instance.get(`auth/me`).then(response => {
      return response.data;
    });
  }

}
