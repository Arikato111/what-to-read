import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AllBook from "./AllBook";
import Notfound from "./Notfound";
import SingleBook from "./SingleBook";
import { FC } from "react";

const Routing: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/books" element={<AllBook />} />
        <Route path="/:bookname" element={<SingleBook />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default Routing