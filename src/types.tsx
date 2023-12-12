import { ThunkDispatch } from '@reduxjs/toolkit'
import { companiesSlice, fetchDate } from './components/cmpaniesSlice'
import { Root } from 'react-dom/client'
import { RootState } from './store'

export type companiesInformations = {
  /*   map(
        arg0: (company: companiesInformations) => import('react/jsx-runtime').JSX.Element
      ): import('react').ReactNode */
  login: string
  id: number
  node_id: string
  url: string
  repos_url: string
  events_url: string
  hooks_url: string
  issues_url: string
  members_url: string
  public_members_url: string
  avatar_url: string
  description: null
}

export type companiesState = {
  data: companiesInformations[]
  isLoading: boolean
  error: String | null
  searchId: number
  seacheName: string
}

export type SortCompaniesAction = {
  type:'companies/SortCompanies';
  payload: number;
}



type FetchDataPending = ReturnType<typeof fetchDate.pending>
type FetchDataFulfilled = ReturnType<typeof fetchDate.fulfilled>
type FetchDataRejected = ReturnType<typeof fetchDate.rejected>

export type FetchingAction = FetchDataPending | FetchDataFulfilled | FetchDataRejected

export type DataDispatch = ThunkDispatch<RootState, void, FetchingAction>
