import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "../src/store/appContext.jsx";

import { Home }from "./views/home.jsx";
import { Details } from "./views/details.jsx";
import  {Navbar}  from "./component/navbar.jsx";
import { Reproductor } from "./component/Reproductor.jsx";
import { Footer } from "./component/footer.jsx";

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <BrowserRouter {...pageProps}>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home/>}/>
						<Route path="/details/:category/:id" element={<Details/>}/>
						<Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Reproductor/>
					<Footer />
        </BrowserRouter>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default injectContext(App);