import React from "react";
import { useSelector } from "react-redux";
import LeftNavBar from "../../components/left-side-nav";
import NavBar from "../../components/navigation";
import InfoSidebar from "../../components/InfoSidebar";

export default function Home() {
  const { showInfoSidebar } = useSelector((state) => state.components);

  return (
    <div>
      <LeftNavBar />
      <NavBar />
      <InfoSidebar
        style={{ display: showInfoSidebar === true ? "block" : "none" }}
      />
    </div>
  );
}
