import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import ContextApp from "../../context";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { FirstPage, SecondPage } from "../../components/page-blocks";

import "./dashboard.scss";

const items = {
  isAllSelected: false,
  list: new Array(20001).fill(false),
};
const routes = [
  { path: "/page1", label: "Page 1", component: FirstPage },
  { path: "/page2", label: "Page 2", component: SecondPage },
  { path: "/page3", label: "Page 3", component: Footer },
];

const getCurrentPageLabel = (currentPath) =>
  routes
    .filter(({ path }) => currentPath === path)
    .map(({ label }) => label)
    .join();

const Dashboard = () => {
  const {
    location: { pathname },
  } = useHistory();
  const [currentPage, setCurrentPage] = useState(getCurrentPageLabel(pathname));
  const [itemsInfo, updateItemsInfo] = useState(items);

  return (
    <div className="dashboard">
      <Header currentPage={currentPage || "Page 1"} />
      <div className="container">
        <div className="dashboard__main-content">
          <ContextApp.Provider value={{ itemsInfo, updateItemsInfo }}>
            <Router>
              <Sidebar
                names={routes}
                link={Link}
                clickHandler={setCurrentPage}
                currentPage={currentPage}
              />
              <Switch>
                <Route exact path="/">
                  <FirstPage />
                </Route>
                {routes.map((item, i) => (
                  <Route key={i} {...item} />
                ))}
              </Switch>
            </Router>
          </ContextApp.Provider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
