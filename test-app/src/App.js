import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Produce from "./components/pages/product";
import ContactUs from "./components/pages/contact";
import Homage from "./components/pages/hompage"

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      
    <Route path="/" element={<Homage />}></Route>
    <Route path="/product" element={<Produce />}></Route>
    <Route path="/contact" element={<ContactUs />}> </Route>
      
      
    </Routes>
  </BrowserRouter>
)};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
















