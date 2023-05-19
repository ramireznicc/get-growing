import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import products from "../../data/products.json";

import "./NavBar.css";

export const NavBar = () => {
  const [itemsMenu, setItemsMenu] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => resolve(products));
    productList.then((result) => {
      const categories = result.map((item) => item.category);
      const uniqueCategory = new Set(categories);

      setItemsMenu(Array.from(uniqueCategory));
    });
  }, []);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              pl: "20px",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon className="NavBar--icon" icon={faLeaf} />
            <NavLink to="/">
              <h2 className="NavBar--h2">getGrowing</h2>
            </NavLink>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {itemsMenu.map((item) => (
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "1.2rem",
                    letterSpacing: ".2rem",
                  }}
                  key={item}
                  onClick={handleCloseNavMenu}
                >
                  <NavLink to={`/category/${item}`}>{item}</NavLink>
                </MenuItem>
              ))}
            </Menu>
            <Box sx={{ display: "flex", alignItems: "center", px: "16px" }}>
              <CartWidget />
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "flex-end",
            }}
          >
            <NavLink to="/">
              <h2 className="NavBar--h2">getGrowing</h2>
            </NavLink>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <ul className="NavBar--ul">
              {itemsMenu.map((item) => (
                <li key={item}>
                  <NavLink to={`/category/${item}`}>{item}</NavLink>
                </li>
              ))}
              <li>
                <CartWidget />
              </li>
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
