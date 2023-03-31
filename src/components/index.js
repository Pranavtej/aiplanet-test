import React from "react";
import Hackathon from "./Hacks/hackathon";
import Header from "./Header/header";
import Main from "./Main/main";
import Card from "./cards/card";
import Hackathon1 from "./Hacks/hack-test";

import Test from "./cards/test";


const Index= () => {
    return (
        <>
        <Header/>
        <Main/>
        <br></br>
        <Hackathon/>
        <br></br>
        {/* <Card/> */}
        <Test/>
        </>
    );
}

export default Index;