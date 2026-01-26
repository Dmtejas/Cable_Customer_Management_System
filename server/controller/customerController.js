import { customerModel } from "../models/customerModel.js"
import expressAsyncHandler from "express-async-handler"

//@desc GET /api/customers
const getCustomers = expressAsyncHandler( async (req, res) => {
    const allCustomers = await customerModel.find();
    if(!allCustomers) {
        res.status(404);
        throw new Error(`Error in fetching the customers`);
    }
    res.status(200).json(allCustomers)
})

const getSingleCustomer = expressAsyncHandler ( async (req, res) => {
    const customer = await customerModel.findById(req.params.id)
    if(!customer) {
        res.status(404);
        throw new Error(`Error fetching the customer`);
    }
    res.status(200).json(customer)
})

const createCustomer = expressAsyncHandler( async (req, res) => {
    const data = req.body
    const createdCustomer = await customerModel.create(data);
    if(!createdCustomer) {
        res.status(404);
        throw new Error(`Error creating the customers`)
    }
    res.status(200).json(createdCustomer);
})

const updateCustomer = expressAsyncHandler( async (req, res) => {
    console.log(req.params.id)
    const customer = await customerModel.findById(req.params.id)
    if(!customer) {
        res.status(404);
        throw new Error(`Error fetching the customer`);
    }
    
    const updatedCustomer = await customerModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedCustomer)
})

const deleteCustomer = expressAsyncHandler( async (req, res) => {
    const customer = await customerModel.findById(req.params.id)
    if(!customer) {
        res.status(404);
        throw new Error(`Error fetching the customer`);
    }
    
    const deletedCustomer = await customerModel.findByIdAndDelete(
        req.params.id,
    )

    res.status(200).json(deletedCustomer)
})

export {getCustomers, getSingleCustomer, createCustomer, updateCustomer, deleteCustomer}