import mongoose from 'mongoose'

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"]
    },
    area: {
        type: String,
        required: [true, "Location is required"]
    },
    number: {
        type: String,
        required: [true, "Box number is required"]
    },
    monthlyCharge: {
        type: String,
        required: [true, "Monthly charge is required"]
    },
    pendingAmount: {
        type: String,
        required: [true, "Pending amount is required"]
    }

},
{
    timestamps: true
})

const customerModel = mongoose.model('Customer', customerSchema)

export {customerModel}