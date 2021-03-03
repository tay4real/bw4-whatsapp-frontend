import React from "react";
import Chat from "../../components/chat";
import LeftNavBar from "../../components/left-side-nav";
import NavBar from "../../components/navigation";

export default function Home() {
  return (
    <div>
      <LeftNavBar />
      <NavBar />
      <Chat />
    </div>
  );
}
