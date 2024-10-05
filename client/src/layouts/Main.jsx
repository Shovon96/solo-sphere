import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-306px)]">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;