
// -----------------------------
// Constants
// -----------------------------

// const LOADING_USERS_LIST = 'LOADING_USERS_LIST'

// -----------------------------
// Actions
// -----------------------------

// export function loadingUsersList () {
//   return {
//     type: LOADING_USERS_LIST
//   }
// }


// ----------------------------
// ACTION HANDLERS
// ----------------------------
const ACTION_HANDLERS = {
  // [LOADING_USERS_LIST]: (state, action) => {
  //   return {
  //     ...state,
  //     loadingUsersList: true
  //   }
  // },
  
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  tasks: []
}

export default function tasksReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
