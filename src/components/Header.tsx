import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "@mui/material";
import { RootState } from "../features/store";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { toggleLayout } from "../features/slices/layouSlice";

const Header = () => {
  const dispatch = useDispatch();
  const layout = useSelector((state: RootState) => state.layout.layout);

  const handleToggleLayout = () => {
    dispatch(toggleLayout());
  };

  return (
    <div className="header">
      <Button
        variant="contained"
        onClick={handleToggleLayout}
        sx={{
          backgroundColor: "#077fcf",
          "&:hover": {
            backgroundColor: "#7b1fa2",
          },
        }}
      >
        <IconButton
          color="inherit"
          sx={{
            color: "white",
          }}
        >
          {layout === "grid" ? <ViewHeadlineIcon /> : <ViewModuleIcon />}
        </IconButton>
      </Button>
      <h1>Cheappie</h1>
    </div>
  );
};

export default Header;
