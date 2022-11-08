import axios from "axios";
import { 
    loginAPI,
    authorizeUserAPI,
    postingAPI
} from "./url";

async function login(body) {
    try {
        return await axios({
            method: 'post',
            url: loginAPI,
            data: body
        })
    } catch (error) {
        return error
    }
}

async function authorizeUser() {
    try {
        return await axios({
            method: 'get',
            url: authorizeUserAPI
        })
    } catch (error) {
        return error
    }
}

async function createPosting(body) {
    try {
        return await axios({
            method: 'post',
            url: postingAPI,
            data: body
        })
    } catch (error) {
        return error
    }
}

async function getPostings() {
    try {
        return await axios({
            method: 'get',
            url: postingAPI,
        })
    } catch (error) {
        return error
    }
}




export {
    login,
    authorizeUser,
    createPosting,
    getPostings
}