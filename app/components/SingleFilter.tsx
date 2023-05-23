import { Typography, Box } from "@mui/material"
import { REMOVE_FILTER } from "../actions"

import Image from "next/image"
import removeSVG from "../../public/images/icon-remove.svg"

import { connect } from "react-redux"
type SingleFilterProps = {
  filter: string
  removeFilter: Function
}
const SingleFilter = ({ filter, removeFilter }: SingleFilterProps) => {
  return (
    <Box
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
        onClick={() => removeFilter(filter)}
        className='remove-btn self-stretch rounded-r-lg'
      >
        <Image className='scale-125' src={removeSVG} alt='remove-icon' />
      </button>
    </Box>
  )
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    removeFilter: (filterContent: string) =>
      dispatch({ type: REMOVE_FILTER, payload: filterContent }),
  }
}
export default connect(null, mapDispatchToProps)(SingleFilter)
