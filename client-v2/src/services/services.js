import axios from 'axios';
import { 
    loginAPI,
    authorizeUserAPI,
    postingAPI,
    walkAPI,
    unfilledPostingAPI,
    cityAPI,
    industryAPI,
    userAPI,
    getUserAPI,
    messageAPI
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

export {
    login,
    // authorizeUser,
    // createPosting,
    // getPostings,
    // createWalk,
    // getCities,
    // getIndustries,
    // createNewUser,
    // getUser,
    // createMessage,
    // updateUser
}