import ScrollToTop from "@/components/Base/ScrollToTop";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import Router from "./router";
import "./assets/css/app.css";
import { ToastContainer } from "react-toastify";
import "@react-sigma/core/lib/react-sigma.min.css";
import 'react-toastify/dist/ReactToastify.css';
import './api/axios';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
    <ToastContainer />
    <ScrollToTop />
  </BrowserRouter>
);
