import { log } from "console"
import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./actions"
import initialData from "./data.json"

type StatePrpos = {
  data: [
    {
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
      tools?: string[]
    }
  ]
  filters: string[]
}
const addfilter = (preData: StatePrpos["data"], filterType: string = "") => {
  const newData = preData.reduce((total: any, card: any) => {
    if (card.role === filterType) return [...total, card]
    if (card.level === filterType) return [...total, card]
    if (card.language.find((lan: string) => lan === filterType))
      return [...total, card]
    if (card.tools?.find((tool: string) => tool === filterType))
      return [...total, card]
    return total
  }, [])

  return newData
}

export default function reducer(
  state: any,
  action: { type: string; payload?: string }
) {
  const { data, filters } = state
  if (action.type === ADD_FILTER) {
    const newDate = addfilter(data, action.payload)
    return { data: newDate, filters: [...filters, action.payload] }
  }
  if (action.type === REMOVE_FILTER) {
    const newFilters = filters.filter(
      (filter: string) => filter !== action.payload
    )
    let newData = initialData
    if (newFilters.length > 0) {
      newFilters.forEach((filter: string) => {
        newData = addfilter(newData, filter)
      })
    }
    return { data: newData, filters: newFilters }
  }
  if (action.type === CLEAR_FILTER) {
    return { data: initialData, filters: [] }
  }
  return state
}
