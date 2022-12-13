import axios from "axios";
import { 
    loginAPI,
    authorizeUserAPI,
    postingAPI,
    unfilledPostingAPI,
    walkAPI,
    cityAPI,
    industryAPI,
    userAPI,
    getUserAPI,
    messageAPI,
    activitiesAPI,
    getAWalkAPI,
    updateActivtyGoalAPI,
    setCompleteProfileAPI,
    setActivitiesToSeenAPI
} from "./urls";

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

async function bookActivity(body) {
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

async function deleteActivity(walkId, userId) {
    try {
        return await axios({
            method: 'delete',
            url: getAWalkAPI(walkId),
            data: userId
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

async function getActivities() {
    try {
        return await axios({
            method: 'get',
            url: activitiesAPI,
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

async function updateUser(userId, body) {
    try {
        return await axios({
            method: 'patch',
            url: getUserAPI(userId),
            data: body
        })
    } catch (error) {
        return error
    }
}

async function createMessage(body) {
    try {
        return await axios({
            method: 'post',
            url: messageAPI,
            data: body
        })
    } catch (error) {
        return error
    }
}

async function updateActivityGoal(body) {
    try {
        return await axios({
            method: 'post',
            url: updateActivtyGoalAPI,
            data: body
        })
    } catch (error) {
        return error
    }
}

async function setCompleteProfile(body) {
    try {
        return await axios({
            method: 'post',
            url: setCompleteProfileAPI,
            data: body
        })
    } catch (error) {
        return error
    }
}

async function setActivitiesToSeen(body) {
    try {
        return await axios({
            method: 'patch',
            url: setActivitiesToSeenAPI,
            data: body
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
    bookActivity,
    getCities,
    getIndustries,
    createNewUser,
    getUser,
    createMessage,
    updateUser,
    getActivities,
    deleteActivity,
    updateActivityGoal,
    setCompleteProfile,
    setActivitiesToSeen
}