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

function App() {
  var no1 = 10;
  var name = "samir";
  var isActive = true;

  var style = {
    color: "red",
  };

  return (
    <div className="App">
      {/* <Student/> */}
      {/* <Counter/> */}
      {/* <Navbar /> */}

      <Routes>
      
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact/manager"  element={<Manager/>} />
        <Route path="/about/info/:id" element= {<Info/>} />
        <Route path="/*" element={<h1>404</h1>}/>
        
      </Routes>

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
  );
}

export default App;
