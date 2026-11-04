import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import userRouter from './routes/user.routes.ts'

const app = express();


app.use(express.json())

app.use('/user', userRouter)


app.listen(process.env.PORT, () =>{
    console.log(`Server is running at ${process.env.PORT} port`)
})