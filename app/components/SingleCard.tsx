import { ThemeProvider, Typography, Box, Button, Card } from "@mui/material"
import theme from "../theme"
type SingleCardProps = {
  card: {
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
}
export default function SingleCard({ card }: SingleCardProps) {
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
          <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
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
          <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
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
}
