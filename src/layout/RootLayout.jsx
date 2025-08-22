import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

export default function RootLayout() {
    return(
        <>
            <NavBar/>
            <Outlet />
        </>
    )
}