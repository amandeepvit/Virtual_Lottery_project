import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Login from "./component/forms/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
