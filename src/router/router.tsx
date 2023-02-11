import { Routes, Route } from "react-router-dom"
import { Dashboard } from "../app/dashboard";
import { Header } from "../components/app/header";
import { Sidebar } from "../components/app/sidebar";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Header/>
                    <Dashboard/>
                    {/* <Sidebar/> */}
                </>
            }/>
        </Routes>
    );
};