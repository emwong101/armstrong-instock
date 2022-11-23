import "./App.css";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import AddWarehouse from "./components/sections/addWarehouse/AddWarehouse";
import { WarehouseDetailsComponent } from "./components/sections/warehouseDetails/WarehouseDetailsComponent";

function App() {
  return (
    <>
      <Header />
      <WarehouseDetailsComponent />
      <AddWarehouse />
      <Footer />
    </>
  );
}
export default App;
