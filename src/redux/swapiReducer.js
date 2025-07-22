import { SEND_API } from "./swapiAction"

export default function reducerSwapi(state = {}, action) {
  switch (action.type) {
      case SEND_API : return action.payload
      default: return state
    }
}