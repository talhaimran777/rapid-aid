/*eslint comma-dangle: ["error", "always-multiline"]*/
import {
  FETCH_OWN_PROFILE_FAILED,
  FETCH_OWN_PROFILE_INITIATED,
  FETCH_OWN_PROFILE_SUCCESS,
} from '../../actions/action.types/actionTypes'

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_OWN_PROFILE_INITIATED:
      return { fetchOwnProfileInProcess: true }

    case FETCH_OWN_PROFILE_SUCCESS:
      return { fetchOwnProfileInProcess: false, profile: action.payload.profile }

    case FETCH_OWN_PROFILE_FAILED:
      return { fetchOwnProfileInProcess: false, status: 'FAILED' }

    default:
      return state
  }
}

export default profileReducer
