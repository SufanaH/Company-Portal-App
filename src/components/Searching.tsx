import { useEffect, useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchDate } from './cmpaniesSlice'
import { AppDispatch, RootState } from '../store'
import { companiesInformations } from '../types'

const Searching = () => {
  const dispatch = useDispatch<AppDispatch>()

  const companies = useSelector((state: RootState) => state.companiesReducer)

  const [filterData, setFilterData] = useState<companiesInformations>()

  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    dispatch(fetchDate())
  }, [dispatch])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSearch = () => {
    const searchValue: string = searchInput.trim().toLowerCase()
    const filteredCompanies = searchValue
      ? companies.data.filter((company) => {
          return (
            company.id.toString() === searchValue ||
            company.login.toLowerCase().includes(searchValue)
          )
        })
      : companies.data

    setFilterData(filteredCompanies.length > 0 ? filteredCompanies[0] : undefined)
  }

  return (
    <div>
      <h2>Exploring Company Data</h2>
      {/*------ Input for searching by ID or Name -------*/}
      <input
        type="text"
        placeholder="Search by company ID or Name"
        value={searchInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search by ID</button>

      {/*------ Result-------*/}

      {filterData && (
        <div>
          <h3>Company Details:</h3>
          <img src={filterData.avatar_url} alt="login" />
          <p>ID: {filterData.id}</p>
          <p>Name: {filterData.login}</p>
          <p> Description: {filterData.description} </p>
          <p> </p>
          <p> </p>
        </div>
      )}
    </div>
  )
}

export default Searching
