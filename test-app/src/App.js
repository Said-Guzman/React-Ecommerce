import ReactDOM from "react-dom/client";

// making sure the routes are all correct
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Produce from "./components/pages/product";
import ContactUs from "./components/pages/contact";
import Homage from "./components/pages/hompage"



export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      {/* double check everything is correct because it can be buggy */}
    <Route path="/" element={<Homage />}></Route>
    <Route path="/product" element={<Produce />}></Route>
    <Route path="/contact" element={<ContactUs />}> </Route>
    </Routes>
  </BrowserRouter>
)};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
















