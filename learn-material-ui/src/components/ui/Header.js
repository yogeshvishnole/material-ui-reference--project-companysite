import React, { useState, useEffect } from "react";
import {
   AppBar,
   Toolbar,
   Tabs,
   Tab,
   Button,
   Menu,
   MenuItem,
   SwipeableDrawer,
   useMediaQuery,
   IconButton,
   List,
   ListItem,
   ListItemText,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Logo from "../../assets/logo.svg";

function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
   const classes = useStyles();
   const theme = useTheme();
   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
   const matches = useMediaQuery(theme.breakpoints.down("sm"));

   const [anchorEl, setAnchorEl] = useState(null);
   const [openMenu, setOpenMenu] = useState(false);

   const [openDrawer, setOpenDrawer] = useState(false);

   const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
      setOpenMenu(true);
   };

   const handleClose = () => {
      setAnchorEl(null);
      setOpenMenu(false);
   };

   const handleChange = (e, newValue) => {
      setValue(newValue);
   };

   const handleMenuItemClick = (e, i) => {
      setAnchorEl(null);
      setOpenMenu(false);
      setSelectedIndex(i);
   };

   const routes = [
      { name: "Home", link: "/", activeIndex: 0 },
      {
         name: "Services",
         link: "/services",
         activeIndex: 1,
         ariaOwns: anchorEl ? "simple-menu" : undefined,
         ariaHaspopup: anchorEl ? "true" : undefined,
         onMouseOver: handleClick,
      },
      {
         name: "The Revolution",
         link: "/revolution",
         activeIndex: 2,
      },
      { name: "About us", link: "/about", activeIndex: 3 },
      { name: "Contact us", link: "/contact", activeIndex: 4 },
   ];

   useEffect(() => {
      [...routes, ...menuOptions].forEach((route) => {
         switch (window.location.pathname) {
            case `${route.link}`:
               if (value !== route.activeIndex) {
                  setValue(route.activeIndex);
                  if (
                     route.selectedIndex &&
                     route.selectedIndex !== selectedIndex
                  ) {
                     setSelectedIndex(route.selectedIndex);
                  }
               }
               break;
            default:
               break;
         }
      });
   }, [value, selectedIndex, routes, setValue, setSelectedIndex]);

   const tabs = (
      <React.Fragment>
         <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabContainer}
            indicatorColor="primary"
         >
            {routes.map((route, index) => (
               <Tab
                  key={`${route}${index}`}
                  className={classes.tab}
                  component={Link}
                  label={route.name}
                  to={route.link}
                  aria-owns={route.ariaOwns}
                  aria-haspopup={route.ariaHaspopup}
                  onMouseOver={route.onMouseOver}
               />
            ))}
         </Tabs>
         <Button
            variant="contained"
            color="secondary"
            className={classes.button}
         >
            Free Estimate
         </Button>
         <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
            classes={{ paper: classes.menu }}
            elevation={0}
            style={{ zIndex: 1302 }}
            keepMounted
         >
            {menuOptions.map((option, i) => (
               <MenuItem
                  key={`${option}${i}`}
                  onClick={(e) => {
                     handleClose();
                     setValue(1);
                     handleMenuItemClick(e, i);
                  }}
                  selected={i === selectedIndex && value === 1}
                  classes={{ root: classes.menuItem }}
                  component={Link}
                  to={option.link}
               >
                  {option.name}
               </MenuItem>
            ))}
         </Menu>
      </React.Fragment>
   );

   const drawer = (
      <React.Fragment>
         <SwipeableDrawer
            classes={{ paper: classes.drawer }}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
         >
            <div className={classes.toolbarMargin}></div>
            <List>
               {routes.map((route) => (
                  <ListItem
                     key={`${route}${route.activeIndex}`}
                     onClick={() => {
                        setOpenDrawer(false);
                        setValue(route.activeIndex);
                     }}
                     divider
                     button
                     component={Link}
                     to={route.link}
                     selected={value === route.activeIndex}
                     classes={{ selected: classes.drawerItemSelected }}
                  >
                     <ListItemText
                        disableTypography
                        className={classes.drawerItem}
                     >
                        {route.name}
                     </ListItemText>
                  </ListItem>
               ))}

               <ListItem
                  onClick={() => {
                     setOpenDrawer(false);
                     setValue(5);
                  }}
                  divider
                  button
                  component={Link}
                  to="/estimate"
                  selected={value === 5}
                  classes={{
                     root: classes.drawerEstimateItem,
                     selected: classes.drawerItemSelected,
                  }}
               >
                  <ListItemText
                     disableTypography
                     className={classes.drawerItem}
                  >
                     Free estimate
                  </ListItemText>
               </ListItem>
            </List>
         </SwipeableDrawer>
         <IconButton
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple
            className={classes.drawerIconContainer}
         >
            <MenuIcon className={classes.drawerIcon} />
         </IconButton>
      </React.Fragment>
   );

   return (
      <React.Fragment>
         <AppBar className={classes.appbar}>
            <Toolbar disableGutters>
               <Button
                  component={Link}
                  to="/"
                  className={classes.logoContainer}
                  onClick={() => setValue(0)}
                  disableRipple
               >
                  <img src={Logo} className={classes.logo} alt="Company logo" />
               </Button>
               {matches ? drawer : tabs}
            </Toolbar>
         </AppBar>
         <div className={classes.toolbarMargin} />
      </React.Fragment>
   );
}

const useStyles = makeStyles((theme) => ({
   toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3em",
      [theme.breakpoints.down("md")]: {
         marginBottom: "2em",
      },
      [theme.breakpoints.down("xs")]: {
         marginBottom: "1.25em",
      },
   },
   tabContainer: {
      marginLeft: "auto",
   },
   tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
   },
   button: {
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
   },
   logoContainer: {
      padding: 0,
      // marginLeft: "7rem",
   },
   menu: {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      borderRadius: "0px",
   },
   logo: {
      height: "8em",
      [theme.breakpoints.down("md")]: {
         height: "7em",
      },
      [theme.breakpoints.down("xs")]: {
         height: "5.5em",
      },
   },
   menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      "&:hover": {
         opacity: 1,
      },
   },
   drawerIcon: {
      height: "50px",
      width: "50px",
   },
   drawerIconContainer: {
      marginLeft: "auto",
      "&:hover": {
         backgroundColor: "transparent",
      },
   },
   drawer: {
      backgroundColor: theme.palette.common.blue,
   },
   drawerItem: {
      ...theme.typography.tab,
      color: "white",
      opacity: 0.7,
   },
   drawerItemSelected: {
      "& .MuiListItemText-root": {
         opacity: 1,
      },
   },
   drawerEstimateItem: {
      backgroundColor: theme.palette.common.orange,
   },
   appbar: {
      zIndex: theme.zIndex.modal + 1,
   },
}));

const menuOptions = [
   { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
   {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
   },
   {
      name: "Mobile App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
   },
   {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
   },
];

export default Header;
