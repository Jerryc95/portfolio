import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../components/navBar/nav";
import { appItems } from "../../assets/appItems";
import AppListItem from "./appComponents/appListItem";
import './appPageStyles.css'

const AppPage: React.FC = () => {
  // const apps = [...appItems]
  return (
    <div>
      <Nav />
      <div className="app-page-container">
        <h2>Apps</h2>
        <p>Below you find all of the apps I've built</p>
        <div className="app-list-container">
          {appItems.map((app) => (
            <Link to={`/apps/${app.param}`} className="app-link">
              <AppListItem app={app} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppPage;
