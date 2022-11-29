const loginAPI = '/login'
const authorizeUserAPI = '/authorize_user'
const userAPI = '/users'
const getUserAPI = userId => `/users/${userId}`
const postingAPI = '/postings'
const unfilledPostingAPI = '/unfilledPostings'
const walkAPI = '/walks'
const cityAPI = '/cities'
const industryAPI = '/industries'
const messageAPI = '/messages'

export { 
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
}