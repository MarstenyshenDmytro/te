import React, { useState, useReducer, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import {
  initialState,
  userAuthorization,
} from "../../reducers/userAuthorization";

import {
  successAuthorization,
  failedAuthorization,
} from "../../actions/userAuthorization";

import ContextApp from "../../context";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { FirstPage, SecondPage } from "../../components/page-blocks";
import Feedback from "../Feedback";

import "./dashboard.scss";

const items = {
  isAllSelected: false,
  list: new Array(20001).fill(false),
};

const routes = [
  { path: "/page1", label: "Page 1", component: FirstPage },
  { path: "/page2", label: "Page 2", component: SecondPage },
  { path: "/page3", label: "Page 3", component: Feedback },
];

const getCurrentPageLabel = (currentPath) =>
  routes
    .filter(({ path }) => currentPath === path)
    .map(({ label }) => label)
    .join();

const Dashboard = () => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(
    getCurrentPageLabel(history.location.pathname)
  );
  const [itemsInfo, updateItemsInfo] = useState(items);
  const [state, dispatch] = useReducer(userAuthorization, initialState);
  const { loading, failed } = state;

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    history.push("/signin");
  };

  useEffect(() => {
    if (loading) {
      sessionStorage.getItem("token")
        ? dispatch(successAuthorization())
        : dispatch(failedAuthorization());
    } else if (failed) {
      history.push("/signin");
    }
  }, [loading, failed, history]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Header currentPage={currentPage || "Page 1"} onClick={handleLogout} />
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
