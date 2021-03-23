import { iContributeApiInstance } from "../config";


export async function getNotifications(type?: string) {
    // TODO: get all notifications associated to the given user id
    try {
        const response = await iContributeApiInstance.get(`notifications/${type}`)
        
        return {status: response.status, data: response.data };
    } catch(error){
        return error.response
    }
}

export async function readNotification(id: string) {
    // TODO: mark the notification with the given id as read
    try {
        const response = await iContributeApiInstance.put(`notifications/${id}`, {
            data : {read:true}
        })
        
        return {status: response.status, data: response.data };
    } catch(error){
        return error.response
    }
}

export async function unreadNotification(id: string) {
    // TODO: mark the notification with the given id as unread
    try {
        const response = await iContributeApiInstance.put(`notifications/${id}`, {
            data : {read:false}
        })
        
        return {status: response.status, data: response.data };
    } catch(error){
        return error.response
    }
}

export async function deleteNotification(id: string) {
    // TODO: delete the notification with the given id
    try {
        const response = await iContributeApiInstance.delete(`notifications/${id}`)
        
        return {status: response.status, data: response.data };
    } catch(error){
        return error.response
    }
}
