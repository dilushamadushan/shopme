import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function RootLayout() {
  return (
    <>
    <div className="flex flex-1 overflow-hidden hide-scrollbar">
        <SideBar />
        <main className="flex-1 p-6 bg-gray-50 mt-1 ml-2 overflow-y-auto hide-scrollbar">
        <Outlet />
        </main>
        </div>
    </>
  )
}
