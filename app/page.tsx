"use client"
import { ThemeProvider, Typography, createTheme, Box } from "@mui/material"
import Image from "next/image"
import bgImageMobile from "../public/images/bg-header-mobile.svg"
import bgImageDesktop from "../public/images/bg-header-desktop.svg"
import calculateTime from "./calculateTime"
import data from "./data.json"
const theme = createTheme({
  palette: {
    primary: { main: "hsl(180, 29%, 50%)", light: "hsl(180, 52%, 96%)" },
    secondary: {
      main: "hsl(180, 8%, 52%)",
      light: "hsl(180, 31%, 95%)",
      dark: "hsl(180, 14%, 20%)",
    },
  },
  typography: { fontFamily: ["League Spartan", "sans-serif"].join(",") },
})
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className='min-h-screen relative'>
        <Box sx={{ bgcolor: "primary.main" }}>
          <Image src={bgImageMobile} alt='background image' className='h-40' />
        </Box>
        <Box sx={{ position: "fixed" }}>
          <Typography variant='h1'>text</Typography>
        </Box>
      </main>
    </ThemeProvider>
  )
}
