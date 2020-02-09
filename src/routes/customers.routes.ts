import express from 'express';
import customerController from '#root/controllers/customers.controller'

const userRouter = express.Router();

userRouter.get('/', customerController.getAllCustomers);

export default userRouter; 