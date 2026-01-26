import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

function Welcome() {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className="max-w-32 mx-auto lg:pt-1">
                {/* <img
          src={logo}
          alt=""
          className="rounded-full rounded-r-full mt-5 animate-none"
        /> */}
            </div>
            <div className="max-w-screen-sm mx-auto p-10 lg:p-20 text-center flex flex-col items-center justify-center border-black rounded-2xl  border-none sm:max-w-screen-sm lg:max-w-screen-xl gap-y-9">
                <h1 className="lg:text-[60px] text-3xl text-white">
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
                <div className="grid lg:grid-cols-1 grid-cols-1 lg:gap-x-3 gap-y-3 mt-0 lg:mt-10 lg:w-1/4">
                    {/* <button
                        onClick={() => navigate("/dashboard")}
                        className="bg-white px-8 py-2 rounded-md text-center font-semibold transition-all duration-300 ease-in-out  hover:bg-black hover:text-white  hover:scale-110 hover:shadow-lg w-full"
                    >
                        View Dashboard
                    </button> */}
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
                    <button
                        onClick={() => {
                            navigate("/search-user");
                        }}
                        className="transition ease-in-out duration-300 bg-white px-8 py-2 rounded-md text-center font-semibold hover:bg-black hover:text-white  hover:scale-110 hover:shadow-lg"
                    >
                        Search Customer
                    </button>
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
            <footer className="mt-20 lg:mt-40 text-white text-center mb-2">
                    <p>©2026 Cable Network Management System.</p>
                    <p>Developed by Tejas</p>
                </footer>
        </div>
    );
}

export default Welcome;
