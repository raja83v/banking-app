import { useState } from "react";
import "@ui5/webcomponents-fiori/dist/SideNavigation";
import "@ui5/webcomponents-fiori/dist/SideNavigationItem";
import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem";
import "@ui5/webcomponents-icons/dist/group.js";
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-icons/dist/list.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { CustomerList } from "./pages/CustomerList";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/detail");
  };
  const handleCustomerListClick = () => {
    navigate("/customerlist");
  };

  return (
    <div className="sideNav">
      <ui5-side-navigation>
        <ui5-side-navigation-item
          text="Dashboard"
          icon="home"
          onClick={handleHomeClick}
        ></ui5-side-navigation-item>
        <ui5-side-navigation-item text="Customers" expanded icon="group">
          <ui5-side-navigation-sub-item
            text="List"
            icon="list"
            onClick={handleCustomerListClick}
          ></ui5-side-navigation-sub-item>
          <ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>
        </ui5-side-navigation-item>
        <ui5-side-navigation-item
          text="Locations"
          icon="locate-me"
          selected
        ></ui5-side-navigation-item>
        <ui5-side-navigation-item text="Events" icon="calendar">
          <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
          <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
        </ui5-side-navigation-item>

        <ui5-side-navigation-item
          slot="fixedItems"
          text="Useful Links"
          icon="chain-link"
        ></ui5-side-navigation-item>
        <ui5-side-navigation-item
          slot="fixedItems"
          text="History"
          icon="history"
        ></ui5-side-navigation-item>
      </ui5-side-navigation>
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/customerlist" element={<CustomerList />} />
      </Routes>
    </div>
  );
}

export default App;
