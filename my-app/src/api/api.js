import * as axios from 'axios';
 

const instance = axios.create ({

    withCredentials: true,
    headers: {"API-KEY": '4dceabd9-2d79-41f9-9862-70439bade4fa'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    
});

export const usersAPI = {
    getUsers (currentPage=1, pageSize=10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then
        (response=> {
            return response.data;
        });
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow (userId) {
        return instance.delete(`unfollow/${userId}`)
    },
    getProfile(userId) {
        console.warn ('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);  
    }
  }

export const profileAPI = {
    
    getProfile(userId) {
        return instance.get(`profile/` + userId)  
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId) 
    },
    updateStatus(status) {
        return instance.put(`profile/status` + {status: status}); 

    }

}
    
    
export const authAPI = {
    meAuth() {
    return instance.get(`auth/me`)
    },
}  
    





