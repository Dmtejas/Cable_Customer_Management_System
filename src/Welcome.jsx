import logo from "./assets/logo.jpg";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="max-w-32 mx-auto">
        <img
          src={logo}
          alt=""
          className="rounded-ss-full rounded-r-full mt-5 animate-none"
        />
      </div>
      <div className="max-w-screen-sm mx-auto p-10 text-center flex flex-col items-center justify-center my-1 border-black rounded-2xl shadow-md sm:max-w-screen-sm lg:max-w-screen-xl lg:my-30">
        <h1 className="text-4xl font-bold mb-8 text-white">
          Shri Mahadeshwara Cable Networks <br></br>
          <span className="text-zinc-400 text-2xl font-normal text-pretty italic underline">
            Maintained by Mahesh DN
          </span>
        </h1>
        <p className="text-white text-[15px] font-light">
          A simple and secure system to manage customer details, subscriptions,
          and payments — designed to make cable network operations faster,
          organized, and reliable.
        </p>
        <button className="bg-white mt-16 px-8 py-2 rounded-md text-center font-semibold transition-all duration-300 ease-in-out  hover:bg-black hover:text-white  hover:scale-110 hover:shadow-lg">
          View Dashboard
        </button>
        <button type="button" onClick={() => {
          console.log('BUTTON CLICKED');
          
          navigate("/addUser")}} className="bg-white mt-5 px-8 py-2 rounded-md text-center font-semibold transition-all duration-300 ease-in-out  hover:bg-black hover:text-white  hover:scale-110 hover:shadow-lg">
          + Add Customer
        </button>
        <button onClick={() => {navigate("/search-user")}} className="transition ease-in-out duration-300 bg-white mt-5 px-8 py-2 rounded-md text-center font-semibold hover:bg-black hover:text-white  hover:scale-110 hover:shadow-lg">
          Search Customer
        </button>
        <footer className="mt-40 text-white">
          <p>©2026 Cable Network Management System.</p>
          <p>Developed by Tejas</p>
        </footer>
      </div>
    </div>
  );
}

export default Welcome;
