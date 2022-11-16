import axios from "axios";
import { 
    loginAPI,
    authorizeUserAPI,
    postingAPI,
    walkAPI,
    unfilledPostingAPI,
    cityAPI,
    industryAPI,
    userAPI,
    getUserAPI
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

async function createWalk(body) {
    try {
        return await axios({
            method: 'post',
            url: walkAPI,
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
            url: unfilledPostingAPI,
        })
    } catch (error) {
        return error
    }
}

async function getCities() {
    try {
        return await axios({
            method: 'get',
            url: cityAPI,
        })
    } catch (error) {
        return error
    }
}

async function getIndustries() {
    try {
        return await axios({
            method: 'get',
            url: industryAPI,
        })
    } catch (error) {
        return error
    }
}

async function createNewUser(body) {
    try {
        return await axios({
            method: 'post',
            url: userAPI,
            data: body
        })
    } catch (error) {
        return error
    }
}

async function getUser(userId) {
    try {
        return await axios({
            method: 'get',
            url: getUserAPI(userId),
        })
    } catch (error) {
        return error
    }
}




export {
    login,
    authorizeUser,
    createPosting,
    getPostings,
    createWalk,
    getCities,
    getIndustries,
    createNewUser,
    getUser
}