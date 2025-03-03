import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/profile/Profile";
import Home from "./pages/posts/Home";
import CreatePost from "./pages/posts/CreatePost";
import Orders from "./pages/cart/CartDetails";
import ProfileEdit from "./pages/profile/ProfileEdit";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import UnProtectedRoute from "./components/protectedRoute/UnprotectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnProtectedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="posts/create" element={<CreatePost />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
