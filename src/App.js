import "./App.scss";
import { Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Warehouse />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:inventoryID" element={<Inventory />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="warehouse/:warehouseID" element={<Warehouse />} />
          <Route
            path="*"
            element={
              <>
                <h1>Page not found</h1>
              </>
            }
          />
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
