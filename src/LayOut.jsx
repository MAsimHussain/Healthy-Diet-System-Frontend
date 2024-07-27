import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";

export default function LayOut() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
