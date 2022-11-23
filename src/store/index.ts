// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
// import chat from 'src/store/apps/chat'
// import user from 'src/store/apps/user'
// import email from 'src/store/apps/email'
// import invoice from 'src/store/apps/invoice'
// import calendar from 'src/store/apps/calendar'
// import permissions from 'src/store/apps/permissions'
import example from './apps/example'
import survey from "./apps/surveyexample"
import auth from './apps/auth'
import profile from 'src/store/apps/profile'


export const store = configureStore({
  reducer: {
    example,
    survey,
    auth,
    profile
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>