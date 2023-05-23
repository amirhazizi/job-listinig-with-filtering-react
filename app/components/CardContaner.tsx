"use client"
import { useState, useEffect } from "react"
import SingleCard from "./SingleCard"
import { store } from "../store"

import { Box } from "@mui/material"
import theme from "../theme"

import { connect } from "react-redux"

import { useAutoAnimate } from "@formkit/auto-animate/react"

type CardProps = {
  uploadTime: number
  type: string
  featured: boolean
  title: string
  timeType: string
  location: string
  role: string
  level: string
  language: string[]
  imageUrl: string
  tools?: string[] | undefined
}

type mapDispatchProps = {
  state: {
    data: {
      uploadTime: number
      type: string
      featured: boolean
      title: string
      timeType: string
      location: string
      role: string
      level: string
      language: string[]
      imageUrl: string
      tools?: string[] | undefined
    }[]
    filters: string[]
  }
}

type CardContainerProps = {
  allCard: CardProps[]
  filters: string[]
}
const CardContainer = ({ allCard, filters }: CardContainerProps) => {
  console.log("ok")

  const [parent] = useAutoAnimate()
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
    if (filters.length > 1) return
    if (filters.length === 0) {
      setCardContainer((prevState) => {
        return { ...prevState, pt: 1 }
      })
    }
    if (filters.length === 1) {
      setCardContainer((prevState) => {
        return { ...prevState, pt: 7 }
      })
    }
  }, [filters])
  return (
    <Box ref={parent} sx={cardContaner}>
      {allCard.map((card: CardProps) => {
        return <SingleCard card={card} />
      })}
    </Box>
  )
}
const mapStateToProps = ({ state }: mapDispatchProps) => {
  return { allCard: store.getState().data, filters: store.getState().filters }
}
export default connect(mapStateToProps)(CardContainer)
