import { Routes, Route } from "react-router-dom";
import {AddDestination} from "../Pages/AddDestination";

import Home from "../Pages/Home";
import Destinations from "../Pages/Destinations";
import DestinationDetails from "../Pages/DestinationDetails";
import EditDestination from "../Pages/EditDestination";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import ProtectedRoute from "./ProtectedRoute";
import Favorites from "../Pages/Favorites";
function AppRoutes() {
 return (
   <Routes>
     <Route
       path="/"
       element={<Home />}
     />

     <Route
       path="/destinations"
       element={<Destinations />}
     />

     <Route
       path="/destinations/:id"
       element={<DestinationDetails />}
     />
     <Route
 path="/add-destination"
 element={
    <ProtectedRoute>
      <AddDestination />
    </ProtectedRoute>
  }

/>
<Route
 path="/edit-destination/:id"
 element={<EditDestination />}
/>
<Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/logout"
  element={<Logout />}
/>

<Route
  path="/favorites"
  element={<Favorites />}
/>

   </Routes>
 );
}

export default AppRoutes;