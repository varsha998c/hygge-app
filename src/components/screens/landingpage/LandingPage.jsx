import React from "react";
import Categories from "./Categories";
import Product from "./Product";
import Spotlight from "./Spotlight";
import WhyUs from "./WhyUs";

function LandingPage() {
    return (
        <>
            <Spotlight />
            <Categories />
            <Product />
            <WhyUs />
        </>
    );
}

export default LandingPage;
