import React from "react";
import AddWarehouse from "../components/sections/addWarehouse/AddWarehouse";
import EditWarehouse from "../components/sections/editWarehouse/EditWarehouse";
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
      {showList && (
        <WarehouseList
          setDisplayAdd={setDisplayAdd}
          setDisplayEdit={setDisplayEdit}
          setShowDetails={setShowDetails}
          setShowList={setShowList}
        />
      )}
      {displayAdd && (
        <AddWarehouse setDisplayAdd={setDisplayAdd} setShowList={setShowList} />
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
    </>
  );
};

export default Warehouse;
