import React from "react";
import "./Pages.scss";
import AddWarehouse from "../components/sections/addWarehouse/AddWarehouse";
import EditWarehouse from "../components/sections/editWarehouse/EditWarehouse";
import Header from "../components/sections/header/Header";
import { WarehouseDetailsComponent } from "../components/sections/warehouseDetails/WarehouseDetailsComponent";
import { WarehouseList } from "../components/sections/warehouseList/WarehouseList";
import { useState } from "react";

const Warehouse = () => {
  const [displayAdd, setDisplayAdd] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showList, setShowList] = useState(true);

  return (
    <>
      <div className="main">
        <Header
          setShowList={setShowList}
          setDisplayAdd={setDisplayAdd}
          setShowDetails={setShowDetails}
          setDisplayEdit={setDisplayEdit}
        />
        <div className="components">
          {showList && (
            <WarehouseList
              setDisplayAdd={setDisplayAdd}
              setDisplayEdit={setDisplayEdit}
              setShowDetails={setShowDetails}
              setShowList={setShowList}
            />
          )}
          {displayAdd && (
            <AddWarehouse
              setDisplayAdd={setDisplayAdd}
              setShowList={setShowList}
            />
          )}
          {showDetails && (
            <WarehouseDetailsComponent
              setDisplayEdit={setDisplayEdit}
              setShowList={setShowList}
              setShowDetails={setShowDetails}
            />
          )}
          {displayEdit && (
            <EditWarehouse
              setDisplayEdit={setDisplayEdit}
              setShowList={setShowList}
              setShowDetails={setShowDetails}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Warehouse;
