import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-fit text-white">
            <Header />
            <div className="lg:max-w-5xl max-w-sm mx-auto text-center my-52 flex flex-col gap-y-5">
                <h1 className="text-7xl font-black text-white">Oops!</h1>
                <p className="text-xl font-bold">404 - Page Not Found</p>
                <div className="lg:max-w-md max-w-xs mx-auto">
                    <p className="text-lg italic">
                        The page you are looking for might have been removed,
                        had it's name changed or is unavailable
                    </p>
                    <button
                        onClick={() => navigate("/")}
                        className="m-4 bg-blue-700 py-3 px-6 rounded-3xl text-md font-semibold transition-all hover:scale-110 duration-200 ease-in-out hover:bg-blue-950"
                    >
                        Back to home
                    </button>
                </div>
            </div>
            <footer className="mt-20 lg:mt-40 text-white text-center mb-2">
                <p>©2026 Cable Network Management System.</p>
                <p>Developed by Tejas</p>
            </footer>
        </div>
    );
};

export default NotFound;
