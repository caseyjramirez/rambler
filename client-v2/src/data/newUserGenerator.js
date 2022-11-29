
function formatNewUserData(newUser) {
    return {
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        city_id: newUser.city_id,
        industry_id: newUser.industry_id,
        company: newUser.company,
        job_title: newUser.jobTitle,
        email: newUser.email,
        password: newUser.password,
        password_confirmation: newUser.confirmPassword,
        profile_photo: newUser.imagePreviewUrl,
        description: newUser.description
    }
}

export {
    formatNewUserData
}