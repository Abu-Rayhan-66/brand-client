import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" flex flex-col items-center  justify-center h-[100vh]">
        <h2 className="text-4xl md:text-6xl">Oops!!!</h2>
        <h2 className="text-4xl md:text-6xl">This page is not Found</h2>
        <NavLink to="/"><button className="bg-red-500 px-6 py-2 rounded-3xl text-white font-semibold mt-6 ">Go To Home</button></NavLink>
    </div>
    );
};

export default ErrorPage;