import { createTheme } from "@mui/material"
const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(180, 29%, 50%)",
      light: "hsl(180, 52%, 96%)" /*background*/,
    },
    secondary: {
      main: "hsl(180, 8%, 52%)",
      light: "hsl(180, 31%, 95%)" /* filter Div */,
      dark: "hsl(180, 14%, 20%)",
    },
  },
  typography: { fontFamily: ["League Spartan", "sans-serif"].join(",") },
})
export default theme
