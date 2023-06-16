import axios from "axios";


export const usersAPI = {
    getUsers  (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(id){
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUser(id){
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId).then(response =>  response.data);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId).then(response =>  response.data);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {
            status: status
        });
    },
    saveProfile(profile){
        return instance.put(`profile`, profile);
    }
}
export const authAPI = {
    me () {
       return instance.get(`auth/me`);
    },
    login (email, password, rememberMe = false){
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe
        });
    },
    logout (){
        return instance.delete(`auth/login`);
    }
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7fe94856-d8c5-4ba0-a056-255833d65270"
    }
});


