import { Routes,Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import PatientPage from "../Pages/PatientPage";

function Mainroutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage />} />  
            <Route path="/patient" element={<PatientPage />} />

        </Routes>

        </>
    )
}
export default Mainroutes