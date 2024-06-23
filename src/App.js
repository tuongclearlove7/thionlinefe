import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Outlet} from "react-router-dom";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

function App() {

  const [title, setTitle] = useState('Team1StudyWithMe');

  useEffect(() => {
    document.title = title;
  }, []);

  return (
      <div className="App">
        <div className={"container"}>
          <div className={"header-app"}>
            <Header title={title}/>
          </div>
          <div className={"content-app"}>
            <Outlet></Outlet>
          </div>
          <div className={"footer-app"}>
            <Footer/>
          </div>
        </div>
        <ToastContainer/>
      </div>
  );
}

export default App;
