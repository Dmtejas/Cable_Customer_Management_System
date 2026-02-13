import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { useState } from "react";
import Loading from "../Components/Loading";
import "../Components/addUser.css";
import appLogo from '../assets/logo.png'

function Welcome() {
    const navigate = useNavigate();
    const [addUser, setAddUser] = useState(false);

    return (
        <div>
            <Header />
            <div className="w-1/4 mx-auto p-0">
                <img
          src={appLogo}
          alt=""
          className="rounded-full rounded-r-full animate-none"
        />
            </div>

            <div className="max-w-screen-sm mx-auto p-10 lg:p-20 lg:pt-0 text-center flex flex-col items-center justify-center border-black rounded-2xl  border-none sm:max-w-screen-sm lg:max-w-screen-xl gap-y-9">
                <h1
                    id="heding"
                    className="lg:text-[60px] text-3xl text-white font-black"
                >
                    ಶ್ರೀ ಮಹದೇಶ್ವರ ಕೇಬಲ್ ನೆಟ್ವರ್ಕ್ಸ್
                </h1>
                <p className="text-zinc-200 lg:text-2xl text-xl font-normal text-pretty italic underline">
                    Maintained by Mahesh DN
                </p>
                <p className="text-white lg:text-[20px] text-[15px] font-light">
                    A simple and secure system to manage customer details,
                    subscriptions, and payments — designed to make cable network
                    operations faster, organized, and reliable.
                </p>
                <div className=" grid lg:grid-cols-3 grid-cols-1 lg:gap-x-7 gap-y-3 mt-0 lg:mt-10 lg:w-full">
                    {/* <button
                        onClick={() => navigate("/dashboard")}
                        className="bg-white px-8 py-2 rounded-md text-center font-semibold transition-all duration-300 ease-in-out  hover:bg-black hover:text-white  hover:scale-110 hover:shadow-lg w-full"
                    >
                        View Dashboard
                    </button> */}
                    <div className="border-4 p-6 flex flex-col gap-y-8 rounded-3xl">
                        <div className="flex flex-col gap-y-2 justify-between">
                            <h1 className="text-start text-white text-2xl font-thin">New Connection</h1>
                            <p className="text-start text-white">
                                Register new subscribers in seconds and manage
                                their connection details effortlessly.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                console.log("BUTTON CLICKED");
                                navigate("/addUser");
                            }}
                            className="bg-white px-8 py-2 rounded-md text-center font-semibold transition-all duration-300 ease-in-out  hover:bg-black hover:text-white  hover:scale-110 hover:shadow-lg"
                        >
                            Add Customer
                        </button>
                    </div>

                     <div className="border-4 p-6 flex flex-col gap-y-8 rounded-3xl justify-between">
                        <div className="flex flex-col gap-y-2">
                            <h1 className="text-start text-white text-2xl font-thin">Search Customer</h1>
                            <p className="text-start text-white">
                                Find any subscriber instantly using name, phone number, or customer ID.
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                navigate("/search-user");
                            }}
                            className="transition ease-in-out duration-300 bg-white px-8 py-2 rounded-md text-center font-semibold hover:bg-black hover:text-white  hover:scale-110 hover:shadow-lg"
                        >
                            Search Customer
                        </button>
                    </div>
                     <div className="border-4 p-6 flex flex-col gap-y-8 rounded-3xl justify-between">
                        <div className="flex flex-col gap-y-2">
                            <h1 className="text-start text-white text-2xl font-thin">Recharge Subscription</h1>
                            <p className="text-start text-white">
                                Renew customer plans, collect payments, and extend services without delays.
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                navigate("https://gtplsaathi.com");
                            }}
                            className="transition ease-in-out duration-300 bg-white px-8 py-2 rounded-md text-center font-semibold hover:bg-black hover:text-white  hover:scale-110 hover:shadow-lg"
                        >
                            Recharge
                        </button>
                    </div>
                </div>
            </div>
            <footer className="mt-20 lg:mt-40 text-white text-center mb-2">
                <p>©2026 Cable Network Management System.</p>
                <p>Developed by Tejas</p>
            </footer>
        </div>
    );
}

export default Welcome;
