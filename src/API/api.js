import axios from 'axios';
const KEY = 'd3825cb0-7ea5-404c-9418-242797b2cdcd';

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': KEY
    }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUsers(id){
        return instance.post(`follow/${id}`).then(response => response.data.resultCode)
    },
    unfollowUsers(id){
        return instance.delete(`follow/${id}`).then(response => response.data.resultCode)
    }
}
export const profileAPI = {
    getProfileUsers(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(file) {
        let formData = new FormData();
        formData.append('image', file)
        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/formData'}})
    },
}

export const authAPI = {
    onAuth(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

