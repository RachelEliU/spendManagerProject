import express from 'express';
import {userController } from '../controller/userController';
import {orderController} from '../controller/orderController';

const router = express.Router();

router.get('/',userController.status);
router.get('/account/:accountId',userController.getById);
router.post('/account', userController.create);
router.post('/accountId/card', userController.createCard);
router.post('/purchases', orderController.create);
router.post('/purchases/month',orderController.getOrders );

module.exports = router;