import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function RootLayout() {
    return(
        <>
            <NavBar/>
            <Outlet />
            <Footer />
        </>
    )
}