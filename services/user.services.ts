import {prisma} from "../lib/prisma.ts";
import bcrypt from 'bcrypt'

export const userCreate = async (login: string, name: string, password: string) =>{
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            login,
            name,
            password: hashPassword
        }
    })
    return user;
}