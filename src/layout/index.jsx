import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Import Layout components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Div = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

function Layout() {
    return (
      <Div>
        <Header />
        <Outlet />
        <Footer />
      </Div>
    );
  }

export default Layout;