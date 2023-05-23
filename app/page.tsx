"use client"
import Image from "next/image"

import { ThemeProvider, Box } from "@mui/material"
import theme from "./theme"

import bgImageMobile from "../public/images/bg-header-mobile.svg"
import bgImageDesktop from "../public/images/bg-header-desktop.svg"

import CardContainer from "./components/CardContaner"
import FilterContainer from "./components/FilterContainer"

import { Provider } from "react-redux"
import { store } from "./store"

export default function Home() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main className='min-h-screen relative'>
          <Box
            sx={{
              bgcolor: "primary.main",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Image
              width={400}
              height={170}
              src={bgImageMobile}
              alt='background-image'
              className='h-40 w-full md:hidden'
              priority
            />
            <Image
              width={1400}
              height={130}
              src={bgImageDesktop}
              alt='background-image'
              className='h-32 w-full hidden md:block'
              priority
            />
          </Box>
          <div className='relative pt-24 mx-auto py-10'>
            <FilterContainer />
            <CardContainer />
          </div>
        </main>
      </ThemeProvider>
    </Provider>
  )
}
