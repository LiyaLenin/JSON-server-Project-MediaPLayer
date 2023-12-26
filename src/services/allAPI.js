import { commonAPI } from "./commonAPI";
import{ SERVER_URL} from "./serverURL"
//upload video
export const uploadNewVideoAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/allvideos`, video)
}
//get all videos
export const getAllVideosAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allvideos`, "")
}
//view single video
export const getAVideoAPI = async (id) => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos/${id}`, "")
}
//Remove video
export const removeVideoAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${id}`, {})
}
//insert video to history
export const addVideoHistoryAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/history`, video)
}
//get video from history
export const getHistoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/history`, "")
}
//Remove history
export const removeHistoryAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/history/${id}`, {})
}
//add Category
export const addCategoryAPI = async (Category) => {
    return await commonAPI("POST", `${SERVER_URL}/categories`, Category)
}

//get All Category
export const getAllCategoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/categories`, "")
}
//remove category
export const removeCategoryAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/categories/${id}`, {})
}
//update category
export const updateCategoryAPI = async (id,categoryDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/categories/${id}`, categoryDetails)
}