import { useState } from "react";
import hamburger from "../assets/hamburger.jpg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import headerLogo from '../assets/headerLogo.png'

const Header = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const location = useLocation();
    console.log(location)

    return (
        <div className="relative">
            <div className="flex justify-between bg-transparent p-4 border-2 border-t-0 border-l-0 border-r-0 border-b-0">
                <div className="flex gap-x-6 pl-2">
                    {/* <button onClick={() => setShow(!show)}>
                        <img
                            className="size-10 rounded-full"
                            src={hamburger}
                            alt="hamburger"
                        />
                    </button> */}
                    <img src={headerLogo} className="mt-1 lg:mt-0 size-7 lg:size-12 rounded-full" alt="" />
                    <div className="flex justify-between w-28 lg:w-72 text-white text-xs lg:text-xl font-thin lg:gap-x-6">
                        <button className={location.pathname === '/' ? `border border-l-0 border-r-0 border-t-0 p-1 lg:px-8 ` : `p-1 rounded-xl lg:px-8`} onClick={() => navigate('/')}>HOME</button>
                        <button className={location.pathname === '/search-user' ? `border border-l-0 border-r-0 border-t-0 p-1 lg:px-8 ` : `p-1 rounded-xl lg:px-8`} onClick={() => navigate('/search-user')}>SEARCH</button>
                        <button className={location.pathname === '/addUser' ? `border border-l-0 border-r-0 border-t-0 p-1 lg:px-8 ` : `p-1 rounded-xl lg:px-8`} onClick={() => navigate('/addUser')}>ADD</button>
                    </div>
                </div>  

                <h1 className="font-black text-3xl text-white">GTPL</h1>
            </div>

            <div
                className={`
          absolute left-0
          shadow-2xl
          text-white
          bg-black
          flex flex-col gap-y-4
          w-44 p-2
          items-start
          transform transition-all duration-300 ease-in-out
          ${
              show
                  ? "opacity-100 scale-y-100 translate-y-0"
                  : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
          }
        `}
                style={{ transformOrigin: "top" }}
            >
                <button
                    className="border border-t-0 border-r-0 border-l-0 w-full text-start"
                    onClick={() => navigate("/")}
                >
                    Home
                </button>
                <button
                    className="border border-t-0 border-r-0 border-l-0 w-full text-start"
                    onClick={() => navigate("/")}
                >
                    Dashboard
                </button>
                <button
                    className="border border-t-0 border-r-0 border-l-0 w-full text-start"
                    onClick={() => navigate("/addUser")}
                >
                    Add Customer
                </button>
                <button
                    className="border border-t-0 border-r-0 border-l-0 w-full text-start"
                    onClick={() => navigate("/search-user")}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Header;
