import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import Footer from './Footer';
import { Employee } from './components/Employee';

function App() {
  var no1 = 10;
  var name = "samir"
  var isActive = true;

  var style = {
    color: "red",
  }

  return (
    <div className="App">

      <Employee/>


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
