import { log } from "console"
import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./actions"
import initialData from "./data.json"

interface StatePrpos {
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
    tools?: string[] | undefined
    imageUrl: string
  }
  filters: string[]
}

export default function reducer(
  state: any,
  action: { type: string; payload?: string }
) {
  if (action.type === ADD_FILTER) {
    const newDate = state.data.reduce((total: any, card: any) => {
      if (card.role === action.payload) return [...total, card]
      if (card.level === action.payload) return [...total, card]
      if (card.language.find((lan: string) => lan === action.payload))
        return [...total, card]
      if (card.tools?.find((tool: string) => tool === action.payload))
        return [...total, card]

      return total
    }, [])
    console.log(newDate)

    return { data: newDate, filters: [...state.filters, action.payload] }
  } else if (action.type === CLEAR_FILTER) {
    return { data: initialData, filters: [] }
  }
  return state
}
