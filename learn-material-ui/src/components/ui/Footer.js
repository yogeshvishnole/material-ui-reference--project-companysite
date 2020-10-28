import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

export default function Footer({ setValue, setSelectedIndex }) {
   const classes = useStyles();
   return (
      <footer className={classes.footer}>
         <Hidden smDown>
            <Grid container justify="center" className={classes.mainContainer}>
               <Grid item className={classes.gridItem}>
                  <Grid container direction="column" spacing={2}>
                     <Grid
                        item
                        component={Link}
                        to="/"
                        className={classes.link}
                        onClick={() => setValue(0)}
                     >
                        Home
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item className={classes.gridItem}>
                  <Grid container direction="column" spacing={2}>
                     <Grid
                        item
                        component={Link}
                        to="/services"
                        className={classes.link}
                        onClick={() => {
                           setValue(1);
                           setSelectedIndex(0);
                        }}
                     >
                        Services
                     </Grid>
                     <Grid
                        item
                        component={Link}
                        to="/customsoftware"
                        className={classes.link}
                        onClick={() => {
                           setValue(1);
                           setSelectedIndex(1);
                        }}
                     >
                        Custom Software Development
                     </Grid>
                     <Grid
                        item
                        component={Link}
                        to="/mobileapps"
                        className={classes.link}
                        onClick={() => {
                           setValue(1);
                           setSelectedIndex(2);
                        }}
                     >
                        Mobile App Development
                     </Grid>
                     <Grid
                        item
                        component={Link}
                        to="/websites"
                        className={classes.link}
                        onClick={() => {
                           setValue(1);
                           setSelectedIndex(2);
                        }}
                     >
                        Website Development
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item className={classes.gridItem}>
                  <Grid container direction="column" spacing={2}>
                     <Grid
                        item
                        component={Link}
                        to="/revolution"
                        className={classes.link}
                        onClick={() => setValue(2)}
                     >
                        The Revolution
                     </Grid>
                     <Grid
                        item
                        component={Link}
                        to="/revolution"
                        className={classes.link}
                        onClick={() => setValue(2)}
                     >
                        Vision
                     </Grid>
                     <Grid
                        item
                        component={Link}
                        to="/revolution"
                        className={classes.link}
                        onClick={() => setValue(2)}
                     >
                        Technology
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item className={classes.gridItem}>
                  <Grid container direction="column" spacing={2}>
                     <Grid
                        item
                        component={Link}
                        to="/about"
                        className={classes.link}
                        onClick={() => setValue(3)}
                     >
                        About Us
                     </Grid>
                     <Grid
                        item
                        component={Link}
                        to="/about"
                        className={classes.link}
                        onClick={() => setValue(3)}
                     >
                        History
                     </Grid>
                     <Grid
                        item
                        component={Link}
                        to="/about"
                        className={classes.link}
                        onClick={() => setValue(3)}
                     >
                        Team
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item className={classes.gridItem}>
                  <Grid container direction="column" spacing={2}>
                     <Grid
                        item
                        component={Link}
                        to="/contact"
                        className={classes.link}
                        onClick={() => setValue(4)}
                     >
                        Contact Us
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Hidden>

         <img
            alt="black decorative slash"
            className={classes.adornment}
            src={footerAdornment}
         />
         <Grid
            container
            justify="flex-end"
            spacing={2}
            className={classes.socialContainer}
         >
            <Grid
               item
               component={"a"}
               href="https://www.facebook.com"
               rel="noopener noreferrer"
               target="_blank"
            >
               <img
                  src={facebook}
                  alt="facebook logo"
                  className={classes.icon}
               />
            </Grid>
            <Grid
               item
               component={"a"}
               href="https://www.twitter.com"
               rel="noopener noreferrer"
               target="_blank"
            >
               <img src={twitter} alt="twitter logo" className={classes.icon} />
            </Grid>
            <Grid
               item
               component={"a"}
               href="https://www.instagram.com"
               rel="noopener noreferrer"
               target="_blank"
            >
               <img
                  src={instagram}
                  alt="instagram logo"
                  className={classes.icon}
               />
            </Grid>
         </Grid>
      </footer>
   );
}

const useStyles = makeStyles((theme) => ({
   footer: {
      backgroundColor: theme.palette.common.blue,
      width: "100%",
      zIndex: 1302,
      position: "relative",
   },
   adornment: {
      width: "25em",
      verticalAlign: "bottom",
      [theme.breakpoints.down("md")]: {
         width: "21em",
      },
      [theme.breakpoints.down("xs")]: {
         width: "15em",
      },
   },
   mainContainer: {
      position: "absolute",
   },
   link: {
      color: "white",
      fontFamily: "Arial",
      fontSize: "0.75rem",
      fontWeight: "bold",
      textDecoration: "none",
   },
   gridItem: {
      margin: "3rem",
   },
   icon: {
      height: "4em",
      width: "4em",
      [theme.breakpoints.down("xs")]: {
         height: "2.5em",
         width: "2.5em",
      },
   },
   socialContainer: {
      position: "absolute",
      marginTop: "-6em",
      right: "1.5em",
      [theme.breakpoints.down("xs")]: {
         right: "0.6em",
      },
   },
}));
