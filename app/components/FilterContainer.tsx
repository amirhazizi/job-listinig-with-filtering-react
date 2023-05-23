"use client"
import { useState, useEffect } from "react"
import SingleFilter from "./SingleFilter"
import { store } from "../store"
import { Box, Button, Card } from "@mui/material"
import { CLEAR_FILTER } from "../actions"

import { connect } from "react-redux"

import { useAutoAnimate } from "@formkit/auto-animate/react"

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

type FilterContainerProps = {
  filters: string[]
  resetFilters: Function
}

const FilterContainer = ({ filters, resetFilters }: FilterContainerProps) => {
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
  useEffect(() => {
    if (filters.length > 1) return
    if (filters.length === 0) {
      setFilterCard((prevState) => {
        return { ...prevState, transform: "translate(-50%,0)", opacity: 0 }
      })
    }
    if (filters.length === 1) {
      setFilterCard((prevState) => {
        return { ...prevState, transform: "translate(0 ,0)", opacity: 1 }
      })
    }
  }, [filters])
  return (
    <Card sx={filterCard}>
      <Box
        ref={parent}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {filters.map((filter: string, index: number) => {
          return <SingleFilter filter={filter} />
        })}
      </Box>
      <Button
        onClick={() => resetFilters()}
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
  )
}
const mapStateToProps = ({ state }: mapDispatchProps) => {
  return { filters: store.getState().filters }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    resetFilters: () => dispatch({ type: CLEAR_FILTER }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)
