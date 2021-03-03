import React from "react";
import { useSelector } from "react-redux";
import LeftNavBar from "../../components/left-side-nav";
import NavBar from "../../components/navigation";

export default function Home() {
  const { showInfoSidebar } = useSelector((state) => state.components);
  const toggle;
  return (
    <div>
      <LeftNavBar />
      <NavBar />
    </div>
  );
}
