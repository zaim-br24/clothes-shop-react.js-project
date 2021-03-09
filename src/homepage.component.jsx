import React from "react";
import "./homepage.style.scss";
import MenuItem from "./menu.component";
const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <MenuItem title="HATS" subtitle="SHOP NOW" />
      <MenuItem title="JAKETS" subtitle="SHOP NOW" />
      <MenuItem title="SKEANES" subtitle="SHOP NOW" />
      <MenuItem title="WOMANS" subtitle="SHOP NOW" />
      <MenuItem title="MANS" subtitle="SHOP NOW" />
    </div>
  </div>
);

export default HomePage;
