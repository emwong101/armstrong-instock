import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import Inventory from "./pages/Inventory";
import Warehouse from "./pages/Warehouse";



function App() {
  const [inventoryItem, setInventoryItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/inventory/9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3/`
        );
        setInventoryItem(data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      <Header />
      <div className="components">
        <BrowserRouter>
          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/warehouse" element={<Warehouse />}/>
          </Routes>
        </BrowserRouter>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
