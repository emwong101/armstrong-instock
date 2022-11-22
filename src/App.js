import "./App.css";
import Header from "./components/header/Header";
import Footer from "./Components/footer/footer";
import AddWarehouse from "./components/sections/addWarehouse/addWarehouse";
import { WarehouseDetailsComponent } from "./components/sections/Warehouse-Details/WarehouseDetailsComponent";

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
