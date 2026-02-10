import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";

const SearchUser = () => {
    const initialState = {
        searchString: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [initialData, setInitialData] = useState([]);
    const [filteredState, setFilteredState] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        const search = value.toLowerCase();

        if (!search) {
            setFilteredState(initialData);
            return;
        }

        const filtered = initialData.filter(
            (customer) =>
                customer.name?.toLowerCase().includes(search) ||
                customer.phone?.includes(search) ||
                customer.stn?.toLowerCase().includes(search),
        );

        setFilteredState(filtered);
    };

    const fetchAllData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/customers`, {
            method: "GET",
        });

        if (response?.ok) {
            const result = await response.json();
            console.log(result);
            setInitialData(result);
            setFilteredState(result);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch("/api/customers", {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (response.ok) {
    //             const fetchedData = await response.json();
    //             return fetchedData;
    //         } else {
    //             throw new Error("Error in fetching the data from the backend");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);

        //Sending this to backend via GET request
        // const apiResponse = fetchData();
        // console.log(apiResponse);
    };

    return (
        <div>
            <Header />
            <div
                className="
                max-w-md
                lg:max-w-7xl
                mx-auto
                shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                text-center
                bg-transparent
                my-10
                lg:p-20
                p-4
                space-y-6
                py-32
                border-separate
                transition-all
                duration-300
                ease-in-out
            "
            >
                <h1
                    className="
                    text-2xl
                    md:text-4xl
                    text-white
                    font-semibold
                "
                >
                    Search Customer Records
                </h1>
                <p
                    className="
                    text-slate-400
                    italic
                    text-sm
                    md:text-xl
                    
                "
                >
                    Search by name, phone number, or set-top box ID
                </p>
                <form className="space-y-10" onSubmit={handleSubmit}>
                    <input
                        className="
                        bg-transparent
                        p-4
                        w-full
                        text-white
                        placeholder:text-lg
                        rounded-md
                        shadow-2xl
                        border
                    "
                        type="text"
                        onChange={handleChange}
                        name="searchString"
                        value={formData.searchString}
                        placeholder="Enter customer name, number or STN"
                    />
                    {/* <button
                        className="
                        bg-white
                        w-full
                        py-2
                        text-lg
                        italic
                        rounded-lg
                        hover:scale-105
                        transition-all
                        ease-in-out
                        duration-200
                        hover:bg-black
                        hover:text-white
                        shadow-2xl
                        font-semibold
                    "
                    >
                        Search Customer
                    </button> */}
                </form>
                <Card data={filteredState} />
            </div>
            <footer className="mt-20 lg:mt-40 text-white text-center mb-2">
                <p>©2026 Cable Network Management System.</p>
                <p>Developed by Tejas</p>
            </footer>
        </div>
    );
};

export default SearchUser;
