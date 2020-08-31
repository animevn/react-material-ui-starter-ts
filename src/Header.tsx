import React from "react";
import {Box, Typography} from "@material-ui/core";

export default function Header() {

    const padding = {xs:2, sm:2, md:2, lg:2, xl:2};
    const margin = {xs:3, sm:5, md:10, lg:15, xl:20};

    return (
        <Box bgcolor="primary.main" py={{...padding}} boxShadow={3}>
            <Box fontWeight="fontWeightBold" mx={{...margin}}>
                <Typography variant="h3">
                    {process.env.REACT_APP_NAME}
                </Typography>
            </Box>
        </Box>

    );
}
