import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/profile";
import ProfileEdit from "./features/profile/ProfileEdit";
import CartDetails from "./features/cart/CartDetails";
import ConfirmOrder from "./features/cart/ConfirmOrder";
import CustomerHistory from "./features/history/CustomerHistory";
import CartHistory from "./features/history/CartHistory";
import SellerHistory from "./features/history/SellerHistory";
import Home from "./pages/home";
import CreatePost from "./features/posts/CreatePost";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import UnProtectedRoute from "./components/protectedRoute/UnprotectedRoute";
import Layout from "./components/layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnProtectedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<CartDetails />} />
            <Route path="/orders/confirm" element={<ConfirmOrder />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/posts/create" element={<CreatePost />} />
            <Route path="/orders/history" element={<CartHistory />} />
            <Route path="/orders/history/customer" element={<CustomerHistory />} />
            <Route path="/orders/history/sellers" element={<SellerHistory />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
