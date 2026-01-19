import { useState } from "react";

const AddUser = () => {
    const initialState = {
        name: "",
        number: 0,
        location: "",
        STN: "",
        monthlyCharge: 0,
        pendingAmount: 0,
    };

    const [formData, setFormData] = useState(initialState);

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
            const response = await fetch("http://localhost:3000/api/users", {
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
            
        } else {
            throw new Error("Error sending data to the backend");
        }
        } catch(err) {
            console.log(err);
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
            <div
                className="
                flex  
                my-20
                mx-20
                p-20
                rounded-2xl
                shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                
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
                    my-auto
                    p-10
                    space-y-10
                "
                >
                    <h1
                        className="
                        text-4xl
                        text-white
                        font-semibold
                    "
                    >
                        Welcome to the Cable Network Management System.
                    </h1>
                    <p className="text-white italic">
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
                max-w-xs
                mr-32
                items-center
                mt-2
                py-20
                px-20
                rounded-3xl
                shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                space-y-5
                transition-all
                duration-100
                ease-linear
                hover:scale-110
                md:max-w-screen-md
                sm:max-w-md
                
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
                        <div className="flex space-x-4">
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
                                name="number"
                                value={formData.number}
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
                                type="tel"
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                        <div className="flex space-x-4">
                            <input
                                onChange={handleChange}
                                name="location"
                                value={formData.location}
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
                                name="STN"
                                value={formData.STN}
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
                            type="number"
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
                            type="number"
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
