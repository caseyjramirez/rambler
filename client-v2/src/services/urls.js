const loginAPI = '/login'
const authorizeUserAPI = '/authorize_user'
const userAPI = '/users'
const getUserAPI = userId => `/users/${userId}`
const postingAPI = '/postings'
const unfilledPostingAPI = `/unfilledPostings`
const walkAPI = '/walks'
const getAWalkAPI = walkId => `/walks/${walkId}`
const cityAPI = '/cities'
const industryAPI = '/industries'
const messageAPI = '/messages'
const activitiesAPI = '/activities'
const updateActivtyGoalAPI = '/update_activity_goal'
const setCompleteProfileAPI = '/set_complete_profile'
const setActivitiesToSeenAPI = '/set_activities_to_seen'

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
    messageAPI,
    activitiesAPI,
    getAWalkAPI,
    updateActivtyGoalAPI,
    setCompleteProfileAPI,
    setActivitiesToSeenAPI
}