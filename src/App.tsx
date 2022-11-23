import React, { useState, Suspense } from "react";
// import reactLogo from './assets/react.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
// import reactLogo from './assets/react.svg'
import "./App.css";
// import { router } from 'src/routes/index'
import { store } from "./store";
import { router } from "./routes";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
