import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { companiesState } from '../types'

const initialState: companiesState = {
  data: [],
  isLoading: false,
  error: null,
  searchId: 0,
  seacheName: ''
}

const fetchDate = createAsyncThunk('companies/fetchData', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://api.github.com/organizations')
    if (!response.ok) {
      return rejectWithValue('Failed to fetch user data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error in fetching', error)
    throw error
  }
})

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    SortCompanies: (state, action) => {
      const sortingCriteria = action.payload
      if (sortingCriteria === 'login') {
        state.data.sort((a, b) => a.login.localeCompare(b.login))
      } else if (sortingCriteria === 'id') {
        state.data.sort((a, b) => a.id - b.id)
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDate.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchDate.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        // console.log(action.payload);
      })
      .addCase(fetchDate.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'fetching api data error'
      })
  }
})

export { fetchDate }
export const { SortCompanies } = companiesSlice.actions
export default companiesSlice.reducer
