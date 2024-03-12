import React from "react";
import { AppItem } from "../../../models/AppItem";

interface AppListItemProps {
  app: AppItem;
}

const AppListItem: React.FC<AppListItemProps> = ({ app }) => {
  return (
    <div className="app-container">
      <div className="app-header-image-container">
        <img className="app-header-image" src={app.headerImage} alt="" />
      </div>
      <h5>{app.title}</h5>
    </div>
  );
};

export default AppListItem;
