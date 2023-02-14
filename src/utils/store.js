import { configureStore } from '@reduxjs/toolkit'

// import { applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

const initialState = {
  name: 'Oman',
  age: '22'
}

const reducer = initialState => initialState

const store = configureStore({
  reducer,
  initialState,
})

export default store