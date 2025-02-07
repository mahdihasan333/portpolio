import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#101736]">
            <Navbar />
            
            <div className='w-11/12 mx-auto min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            
            <Footer />
        </div>
    );
};

export default MainLayout;