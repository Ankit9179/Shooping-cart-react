import { useState } from "react";
import "./App.css";
import Clist from "./components/Clist";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Routes, Route } from "react-router-dom";

function App() {
  const [clist, setClist] = useState([]);

  const addclist = (data) => {
    setClist([...clist, data]);
  };

  return (
    <>
      <Header count={clist.length} />
      <Routes>
        <Route path="/" element={<ProductList addclist={addclist} />} />
        <Route path="c-list" element={<Clist clist={clist} />} />
      </Routes>
    </>
  );
}

export default App;
