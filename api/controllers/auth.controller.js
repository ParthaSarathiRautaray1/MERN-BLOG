import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"

export const signup = async (req,res ,next) =>{
    const {username , email , password } = req.body

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400, 'All field should be filled'))
    }


    const hashedPassword = bcryptjs.hashSync(password,10)

    const newUser = new User ({
        username,
        email, 
        password: hashedPassword,
    })

    try{

        await newUser.save()
        res.json('signup successfully done')
        
    }catch (error){
        next(error)
    }
 


    
}