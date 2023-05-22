import { render } from "react-dom"
import Sum from "./Sum"

test("inital test", () => {
  expect(Sum(5, 10)).toBe(15)
})
