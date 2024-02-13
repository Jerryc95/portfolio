import React from "react";
import { useParams } from "react-router-dom";

import { appItems } from "../../../assets/appItems";
import Nav from "../../../components/navBar/nav";
import ImageCarousel from "../../../components/imageCarousel/imageCarousel";
import appStoreLink from "../../../assets/apps/appImages/appStoreLink.png";

const AppDetailPage: React.FC = () => {
  const { app } = useParams();
  const foundApp = appItems.find((a) => a.param === app!)!;

  console.log(foundApp.images);

  return (
    <div>
      <Nav />
      <div className="app-details-container">
        <h3>{foundApp.title}</h3>
        <div className="app-details-image-container">
          <img
            className="app-details-image"
            src={foundApp.headerImage}
            alt=""
          />
        </div>
        <ul className="app-platforms-list">
          {foundApp.platforms.map((platform) => (
            <li>{platform}</li>
          ))}
        </ul>
        {foundApp.webLink && <p>{foundApp.webLink}</p>}
        {foundApp.appLink && (
          <a href={foundApp.appLink} target="_blank" rel="noopener noreferrer">
            <img className="app-store-link" src={appStoreLink} alt="" />
          </a>
        )}
        <p className="app-description">{foundApp.description}</p>
        <h4 className="app-details-sub-header">Features</h4>
        <ul className="app-features-list">
          {foundApp.features.map((feature) => (
            <li className="app-feature-item">{feature}</li>
          ))}
        </ul>
        <h4 className="app-details-sub-header">Privacy Policy</h4>
        <p className="app-privacy-policy">{foundApp.privacyPolicy}</p>
        {foundApp.images && (
          <div>
            <h4 className="app-details-sub-header">Images</h4>
            <ImageCarousel images={foundApp.images} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AppDetailPage;
