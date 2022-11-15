import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
const joiPassword = Joi.extend(joiPasswordExtendCore)
const joiOptions = {abortEarly: false, errors: {label: 'key', wrap: {label: false}}}

/*
=============== Setting Messages ===============
*/

function stringValidationMessages(variable, minLength, maxLength) {
    return {
        "string.min": `${variable} must be at least ${minLength} characters long.`,
        "string.max": `${variable} must be under ${maxLength} characters long.`,
        "string.empty": `Give yourself a ${variable}.`,
        "string.string": `${variable} must be a string.`,
    }
}

function companyValidationMessages(variable, minLength, maxLength) {
    return {
        "string.min": `${variable} must be at least ${minLength} characters long.`,
        "string.max": `${variable} must be under ${maxLength} characters long.`,
        "string.empty": `Where do you work?`,
        "string.string": `${variable} must be a string.`,
    }
}

function jobTitleValidationMessages(variable, minLength, maxLength) {
    return {
        "string.min": `${variable} must be at least ${minLength} characters long.`,
        "string.max": `${variable} must be under ${maxLength} characters long.`,
        "string.empty": `What do you do?`,
        "string.string": `${variable} must be a string.`,
    }
}

/*
=============== Setting Schemas ===============
*/
const nameSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required().label("First Name").messages(stringValidationMessages('First Name', 3, 30)),
    lastName: Joi.string().min(3).max(30).required().label("Last Name").messages(stringValidationMessages('Last Name', 3, 30))
})

const jobSchema = Joi.object({
    company: Joi.string().min(3).max(60).required().label("Company").messages(companyValidationMessages('Company', 3, 60)),
    jobTitle: Joi.string().min(3).max(60).required().label("Job Title").messages(jobTitleValidationMessages('Job Title', 3, 60)),
})

const loginInfoSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'global']}}).label("Email"),
    password: joiPassword.string().minOfSpecialCharacters(1).minOfLowercase(1).minOfUppercase(1).minOfNumeric(1).noWhiteSpaces().required().label("Password").messages(stringValidationMessages('Password', 3, 30)),
})



/*
=============== Setting Functions ===============
*/
function validateName(obj) {
    return nameSchema.validate(obj, joiOptions)
}

function validateJob(obj) {
    return jobSchema.validate(obj, joiOptions)
}

function validateLoginInfo(obj) {
    return loginInfoSchema.validate(obj, joiOptions)
}



/*
=============== Exporting ===============
*/

export { validateName, validateJob, validateLoginInfo }