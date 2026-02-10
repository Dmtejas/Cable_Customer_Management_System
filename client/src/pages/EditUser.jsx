import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUser = ({
    id,
    name,
    phone,
    area,
    number,
    monthlyCharge,
    pendingAmount,
}) => {
    const initialState = {
        name,
        phone,
        area,
        number,
        monthlyCharge,
        pendingAmount,
    };
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);
    const [success, setSuccess] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const editDetails = async () => {
        try {
            const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/customers/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (apiResponse.ok) {
                const data = await apiResponse.json();
                console.log(data);
                setFormData({
                    name: data.name,
                    phone: data.phone,
                    area: data.area,
                    number: data.number,
                    monthlyCharge: data.monthlyCharge,
                    pendingAmount: data.pendingAmount,
                });
                setSuccess(`success`);
            } else {
                setSuccess(`failure`);
                console.log("Error updating customer details");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const renderResult = () => {
        if (success == `success`) {
            return (
                <div>
                    <h1 className="text-xl font-semibold text-green-600">
                        Updated succesfully
                    </h1>
                    <button
                        onClick={() => navigate("/")}
                        className="p-2 bg-white text-black mt-2 rounded-xl font-semibold px-8 transition-all duration-300 hover:scale-105"
                    >
                        To Home
                    </button>
                </div>
            );
        } else if (success == `failure`) {
            return (
                <div>
                    <h1 className="text-xl font-semibold text-red-600">
                        Failed updating details
                    </h1>
                    <button className="p-2 bg-white text-black mt-2 rounded-xl font-semibold px-8 transition-all duration-300 hover:scale-105">
                        To Home
                    </button>
                </div>
            );
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        editDetails();
        setFormData(initialState);
    };

    return (
        <div className="min-h-screen">
            <div className="lg:max-w-6xl max-w-xs mx-auto m-10 lg:p-10 p-4 flex flex-col gap-y-5 shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]  rounded-3xl">
                <h1 className="text-white text-center text-2xl lg:text-4xl font-semibold">
                    Edit Customer Details
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="lg:w-4/6 w-3/4 mx-auto lg:p-10 p-2 lg:shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]  flex flex-col gap-y-5 text-white"
                >
                    <div className="flex flex-col gap-y-2">
                        <label className="text-start" htmlFor="name">
                            Enter Name:{" "}
                        </label>
                        <input
                            className="bg-transparent shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] rounded-tr-3xl p-3 transition-all duration-300 hover:scale-105"
                            id="name"
                            type="text"
                            placeholder="Enter here"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <label className="text-start" htmlFor="phone">
                            Enter Phone Number:{" "}
                        </label>
                        <input
                            className="bg-transparent shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] rounded-tr-3xl p-3 transition-all duration-300 hover:scale-105"
                            id="phone"
                            type="text"
                            placeholder="Enter here"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label className="text-start" htmlFor="area">
                            Enter Area:{" "}
                        </label>
                        <input
                            className="bg-transparent shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] rounded-tr-3xl p-3 transition-all duration-300 hover:scale-105"
                            id="area"
                            type="text"
                            placeholder="Enter here"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label className="text-start" htmlFor="number">
                            Enter STN:{" "}
                        </label>
                        <input
                            className="bg-transparent shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] rounded-tr-3xl p-3 transition-all duration-300 hover:scale-105"
                            id="number"
                            type="text"
                            placeholder="Enter here"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label className="text-start" htmlFor="monthlyCharge">
                            Enter Monthly Charge:{" "}
                        </label>
                        <input
                            className="bg-transparent shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] rounded-tr-3xl p-3 transition-all duration-300 hover:scale-105"
                            id="monthlyCharge"
                            type="text"
                            placeholder="Enter here"
                            name="monthlyCharge"
                            value={formData.monthlyCharge}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label className="text-start" htmlFor="pendingAmount">
                            Enter Pending Amount:{" "}
                        </label>
                        <input
                            className="bg-transparent shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] rounded-tr-3xl p-3 transition-all duration-300 hover:scale-105"
                            id="pendingAmount"
                            type="text"
                            placeholder="Enter here"
                            name="pendingAmount"
                            value={formData.pendingAmount}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-white p-2 text-black rounded-xl font-bold transition-all duration-200 hover:scale-110 hover:bg-black hover:text-white"
                    >
                        Edit Details
                    </button>
                    {renderResult()}
                </form>
            </div>
            
        </div>
    );
};

export default EditUser;
