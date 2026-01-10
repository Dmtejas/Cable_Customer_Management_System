const AddUser = () => {
    return (
        <div>
            <div></div>
            <div
                className="
                flex  
                my-10
                mx-10
                p-10
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
                py-10
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
                    <h1 className="text-2xl text-white font-medium italic">
                        Add Customer
                    </h1>
                    <form
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
                    max-w-sm
                    
                "
                    >
                        <input
                            className="
                        p-2
                        rounded-bl-2xl
                        w-full
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
                            type="tel"
                            placeholder="Phone Number"
                            required
                        />

                        <input
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

                        <input
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
