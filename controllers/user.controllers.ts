import type {Request, Response} from 'express'

import { userCreate } from '../services/user.services.ts';

export const createUser = async (req: Request, res: Response) =>{
    try{
        const {login, name, password} = req.body;
        const user = await userCreate(login, name, password)
        res.status(200).json(user)    
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal server error!"});
    }
    
}