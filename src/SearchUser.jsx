import { useState } from "react";

const SearchUser = () => {
    const initialState = {
        searchString: "",
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

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const fetchedData = await response.json();
                return fetchedData;
            } else {
                throw new Error("Error in fetching the data from the backend");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);

        //Sending this to backend via GET request
        const apiResponse = fetchData();
        console.log(apiResponse);
    };

    return (
        <div>
            <div
                className="
                max-w-sm
                md:max-w-4xl
                mx-auto
                shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]
                text-center
                bg-transparent
                my-32
                p-20
                space-y-6
                py-32
                border-separate
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
                    <button
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
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchUser;
