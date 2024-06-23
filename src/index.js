import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/home/Home";
import {persistor, store} from "./redux/store/store";
import element from './element/element';
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";
import Auth from "./component/auth/Auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider  store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<App/>}>
                          <Route index element={<Auth><Home /></Auth>}/>
                          {element?.list_user_route.map((route, index) => {
                              if (route.isProtected) {
                                  return (<Route key={index}
                                         path={route.path}
                                         element={<Auth>{route.component}</Auth>}
                                      />
                                  );
                              }
                          })}
                          {element?.list_route_public.map((route, index) => {
                              if (route.isProtected) {
                                  return (<Route key={index}
                                          path={route.path}
                                          element={<Auth>{route.component}</Auth>}
                                      />
                                  );
                              }
                          })}
                          {element?.list_route_in_dropdown.map((route, index) => {
                              if (route.isProtected) {
                                  return (<Route key={index}
                                          path={route.path}
                                          element={<Auth>{route.component}</Auth>}
                                      />
                                  );
                              }
                          })}
                          <Route path="/login" element={<Login/>}/>
                          <Route path="/sign-up" element={<Signup/>}/>
                      </Route>
                  </Routes>
              </BrowserRouter>
          </PersistGate>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
