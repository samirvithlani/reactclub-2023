import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import Footer from "./Footer";
import { Employee } from "./components/Employee";
import { AddProduct } from "./components/AddProduct";
import { Student } from "./components/Student";
import { Test } from "./components/Test";
import City from "./components/CityStateDropDown";
import { Counter } from "./hooks/Counter";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { ContactUs } from "./Pages/ContactUs";
import { Manager } from "./Pages/Manager";
import { Info } from "./Pages/Info";
import { Ceo } from "./Pages/Ceo";
import { UserList } from "./api/UserList";

import { UserApi } from "./query/UserApi";
import { AddUser } from "./query/AddUser";
import { LoginUser } from "./components/LoginUser";
import ProtectedRoutes from "./ProtecctedRoutes";
import { AddExp } from "./expense/AddExp";
import { AppContext } from "./context";
import { EcomNavbar } from "./ecom/EcomNavbar";
import { DashBoard } from "./ecom/DashBoard";
import { CartDetail } from "./ecom/CartDetail";
import { Sidebar } from "./pms/Sidebar";
import { UploadDemo } from "./components/UploadDemo";
import { MuiDemo1 } from "./mui/MuiDemo1";

function App() {
  var no1 = 10;
  var name = "samir";
  var isActive = true;

  var style = {
    color: "red",
  };
  const id = 12;

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">

        {/* <Student/> */}
        {/* <Counter/> */}
        {/* <Navbar /> */}
        {/* <EcomNavbar/> */}
        <Sidebar />
        <div className="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
            <AppContext.Provider value={{ id }}>
              <Routes>
                <Route element={<ProtectedRoutes />}>
                  <Route path="/home" element={<DashBoard />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  
                </Route>
                  <Route path="/upload" element={<UploadDemo/>}></Route>
                  <Route path="/mui" element={<MuiDemo1/>}></Route>
                <Route path="/addexp" element={<AddExp />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<LoginUser />} />
                <Route path="/contact/manager" element={<Manager />} />
                <Route path="/ceo" element={<Ceo />} />
                <Route path="/about/info/:id" element={<Info />} />
                {/* <Route path="/*" element={<h1>404</h1>} /> */}
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/userlist" element={<UserList />} />
                <Route path="/userapi" element={<UserApi />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route
                  path="/cart/cartdetail/:id"
                  element={<CartDetail />}
                ></Route>
              </Routes>
            </AppContext.Provider>
          </div>
        </div>

        {/* <Employee/> */}
        {/* <AddProduct/> */}

        {/* <h1 style={style}>APP</h1> */}
        {/* <h1>
        Name = {name}
      </h1>
      <h2>
        No1 = {no1}
      </h2>
      <h3>
        isActive = {
          isActive ? "Yes" : "No"
        }
      </h3> */}
        {/* <Header/>
      <Footer/> */}
      </div>
    </div>
  );
}

export default App;
