import { Box } from "@mui/material";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export const LayoutV2 = () => {
  return (
    <Fragment>
      <Box style={{ maxWidth: "1024px", margin: "auto", background: "red" }}>
        <Outlet />
      </Box>
    </Fragment>
  );
};
