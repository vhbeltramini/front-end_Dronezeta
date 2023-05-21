import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";
import StartScreen from "./StartScreen/StartScreen";
import HomeScreen from "./HomeScreen";
import ProductListScreen from "./ProductListScreen/ProductListScreen";
import CreateUser from "./CreateUser/CreateUser";
import CreateProduct from "./CreateProduct/CreateProduct";
import Cart from "./Cart/Cart";
import PaymentForm from "./PaymentForm/PaymentForm";
import AddressForm from "./AddressForm/AddressForm";
import UserProfile from "./UserProfile/UserProfile";
import UserManagement from "./UserManagement/UserManagement";
import DeleteProduct from "./DeleteProduct/DeleteProduct";
import MyOrders from "./MyOrders/MyOrders";

export default function DronezetaRoutes() {
    return (
      <div className="DronezetaRoutes">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductListScreen />}></Route>
            <Route path='/login' element={<LoginScreen />}></Route>
            <Route path='/inicio' element={<StartScreen />}></Route>
            <Route path='/products' element={<ProductListScreen />}></Route>
            <Route path='/createUser' element={<CreateUser />}></Route>
            <Route path='/createProduct' element={<CreateProduct />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/userManagement' element={<UserManagement />}></Route>
            <Route path='/deleteProduct' element={<DeleteProduct />}></Route>
            <Route path='/my-orders' element={<MyOrders />}></Route>
            <Route path='/paymentForm' element={<PaymentForm />}></Route>
            <Route path='/addressForm' element={<AddressForm />}></Route>
            <Route path='/userProfile' element={<UserProfile />}></Route>

            <Route path='*' element={<ProductListScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )}
 