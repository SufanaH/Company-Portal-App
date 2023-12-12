import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { SortCompanies } from './cmpaniesSlice'

const Sorting = () => {
  const dispatch = useDispatch()
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    dispatch(SortCompanies(selectedValue))
  }
  return (
    <div className="sort">
      <label> Sort By: </label>
      <select onChange={handleChange}>
        <option value="id">id</option>
        <option value="login">login</option>
      </select>
    </div>
  )
}

export default Sorting
