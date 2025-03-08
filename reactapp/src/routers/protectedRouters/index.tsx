import { Route } from 'react-router-dom';
import ProtectedRoute from '../../components/protectedRoute/ProtectedRoute';
import Layout from '../../components/layout';
import Home from '../../features/posts/Home';
import ProfileLayout from '../../features/profile/ProfileLayout';
import Profile from '../../features/profile/Profile';
import ProfileEdit from '../features/profile/ProfileEdit';
import OrdersLayout from '../features/orders/OrdersLayout';
import CartDetails from '../features/orders/CartDetails';
import ConfirmOrder from '../features/orders/ConfirmOrder';
import CartHistory from '../features/orders/CartHistory';
import CustomerHistory from '../features/orders/CustomerHistory';
import SellerHistory from '../features/orders/SellerHistory';
import CreatePost from '../features/posts/CreatePost';

export default function ProtectedRoutes() {
  return (
    <Route element={<ProtectedRoute />}>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/create" element={<CreatePost />} />

        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route path="edit" element={<ProfileEdit />} />
        </Route>

        <Route path="/orders" element={<OrdersLayout />}>
          <Route index element={<CartDetails />} />
          <Route path="confirm" element={<ConfirmOrder />} />
          <Route path="history" element={<CartHistory />} />
          <Route path="history/customer" element={<CustomerHistory />} />
          <Route path="history/sellers" element={<SellerHistory />} />
        </Route>
      </Route>
    </Route>
  );
}
