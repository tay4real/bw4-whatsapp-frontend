import React from "react";
import LeftNavBar from "../../components/left-side-nav";
import NavBar from "../../components/navigation";
import Chat from "../../components/chat";

export default function Home() {
  return (
    <div>
      <LeftNavBar />
      <NavBar />
      <Chat />
    </div>
  );
}
