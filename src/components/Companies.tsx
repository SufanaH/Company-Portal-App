import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { AppDispatch, RootState } from '../store'
import { fetchDate } from './cmpaniesSlice'
import Sorting from './Sorting'

const Companies = () => {
  const dispatch = useDispatch<AppDispatch>()
  const companies = useSelector((state: RootState) => state.companiesReducer)

  useEffect(() => {
    dispatch(fetchDate())
  }, [dispatch])

  if (companies.isLoading) {
    return <p> 'Loading the data..' </p>
  }
 if (companies.error) {
    return <p> Errors : {companies.error}</p>
  }

  return (
    <div>
      <h1>Companies</h1>
      <div className="sort-rout">
        <Sorting />
      </div>
      <section className="companies-card">
        {companies.data.length > 0 &&
          companies.data.map((company) => {
            const { id, avatar_url, login, description } = company
            return (
              <article key={company.id}>
                <img className="companies-img" src={avatar_url} alt={login} />
                <h4> Company id: {id}</h4>
                <p> {description}</p>
              </article>
            )
          })}
      </section>
    </div>
  )
}
export default Companies
