"use client"
import { useReducer, useState, useEffect } from "react"
import Image from "next/image"

import { ThemeProvider, Typography, Box, Button, Card } from "@mui/material"
import theme from "./theme"

import bgImageMobile from "../public/images/bg-header-mobile.svg"
import bgImageDesktop from "../public/images/bg-header-desktop.svg"
import removeSVG from "../public/images/icon-remove.svg"

import calculateTime from "./calculateTime"

import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./actions"
import reducer from "./reducer"
import data from "./data.json"

import { useAutoAnimate } from "@formkit/auto-animate/react"
const newCard = {
  ":after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: ".35rem",
    bgcolor: "primary.main",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
}
const cardStyle = {
  p: "1.5rem",
  borderRadius: 2,
  bgcolor: "white",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  overflow: "visible",
  gap: 2,
  [theme.breakpoints.up("md")]: {
    p: 2.5,
    px: 4,
    flexDirection: "row",
    alignItems: "center",
  },
}
interface CardProps {
  uploadTime: number
  type: string
  featured: boolean
  title: string
  timeType: string
  location: string
  role: string
  level: string
  language: string[]
  tools?: string[] | undefined
  imageUrl: string
}

const initialState = { data, filters: [] }
export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [parent] = useAutoAnimate()
  const [filterCard, setFilterCard] = useState({
    p: ".95rem",
    borderRadius: 2,
    bgcolor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transform: "translate(-50% ,0)",
    transition: "all 170ms ease-in",
    opacity: 0,
  })
  const [cardContaner, setCardContainer] = useState({
    pt: 1,
    display: "grid",
    gap: 7,
    transition: "all 250ms",
    [theme.breakpoints.up("md")]: {
      gap: 3,
    },
  })
  useEffect(() => {
    const { filters } = state
    if (filters.length > 1) return
    if (filters.length === 0) {
      setFilterCard((prevState) => {
        return { ...prevState, transform: "translate(-50%,0)", opacity: 0 }
      })
      setCardContainer((prevState) => {
        return { ...prevState, pt: 1 }
      })
    }
    if (filters.length === 1) {
      setFilterCard((prevState) => {
        return { ...prevState, transform: "translate(0 ,0)", opacity: 1 }
      })
      setCardContainer((prevState) => {
        return { ...prevState, pt: 7 }
      })
    }
  }, [state.filters])
  return (
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
          <Card sx={filterCard}>
            <Box
              ref={parent}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {state.filters.map((filter: string, index: number) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      bgcolor: "secondary.light",
                      width: "fit-content",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 1.5,
                    }}
                  >
                    <Typography
                      sx={{
                        p: 1,
                        py: 0.6,
                        pb: 0.4,
                        fontWeight: 700,
                        color: "primary.main",
                      }}
                    >
                      {filter}
                    </Typography>
                    <button
                      onClick={() =>
                        dispatch({ type: REMOVE_FILTER, payload: filter })
                      }
                      className='remove-btn self-stretch rounded-r-lg'
                    >
                      <Image
                        className='scale-125'
                        src={removeSVG}
                        alt='remove-icon'
                      />
                    </button>
                  </Box>
                )
              })}
            </Box>
            <Button
              onClick={() => dispatch({ type: CLEAR_FILTER })}
              style={{ backgroundColor: "transparent" }}
              sx={{
                color: "grey",
                fontWeight: 700,
                textTransform: "unset",
                alignSelf: "stretch",
                transition: "all 250ms",
                ":hover": {
                  textDecoration: "underline",
                  color: "primary.main",
                },
              }}
            >
              Clear
            </Button>
          </Card>

          <Box ref={parent} sx={cardContaner}>
            {state.data.map((card: CardProps) => {
              const {
                uploadTime,
                type,
                featured,
                title,
                timeType,
                location,
                role,
                level,
                language,
                imageUrl,
              } = card
              return (
                <Card sx={featured ? { ...cardStyle, ...newCard } : cardStyle}>
                  <Image
                    className='absolute top-0 left-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full md:static md:translate-x-0 md:translate-y-0 md:h-16 md:w-16 lg:w-20 lg:h-20'
                    src={imageUrl}
                    alt='photoshop'
                    width={150}
                    height={150}
                  />
                  <Box
                    sx={{
                      py: 2,
                      display: "grid",
                      gap: 2,
                      borderBottom: 1,
                      borderColor: "secondary.dark",
                      [theme.breakpoints.up("md")]: {
                        borderBottom: 0,
                        py: 1,
                        gap: 1.5,
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                      <Typography
                        sx={{
                          fontSize: ".9rem",
                          fontWeight: "bold",
                          color: "primary.main",
                        }}
                        variant='h1'
                      >
                        {type}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        {new Date().getTime() - uploadTime < 259200000 && (
                          <Typography
                            sx={{
                              fontSize: ".9rem",
                              fontWeight: "bold",
                              color: "white",
                              textTransform: "uppercase",
                              bgcolor: "primary.main",
                              p: 1,
                              py: ".1rem",
                              pt: ".15rem",
                              borderRadius: 3,
                            }}
                          >
                            New!
                          </Typography>
                        )}
                        {featured && (
                          <Typography
                            sx={{
                              fontSize: ".9rem",
                              fontWeight: "bold",
                              color: "white",
                              textTransform: "uppercase",
                              bgcolor: "secondary.dark",
                              p: 1,
                              py: ".1rem",
                              pt: ".15rem",
                              borderRadius: 3,
                            }}
                          >
                            Featured
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <Typography
                      variant='h1'
                      sx={{
                        fontSize: ".9rem",
                        fontWeight: 900,
                        cursor: "pointer",
                        transition: "all 250ms",
                        ":hover": { color: "primary.main" },
                        [theme.breakpoints.up("md")]: {
                          fontSize: "1.1rem",
                        },
                      }}
                    >
                      {title}
                    </Typography>
                    <Box
                      sx={{
                        opacity: 0.5,
                        display: "flex",
                        gap: 1.3,
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: ".9rem",
                          fontWeight: "bold",
                        }}
                      >
                        {calculateTime(uploadTime)}
                      </Typography>
                      <Box
                        sx={{
                          width: ".4rem",
                          height: ".4rem",
                          borderRadius: 50,
                          bgcolor: "grey",
                        }}
                      ></Box>
                      <Typography
                        sx={{ fontSize: ".9rem", fontWeight: "bold" }}
                      >
                        {timeType}
                      </Typography>
                      <Box
                        sx={{
                          width: ".4rem",
                          height: ".4rem",
                          borderRadius: 50,
                          bgcolor: "grey",
                        }}
                      ></Box>
                      <Typography
                        sx={{ fontSize: ".9rem", fontWeight: "bold" }}
                      >
                        {location}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 2,
                      [theme.breakpoints.up("md")]: {
                        ml: "auto",
                      },
                    }}
                  >
                    <Button
                      onClick={() => {
                        dispatch({ type: ADD_FILTER, payload: role })
                      }}
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        textTransform: "unset",
                        p: 1,
                        py: 0.5,
                        transition: "all 250ms",
                        ":hover": { color: "white", bgcolor: "primary.main" },
                      }}
                    >
                      {role}
                    </Button>
                    <Button
                      onClick={() => {
                        dispatch({ type: ADD_FILTER, payload: level })
                      }}
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        textTransform: "unset",
                        p: 1,
                        py: 0.5,
                        transition: "all 250ms",
                        ":hover": { color: "white", bgcolor: "primary.main" },
                      }}
                    >
                      {level}
                    </Button>

                    {language.map((lan, index) => {
                      return (
                        <Button
                          onClick={() => {
                            dispatch({ type: ADD_FILTER, payload: lan })
                          }}
                          key={index}
                          sx={{
                            color: "primary.main",
                            fontWeight: 700,
                            textTransform: "unset",
                            p: 1,
                            py: 0.5,
                            transition: "all 250ms",
                            ":hover": {
                              color: "white",
                              bgcolor: "primary.main",
                            },
                          }}
                        >
                          {lan}
                        </Button>
                      )
                    })}
                    {card.tools?.map((tool, index) => {
                      return (
                        <Button
                          key={index}
                          onClick={() => {
                            dispatch({ type: ADD_FILTER, payload: tool })
                          }}
                          sx={{
                            color: "primary.main",
                            fontWeight: 700,
                            textTransform: "unset",
                            p: 1,
                            py: 0.5,
                            transition: "all 250ms",
                            ":hover": {
                              color: "white",
                              bgcolor: "primary.main",
                            },
                          }}
                        >
                          {tool}
                        </Button>
                      )
                    })}
                  </Box>
                </Card>
              )
            })}
          </Box>
        </div>
      </main>
    </ThemeProvider>
  )
}
module.exports = Home
