import "./App.css";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/footer";
import AddWarehouse from "./Components/sections/addWarehouse/addWarehouse";
import { WarehouseDetailsComponent } from "./Components/sections/Warehouse-Details/WarehouseDetailsComponent";

function App() {
  return (
    <>
    <Header />
      <AddWarehouse />
      <WarehouseDetailsComponent />
      <Footer />
    </>
  );
  }
export default App;
