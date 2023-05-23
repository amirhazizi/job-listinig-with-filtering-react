import { legacy_createStore as createStore } from "redux"
import reducer from "./reducer"
import data from "./data.json"

const initialState = {
  data,
  filters: [],
}
export const store = createStore(reducer, initialState)
