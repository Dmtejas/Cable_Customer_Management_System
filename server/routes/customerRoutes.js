import { Router } from "express";
import { 
    getCustomers, 
    getSingleCustomer, 
    createCustomer, 
    updateCustomer, 
    deleteCustomer}  from "../controller/customerController.js";
const router = Router();

router.route('/').get(getCustomers);
router.route('/:id').get(getSingleCustomer);
router.route('/').post(createCustomer);
router.route('/:id').put(updateCustomer);
router.route('/:id').delete(deleteCustomer);

export default router;