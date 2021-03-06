import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "cc1edbf0-ea6d-4193-9f6f-51094f2c5b73" },
});

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUser: (userId) => {
    return instance.post(`follow/${userId}`);
  },
  unfollowUser: (userId) => {
    return instance.delete(`follow/${userId}`);
  },
  getProfile: (userId) => {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`);
  },
  getStatus: (userId) => {
    return instance.get(`/profile/status/${userId}`);
  },
  updateStatus: (status) => {
    return instance.put(`/profile/status/`, { status: status });
  },
  savePhoto: (photoFile) => {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`/profile/photo/`, formData, {
      headers: {
        "Content-Type": "multypart/formData",
      },
    });
  },
  saveProfile: (profile) => {
    return instance.put(`/profile/profile`, profile);
  },
};
export const authAPI = {
  getAuth: () => {
    return instance.get(`auth/me`);
  },
  login: (email, password, rememberMe = false) => {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout: () => {
    return instance.delete(`auth/login`);
  },
};
