import { useState } from "react";
import Header from "../Components/Header";

const AddUser = () => {
    const initialState = {
        name: "",
        phone: "",
        area: "",
        number: "",
        monthlyCharge: "",
        pendingAmount: "",
    };

    const [formData, setFormData] = useState(initialState);
    const [success, setSuccess] = useState(null)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const sendFormData = async () => {
        try {
            const response = await fetch("/api/customers", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(formData)
        })

        if(response.ok) {
            console.log("Form data sent to backend succesfully");
            const message = await response.json();
            console.log(message);
            setSuccess(`success`);
            
        } else {
            setSuccess(`failure`);
        }
        } catch(err) {
            console.log(err);
        }
    }

    const renderResult = () => {
        if(success == 'success') {
            return <div>
                <h1 className="text-xl text-center font-semibold text-green-500">Customer added successfully</h1>
            </div>
        } else if(success == `failure`) {
            return <div className="">
                <h1 className="text-xl font-semibold text-red-700 text-center">Customer added successfully</h1>
            </div>
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        
        //CALL API WITH POST REQUEST
        sendFormData();
        //Clear the form input feilds
        setFormData(initialState)
    }

    return (
        <div>
            <Header />
            <div
                className="
                flex 
                lg:flex-row
                flex-col 
                lg:my-2
                lg:mx-20
                lg:p-20
                p-4
                rounded-2xl
                lg:shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                shadow-none
                
            "
            >
                <div
                    className="
                    flex
                    flex-col
                    max-w-sm
                    mx-auto
                    align-middle
                    justify-center
                    lg:my-auto
                    lg:p-10
                    p-4
                    gap-y-10 
                    mb-10
                    lg:mb-0
                "
                >
                    <h1
                        className="
                        text-4xl
                        text-white
                        font-semibold
                        text-center
                        lg:text-left
                    "
                    >
                        Welcome to the Cable Network Management System.
                    </h1>
                    <p className="text-white italic text-center lg:text-left">
                        This application is designed to simplify the daily
                        process of managing customer details, subscriptions, and
                        payment records. It provides a clear and organized
                        workspace that helps maintain accurate information,
                        reduce manual effort, and ensure smooth cable network
                        operations.
                    </p>
                </div>
                <div
                    className="
                flex
                flex-col    
                lg:mr-32
                mr-0
                items-center
                mt-2
                lg:py-20
                lg:px-20
                p-10
                rounded-3xl
                shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                gap-y-5
                transition-all
                duration-100
                ease-linear
                md:max-w-screen-md
                sm:max-w-md
                w-full
                
            "
                >
                    <form
                        onSubmit={handleSubmit}
                        action="/submit"
                        className="
                    flex
                    flex-col
                    space-y-8
                    border
                    border-slate-700
                    p-10
                    rounded-3xl
                    shadow-3xl
                    max-w-lg
                    
                "
                    >
                        <div className="flex lg:flex-row flex-col gap-x-4 items-center lg:gap-y-0 gap-y-6">
                            <input 
                                onChange={handleChange}
                                name="name"
                                value={formData.name}
                                className="
                                    p-2
                                    rounded-bl-2xl
                                    max-w-md
                                    bg-transparent
                                    placeholder-white
                                    focus: ring-black
                                    outline-teal-50
                                    text-white
                                    shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                                    transition-all
                                    duration-250
                                    hover:scale-110
                                    hover:ease-in-out
                                    
                                "
                                type="text"
                                placeholder="Customer Name"
                                required
                            />

                            <input
                                onChange={handleChange}
                                name="phone"
                                value={formData.phone}
                                className="
                                    p-2
                                    rounded-bl-2xl
                                    max-w-md
                                    bg-transparent
                                    placeholder-white
                                    outline-teal-50
                                    text-white
                                    shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                                    transition-all
                                    duration-250
                                    hover:scale-110
                                    hover:ease-in-out
                                "
                                type="text"
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                        <div className="flex lg:flex-row flex-col gap-x-4 lg:gap-y-0 gap-y-6">
                            <input
                                onChange={handleChange}
                                name="area"
                                value={formData.area}
                                className="
                                p-2
                                rounded-bl-2xl
                                w-full
                                bg-transparent
                                placeholder-white
                                outline-teal-50
                                text-white
                                shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                                transition-all
                                duration-250
                                hover:scale-110
                                hover:ease-in-out
                            "
                                type="text"
                                placeholder="Area / Location"
                                required
                            />

                            <input
                                onChange={handleChange}
                                name="number"
                                value={formData.number}
                                className="
                                p-2
                                rounded-bl-2xl
                                w-full
                                bg-transparent
                                placeholder-white
                                outline-teal-50
                                text-white
                                shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                                transition-all
                                duration-250
                                hover:scale-110
                                hover:ease-in-out
                            "
                                type="text"
                                placeholder="Set-Top Box Number"
                            />
                        </div>

                        <input
                            onChange={handleChange}
                            name="monthlyCharge"
                            value={formData.monthlyCharge}
                            className="
                                
                                p-2
                                rounded-bl-2xl
                                w-full
                                bg-transparent
                                placeholder-white
                                outline-teal-50
                                text-white
                                shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                                transition-all
                                duration-250
                                hover:scale-110
                                hover:ease-in-out
                            "
                            type="text"
                            placeholder="Monthly Charge"
                            required
                        />

                        <input
                            onChange={handleChange}
                            name="pendingAmount"
                            value={formData.pendingAmount}
                            className="
                                p-2
                                rounded-bl-2xl
                                w-full
                                bg-transparent
                                placeholder-white
                                outline-teal-50
                                text-white
                                shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                                transition-all
                                duration-250
                                hover:scale-110
                                hover:ease-in-out
                            "
                            type="text"
                            placeholder="Pending Amount"
                        />
                        <button
                            className="
                            bg-white
                            text-black
                            py-2
                            font-semibold
                            rounded-2xl
                            transition-all
                        duration-250
                        hover:scale-110
                        hover:ease-in-out
                        hover:bg-black
                     hover:text-white
                        "
                        >
                            Add Customer
                        </button>
                        {renderResult()}
                    </form>
                </div>
            </div>
            <footer className="mt-20 lg:mt-40 text-white text-center mb-2">
                <p>©2026 Cable Network Management System.</p>
                <p>Developed by Tejas</p>
            </footer>
        </div>
    );
};

export default AddUser;
