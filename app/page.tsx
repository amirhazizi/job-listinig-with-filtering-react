"use client"
import { ThemeProvider, Typography, Box, Button, Card } from "@mui/material"
import theme from "./theme"
import Image from "next/image"
import bgImageMobile from "../public/images/bg-header-mobile.svg"
import bgImageDesktop from "../public/images/bg-header-desktop.svg"
import removeSVG from "../public/images/icon-remove.svg"
import calculateTime from "./calculateTime"
import data from "./data.json"
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className='min-h-screen relative'>
        <Box sx={{ bgcolor: "primary.main", width: "100%" }}>
          <Image
            width={400}
            height={170}
            src={bgImageMobile}
            alt='background image'
            className='h-40 w-full'
            priority
          />
        </Box>
        <div className='absolute top-0 translate-y-24 left-1/2 -translate-x-1/2 h-fit py-10'>
          <Card
            sx={{
              p: ".95rem",
              borderRadius: 2,
              bgcolor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: "secondary.light",
                  width: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{ p: 1, py: 0.8, fontWeight: 700, color: "primary.main" }}
                >
                  Frontend
                </Typography>
                <button className='remove-btn self-stretch rounded-r-lg'>
                  <Image
                    className='scale-125'
                    src={removeSVG}
                    alt='remove-icon'
                  />
                </button>
              </Box>
              <Box
                sx={{
                  bgcolor: "secondary.light",
                  width: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{ p: 1, py: 0.8, fontWeight: 700, color: "primary.main" }}
                >
                  CSS
                </Typography>
                <button className='remove-btn self-stretch rounded-r-lg'>
                  <Image
                    className='scale-125'
                    src={removeSVG}
                    alt='remove-icon'
                  />
                </button>
              </Box>
              <Box
                sx={{
                  bgcolor: "secondary.light",
                  width: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{ p: 1, py: 0.8, fontWeight: 700, color: "primary.main" }}
                >
                  JavaScript
                </Typography>
                <button className='remove-btn self-stretch rounded-r-lg'>
                  <Image
                    className='scale-125'
                    src={removeSVG}
                    alt='remove-icon'
                  />
                </button>
              </Box>
            </Box>
            <Button
              style={{ backgroundColor: "transparent" }}
              sx={{
                color: "grey",
                fontWeight: 700,
                textTransform: "unset",
                alignSelf: "stretch",
              }}
            >
              Clear
            </Button>
          </Card>
          <Box sx={{ pt: 10 }}>
            <Card
              sx={{
                p: "1.5rem",
                borderRadius: 2,
                bgcolor: "white",
                position: "relative",
                display: "grid",
                overflow: "visible",
                gap: 2,

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
              }}
            >
              <Image
                className='absolute top-0 left-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full'
                src={bgImageMobile}
                alt='photoshop'
              />
              <Box
                sx={{
                  py: 2,
                  display: "grid",
                  gap: 2,
                  borderBottom: 1,
                  borderColor: "secondary.dark",
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
                    Photoshop
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
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
                  </Box>
                </Box>
                <Typography
                  variant='h1'
                  sx={{ fontSize: ".9rem", fontWeight: 900 }}
                >
                  Senior Front Developer
                </Typography>
                <Box
                  sx={{
                    opacity: 0.5,
                    display: "flex",
                    gap: 1.3,
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                    1d ago
                  </Typography>
                  <Box
                    sx={{
                      width: ".4rem",
                      height: ".4rem",
                      borderRadius: 50,
                      bgcolor: "grey",
                    }}
                  ></Box>
                  <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                    Full Time
                  </Typography>
                  <Box
                    sx={{
                      width: ".4rem",
                      height: ".4rem",
                      borderRadius: 50,
                      bgcolor: "grey",
                    }}
                  ></Box>
                  <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                    USA only
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Button
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    textTransform: "unset",
                    p: 1,
                    py: 0.5,
                  }}
                >
                  Frontend
                </Button>
                <Button
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    textTransform: "unset",
                    p: 1,
                    py: 0.5,
                  }}
                >
                  Senior
                </Button>
                <Button
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    textTransform: "unset",
                    p: 1,
                    py: 0.5,
                  }}
                >
                  HTML
                </Button>
                <Button
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    textTransform: "unset",
                    p: 1,
                    py: 0.5,
                  }}
                >
                  CSS
                </Button>
                <Button
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    textTransform: "unset",
                    p: 1,
                    py: 0.5,
                  }}
                >
                  JavaScript
                </Button>
              </Box>
            </Card>
          </Box>
        </div>
      </main>
    </ThemeProvider>
  )
}
