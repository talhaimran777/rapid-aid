/*eslint comma-dangle: ["error", "always-multiline"]*/

import { HANDLE_MARK_ORDER_COMPLETE_FAILED, HANDLE_MARK_ORDER_COMPLETE_INITIATED, HANDLE_MARK_ORDER_COMPLETE_SUCCESS } from "../../../actions/action.types/actionTypes"

  
  const completeOrderReducer = (state = {}, action) => {
    switch (action.type) {
      case HANDLE_MARK_ORDER_COMPLETE_INITIATED:
        return { completingOrderInProcess: true }

        case HANDLE_MARK_ORDER_COMPLETE_SUCCESS:
            return { completingOrderInProcess: false, orderCompleteStatus: true }

            case HANDLE_MARK_ORDER_COMPLETE_FAILED:
                return { completingOrderInProcess: false, orderCompleteStatus: false }

      default:
        return state
    }
  }
  
  export default completeOrderReducer
  