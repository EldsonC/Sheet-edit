import { Routes, Route } from "react-router-dom"
import { Dashboard } from "../app/dashboard";
import { Header } from "../components/app/header";

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

            <Route path="/note" element={
                <>
                    <Header/>
                </>
            }/>
        </Routes>
    );
};