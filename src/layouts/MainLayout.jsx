import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const MainLayout = () => {
    const {loading} = useContext(AuthContext);
    
    if(loading){
        return <Loading></Loading>
    };

    return (
        <div>
            <Navbar></Navbar>
            <section className="min-h-[calc(100vh-340px)]">
            <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;