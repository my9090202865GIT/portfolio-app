import React from "react";
import './App.css'
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
const navItems = ["About", "Contact", "Project", "Skills"];

function HiCounselor() {

  const [selectedMenuItem, setSelectedMenuItem] = React.useState("");
  const [minHeight] = React.useState(637);

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Box sx={{ display: { xs: "block" } }}>
            {navItems.map((item) => (
              <Link
                to={item === "About" ? "/" : `${item}`}
                key={item}
                className={selectedMenuItem === item ? "active" : "non-active"}
              >
                <Button
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => setSelectedMenuItem(e.currentTarget.innerText)}
                  sx={{ color: "#fff" }}
                >
                  {item}{" "}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: { minHeight },
        }}
      >
        <CssBaseline />
        <Box component="div" sx={{ justifyContent: "center", mt: "64px" }}>
          <Outlet />
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default HiCounselor;
