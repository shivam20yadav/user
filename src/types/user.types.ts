export type userSignUp = {
    username:string,
    password:string
}

export type userLogin = {
    username:string,
    password:string
}

export type userLoginResponce = {
    id:string,
    token:string
}

export type userDetail = {
    id:string,
    username:string,
    password:string,
    email:string,
}

export type tokenBody = {
    id:string,
    username:string,
    loginTime:string,
    mobileNumber:string
}