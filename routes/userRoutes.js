import express, { Router } from 'express'
import { regsiterUser, loginUser, logoutUser } from '../controllers/userController';

const route = express.Router();

Router.route('/account/Register').post(regsiterUser);

Router.route('/account/Login').post(loginUser);

Router.route('/account/Logout').get(logoutUser);

