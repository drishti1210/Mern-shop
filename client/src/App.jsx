import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile"
import Cart from "./pages/Cart";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductAdmin from "./pages/product/ProductAdmin";
import ProductListAdmin from "./pages/productList/ProductListAdmin";
import NewProduct from "./pages/newProduct/NewProduct";


const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/success" element={<Success />} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/profile" element={user ? <Profile /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
  
                <Route exact path="/admin" element={<HomePage/>}/>
                <Route path="/admin/users" element={<UserList />}/>
                  
                
                <Route path="/admin/user/:userId" element={<User />}/>
                  
               
                <Route path="/admin/newUser" element={<NewUser />}/>
                  
               
                <Route path="/admin/products" element={<ProductListAdmin />}/>
                  
                
                <Route path="/admin/product/:productId" element={ <ProductAdmin />}/>
                 
                
                <Route path="/admin/newproduct" element={<NewProduct />}/>
                </Routes>
 
                  
     
    </Router>
  );
};

export default App;
