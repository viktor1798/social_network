import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login/login";
import MainContent from "./main-content/maincontent";
import SideBar from "./sidebar/sicdebar";
import main_block from "./style/mainblok.module.css";

const MainBlock = () => {
  return (
    <main className={main_block.mainblock}>
      <SideBar />
      <MainContent />
    </main>
  );
};

export default MainBlock;
