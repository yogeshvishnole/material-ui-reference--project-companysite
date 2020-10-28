import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

import theme from "./ui/Theme";

function App() {
   const [value, setValue] = useState(0);
   const [selectedIndex, setSelectedIndex] = useState();

   return (
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <Header
               value={value}
               setValue={setValue}
               selectedIndex={selectedIndex}
               setSelectedIndex={setSelectedIndex}
            />
            <Switch>
               <Route exact path="/" component={() => <h3>Home</h3>} />
               <Route
                  exact
                  path="/customsoftware"
                  component={() => <h3>Custom Software</h3>}
               />
               <Route
                  exact
                  path="/mobileapps"
                  component={() => <h3>Mobile Apps</h3>}
               />
               <Route
                  exact
                  path="/websites"
                  component={() => <h3>Websites</h3>}
               />
               <Route
                  exact
                  path="/revolution"
                  component={() => <h3>Revolution</h3>}
               />
               <Route
                  exact
                  path="/about"
                  component={() => <h3>Abouts us</h3>}
               />
               <Route
                  exact
                  path="/contact"
                  component={() => <h3>Contact Us</h3>}
               />
               <Route
                  exact
                  path="/estimate"
                  component={() => <h3>Estimate</h3>}
               />
               <Route
                  exact
                  path="/services"
                  component={() => <h3>Services</h3>}
               />
            </Switch>
            <Footer
               value={value}
               setValue={setValue}
               selectedIndex={selectedIndex}
               setSelectedIndex={setSelectedIndex}
            />
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
