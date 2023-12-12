import { configureStore } from '@reduxjs/toolkit'
import companiesSlice from './components/cmpaniesSlice'

export type RootState = {
  companiesReducer: ReturnType<typeof companiesSlice>
}
export const store = configureStore({
  reducer: {
    companiesReducer: companiesSlice
  }
})

export type AppDispatch = typeof store.dispatch
