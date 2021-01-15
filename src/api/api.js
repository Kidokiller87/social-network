import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"8850b415-436e-4e8c-923c-87c01d206187"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    follow (userId) {

        return instance.post(`follow/${userId}`, {})

    },
    unfollow(userId) {

        return instance.delete(`follow/${userId}`)

    }
}
