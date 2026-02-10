import { useState } from "react";
import hamburger from "../assets/hamburger.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between bg-transparent p-2">
        <button onClick={() => setShow(!show)}>
          <img className="size-10 rounded-full" src={hamburger} alt="hamburger" />
        </button>
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
          ${show
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"}
        `}
        style={{ transformOrigin: "top" }}
      >
        <button className="border border-t-0 border-r-0 border-l-0 w-full text-start" onClick={() => navigate('/')}>Home</button>
        <button className="border border-t-0 border-r-0 border-l-0 w-full text-start" onClick={() => navigate('/')}>Dashboard</button>
        <button className="border border-t-0 border-r-0 border-l-0 w-full text-start" onClick={() => navigate('/addUser')}>Add Customer</button>
        <button className="border border-t-0 border-r-0 border-l-0 w-full text-start" onClick={() => navigate('/search-user')}>Search</button>
      </div>
    </div>
  );
};

export default Header;
