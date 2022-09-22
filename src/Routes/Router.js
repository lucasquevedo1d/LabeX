import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import HomePage from "../pages/HomePage/HomePage"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage"
import ApplicationPage from "../pages/ApplicationPage/ApplicationPage"
import TripListPage from "../pages/TripListPage/TripListPage"
import TripDetailPage from "../pages/TripDetailPage/TripDetailPage"

export const Router = ({rigthButtontext, setRigthButtonText}) =>{
    return(
        
        <Routes>
            <Route index element={ <HomePage/>}></Route>
            <Route path="/login" element={<LoginPage rigthButtontext={rigthButtontext} setRigthButtonText={setRigthButtonText}/>}/>
            <Route path="/createTrip" element={<CreateTripPage/>}/>
            <Route path="/application" element={<ApplicationPage/>}/>
            <Route path="/tripList" element={<TripListPage/>}/>
            <Route path="/tripDetail/:id" element={<TripDetailPage/>}/>
        </Routes>
        
    )
}