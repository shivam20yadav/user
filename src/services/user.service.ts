import { userLoginResponce, userDetail, userSignUp, userLogin } from "../types/user.types";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { userModel } from "../model/user.model";
dotenv.config({path : '.env'});
export class userService{
    constructor () { }
   
    /**
     * 
     */
    async singup(signupBody:userSignUp):Promise<any> {
        return new Promise((resolve,reject) =>{
            if(signupBody.username === "admin" && signupBody.password === "admin@123"){
                resolve({
                    code:200,
                    message:"user register"
                });
            } else {

            }
        });
    }
    /**
     * 
     */
    async login(loginBody:userLogin):Promise<userLoginResponce> {
        return new Promise(async (resolve,reject) =>{
            let userDetail:any = await userModel.findOne({
                where:{
                    username:"admin"
                }
            });
            console.log(userDetail.username,userDetail.password)
            if(loginBody.username === userDetail.username && loginBody.password === userDetail.password){
                let token = jwt.sign({
                    id:"1",
                    username:"shivam",
                    loginTime:new Date(),
                    mobileNumber:"123456789"
                },"fgsdfgasfhasgdkjfhadsgkfjas",{
                    expiresIn:"2h"
                })
                resolve({id:"1",token:token});
            } else {
                reject({
                    code:200,
                    message:"username or password is worng"
                })
            }
        });
    }

    /**
     * 
     */
    async getUserDetail():Promise<userDetail>{
        return new Promise((resolve,reject) =>{
            resolve({
                id:"1",
                email:"something@gmail.com",
                username:"someone",
                password:"asd"
            })
        });
    }
}