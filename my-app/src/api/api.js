import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "53d0aeb3-4b9a-4a15-8fc3-134f293e1718",
  },
});

export const usersAPI = {
  getUsers(numberPage, pageSize) {
    return instance
      .get(`users?page=${numberPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfileUsers(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const AuthAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email,password,rememberMe=false){
    return instance.post(`auth/login`, {email,password,rememberMe})
  },
  logout(){
    return instance.delete(`auth/login`)
  }
};
