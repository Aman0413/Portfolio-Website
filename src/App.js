import "./App.css";
import AboutMe from "./components/aboutme/AboutMe";
import Education from "./components/education/Education";

import Navbar from "./components/Navbar/Navbar";
import React, { useEffect } from "react";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";

import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Provider, useSelector } from "react-redux";
import store from "./components/redux/store";
import AddProject from "./components/addProject/AddProject";
import { Route, Routes } from "react-router";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ShowProject from "./components/showProject/ShowProject";
import UpdateProject from "./components/updateproject/UpdateProject";
import DeleteProject from "./components/deleteproject/DeleteProject";
import Admin from "./components/admin/Admin";
import Login from "./components/login/Login";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  // const state = useSelector((state) => state.admin);
  return (
    <div data-aos="fade-down" className="App">
      <Provider store={store}>
        <Routes>
          <Route
            path={`admin${process.env.REACT_APP_ADD}`}
            element={<AddProject />}
          />
          <Route
            path={`admin${process.env.REACT_APP_SHOW}`}
            element={<ShowProject />}
          />
          <Route
            path={`admin${process.env.REACT_APP_UPDATE}`}
            element={<UpdateProject />}
          />
          <Route
            path={`admin${process.env.REACT_APP_DELETE}`}
            element={<DeleteProject />}
          />
          <Route path={process.env.REACT_APP_ADMIN} element={<Admin />} />
          <Route
            path={`admin${process.env.REACT_APP_ADMIN_LOGIN}`}
            element={<Login />}
          />
          <Route
            path="/"
            element={[
              <Navbar />,
              <AboutMe />,
              <Project />,
              <Education />,
              <Skills />,
              <Contact />,
              <Footer />,
            ]}
          />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
