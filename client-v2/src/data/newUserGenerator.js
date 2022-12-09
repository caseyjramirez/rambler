
function formatNewUserData(newUser) {
    return {
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        city_id: newUser.city_id,
        user_lat: newUser.user_lat,
        user_lng: newUser.user_lng,
        industry_id: newUser.industry_id,
        company: newUser.company,
        job_title: newUser.jobTitle,
        email: newUser.email,
        password: newUser.password,
        password_confirmation: newUser.confirmPassword,
        profile_photo: newUser.profile_photo,
        cover_photo: newUser.cover_photo,
        description: newUser.description,
        complete_profile: false,
        mile_goal: 0
    }
}

export {
    formatNewUserData
}