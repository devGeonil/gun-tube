import express from "express";
import routes from "../routes"
import {home, search} from "../controllers/videoControllers"
import {getLogin,
        postLogin,
        getJoin,
        postJoin,
        logout} from "../controllers/userControllers"

const globalRouter = express.Router();

//join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
//login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
//home
globalRouter.get(routes.home, home);
//search
globalRouter.get(routes.search, search);
//logout
globalRouter.get(routes.logout, logout);



export default globalRouter
