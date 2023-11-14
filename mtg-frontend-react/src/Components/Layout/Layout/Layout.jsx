import {Outlet} from "react-router-dom";
import {Footer, Navbar} from "../index.js";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
