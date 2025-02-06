import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#302b44]">
            <Navbar />
            <div className='w-11/12 mx-auto min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            <h1 className="text-3xl font-bold text-[#F4A261] ">Mahdi</h1>
            <Footer />
        </div>
    );
};

export default MainLayout;