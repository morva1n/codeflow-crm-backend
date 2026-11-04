import express from 'express'
import * as user from '../controllers/user.controllers.ts'
const routes = express.Router()


routes.post('/create', user.createUser)


export default routes;