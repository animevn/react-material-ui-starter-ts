import React from "react";
import {Box, Link, Typography} from "@material-ui/core";

export default function Footer() {

    const boxStyle = {
      backgroundColor:"azure"
    };

    return (
        <Box display="flex" flexDirection="column" justifyContent="center">
            <Box style={boxStyle}>
                <Typography variant="body1" align="center">
                    Copyright ©
                    <Link color="inherit" href="#">
                        {process.env.REACT_APP_NAME}
                    </Link>
                    {` ${new Date().getFullYear()}`}
                </Typography>
            </Box>

            <Box fontStyle="italic" my={0.5}>
                <Typography variant="body2" align="center">
                    From
                    <span role="img" aria-label=""> 👨</span> with
                    <span role="img" aria-label=""> ❤️</span>
                </Typography>
            </Box>

        </Box>
    )
}

