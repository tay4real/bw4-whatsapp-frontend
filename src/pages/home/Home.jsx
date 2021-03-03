import React from "react";
import Chat from "../../components/chat";
import LeftNavBar from "../../components/left-side-nav";
import NavBar from "../../components/navigation";
import InfoSidebar from "../../components/InfoSidebar";

export default function Home() {
  return (
    <div>
      <LeftNavBar />
      <NavBar />
      <InfoSidebar />
      <Chat />
    </div>
  );
}
