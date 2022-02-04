import { green, grey, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: grey,
    success: green,
    secondary: purple,
  },
});

export default appTheme;
