import { Route, Routes,BrowserRouter as Router, useNavigate } from "react-router-dom";
import "./index.css";
import MainPage from "./components/MainPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Thankyou from "./components/Thankyou";
import OnlineValuation from "./components/OnlineValuation";
function App() {
  return (
     <>
     <Router>
      <Routes>
           
            <Route path="/" element={<OnlineValuation />} />
           
            </Routes>
    </Router>
     </>
    
  );
}
export default App;
