import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../Page/Home";
import ErrorPage from "../Page/ErrorPage";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import TicketSearchPage from "../Page/TicketSearchPage";
import TicketBooking from "../Page/TicketBooking";
import Ticket from "../Page/Ticket";
import CheckoutPage from "../Page/CheckOutPage";
import Admin from "../Admin/Admin";
import AdminLogin from "../Admin/AdminLogin";
import AddAirline from "../Admin/AddAirline";
import AddFlight from "../Admin/AddFlight";
// import VerifyTicket from "../Admin/VerifyTicket";
import VerifyTicketAdmin from "../Components/VerifyTicketAdmin";
import Profile from "../Page/Profile";

// ProtectedRoute component to handle admin-only routes
// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   return isAdmin ? <Element {...rest} /> : <Navigate to="/" replace />;
// };

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ticket/:ticketId" element={<Ticket />} />
        <Route path="/book/:id" element={<TicketBooking />} />
        <Route path="/search" element={<TicketSearchPage />} />
        <Route path="/checkout-page" element={<CheckoutPage />} />
        
         <Route path="/admin" element={<Admin/>} />
        x
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admin/add-airline" element={<AddAirline />} />
        <Route path="/admin/add-flight" element={<AddFlight />} />
        
        {/* <Route path="/admin/verify-ticket" element={<VerifyTicket />} /> */}
        
        {/* <Routes
          path="/verify-ticket/:ticketId"
          element={<VerifyTicketAdmin />}
        /> */}

        {/* Fallback route for unknown paths */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;