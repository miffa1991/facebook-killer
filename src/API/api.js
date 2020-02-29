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
    console.warn('old function/ please update');
    return profileAPI.getProfile(userId);
  },
  getFollow(userId) {
    return instance.post(`follow/${userId}`);
  },
  getUnFollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => {
      return response.data;
    });
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },

}


export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response => {
      return response.data;
    });
  },
  login(email, password, rememberMe=false) {
    return instance.post(`/auth/login`, { email, password, rememberMe}).then(response => {
      return response.data;
    });
  },
  logout() {
    return instance.delete(`/auth/login`);
  }
}