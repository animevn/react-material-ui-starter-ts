import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Home from "./Home";
import {Box, Grid} from "@material-ui/core";

export default function App() {
    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" minHeight="100vh">
            <Grid>
                <Header/>
                {/*app body goes down here*/}

                <Home/>

                {/*app body goes up here hahaha */}
            </Grid>
            <Footer/>
        </Box>
    );
}

