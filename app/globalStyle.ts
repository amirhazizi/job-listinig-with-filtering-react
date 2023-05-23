import theme from "./theme"
export const newCard = {
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
export const cardStyle = {
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
