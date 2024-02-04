import { Route, Routes } from "react-router-dom";
import { SignIn } from "../Pages/Signin";
import { SignUp } from "../Pages/SignUp";



export const MainRoutes = () => {


    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    )
};