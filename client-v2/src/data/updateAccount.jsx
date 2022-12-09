function formatUpdateAccountData(updatedProfile, password) {
    return {
        first_name: updatedProfile.first_name,
        last_name: updatedProfile.last_name,
        city_id: updatedProfile.city_id,
        user_lat: updatedProfile.user_lat,
        user_lng: updatedProfile.user_lng,
        industry_id: updatedProfile.industry_id,
        company: updatedProfile.company,
        job_title: updatedProfile.job_title,
        email: updatedProfile.email,
        password: password,
        password_confirmation: password,
        profile_photo: updatedProfile.profile_photo,
        cover_photo: updatedProfile.cover_photo,
        description: updatedProfile.description
    }
}

export {
    formatUpdateAccountData
}