import * as React from 'react'
import * as api from '../../api/country.api'

import {useNavigate} from "react-router-dom"

const SearchCountry = () => {

    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState('')

    const navigate = useNavigate()

    React.useEffect(() => {
        if(search.length){
            api.getCountriesByName(search).then((response) => {
                if(response.status !== 200){
                    return
                }
                return response.json()
            }).then((data) => {
                return setData(data)
            })
        }


    },[search])

  return (
    <>
    <form onSubmit={(e) => e.preventDefault()}>
    <div className="flex">
        <div className="relative w-full m-5">
            <input onChange={(event) => setSearch(event.target.value)} type="search" id="search-dropdown" className=" rounded-lg block p-2.5 w-full z-20 text-sm text-white bg-gray-700 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search a country..." required />
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </div>
    </div>
    </form>
    <section className='w-full flex flex-wrap overflow-x-auto px-2'>

        {!data ? <p>Country not found</p> :  data?.map((item, index) => {
            return (
                <img onClick={() => navigate('/country/' + item.name.common.toLowerCase().replace(' ', '-'))} key={index} src={item.flags.png} alt={item.name.common} style={{
                    width: Math.round((((250 - data.length) / 2) + (250 - data.length))) + 30 * 0.5,
                    height: Math.round((((250 - data.length) / 2) + (250 - data.length))) + 30 * 0.5,
                    maxWidth: '200px',
                    maxHeight: '100px',
                    cursor: 'pointer',
                }} />
            )})}
        
    </section>
    </>
  )
}

export default SearchCountry