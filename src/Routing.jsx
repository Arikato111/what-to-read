import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AllBook from "./AllBook";
import Notfound from "./Notfound";

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/books" element={<AllBook />} />
                <Route path="/" element={<App />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </Router>
    );
}
