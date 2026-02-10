import { useState } from "react";
import SearchUser from "./SearchUser";
import { useNavigate } from "react-router-dom";

const DeleteUser = ({
    id,
    name,
    phone,
    area,
    number,
    monthlyCharge,
    pendingAmount,
}) => {

    const [del, setDel] = useState(false);
    const [delMessage, setDelMessage] = useState(null);
    const navigate = useNavigate()

    const deleteData = async () => {
        try {
            const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/customers/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if(apiResponse.ok) {
                const deletedCustomer = await apiResponse.json();
                console.log("Deleted successfully", deletedCustomer);
                setDelMessage(`success`);
            } else {
                setDelMessage(`failure`);
            }
        } catch(err) {
            console.log(err);
        }
    }

    const allowDelete = () => {
        if(delMessage == 'success') {
           return (
                <div>
                    <h1 className="text-xl font-semibold text-green-600">
                        Deleted succesfully
                    </h1>
                    <button onClick={() => navigate('/')} className="p-2 bg-white text-black mt-2 rounded-xl font-semibold px-8 transition-all duration-300 hover:scale-105">
                       To Home
                    </button>
                </div>
            );
        } else if(delMessage == `failure`) {
            return (
                <div>
                    <h1 className="text-xl font-semibold text-green-600">
                        Error in deleting the record
                    </h1>
                    <button onClick={() => navigate('/')} className="p-2 bg-white text-black mt-2 rounded-xl font-semibold px-8 transition-all duration-300 hover:scale-105">
                       To Home
                    </button>
                </div>
            );
        } 
        else {
            return <div className="max-w-md mx-auto flex flex-col items-center shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] mt-20 p-4 text-white text-xl font-semibold">
                <h1>Are you sure? You want to delete : {name}</h1>
                <div className="grid grid-cols-2 gap-x-4 justify-center">
                    <button onClick={deleteData} className="m-2 bg-red-700 px-8 rounded-lg py-2">Yes</button>
                    <button  onClick={() => navigate("/")} className="m-2 bg-white text-black px-8 rounded-lg py-1">No</button>
                </div>
            </div>
        }
    }
    return (
        <div>
            {
                allowDelete()
            }
        </div>
    );
};

export default DeleteUser;
