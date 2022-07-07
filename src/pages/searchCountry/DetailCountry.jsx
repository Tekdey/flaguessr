import * as React from 'react'
import * as api from "../../api/country.api"
import * as helper from "../../helper/helper"
import { useNavigate, useParams } from 'react-router-dom'

const DetailCountry = () => {

    const [data, setData] = React.useState([])
    const {name} = useParams()

    const navigate = useNavigate()

    React.useEffect(() => {
        if(name){
            const countryName = helper.refactoreCountryName(name)
            api.getCountriesByName(countryName).then((response) => {
                if(response.status !== 200){
                    return;
                }
                return response.json()
            }).then((data) => {
                return setData(data)
            })
        }
    }, [name])

  return (
    <>
    <button onClick={() => navigate('/country')} type="button" className="m-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Go back</button>
    <div className='flex justify-center items-center w-full h-full'>
        
        {data && data.length === 1 ? (
            <>
                <div className="max-w-sm bg-gray-800 rounded-lg border border-gray-200 shadow-md p-8">
                    <div className="flex flex-col items-center pb-10">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={data[0].flags.png} alt={data[0].name.common} />
                        <h5 className="mb-1 text-xl font-medium text-white ">{data[0].name.common} {data[0].fifa && ( '(' + data[0].fifa + ')')}</h5>
                        <span className="text-sm text-gray-300">Population: {data[0].population}</span>
                        <span className="text-sm text-gray-300 ">Region: {data[0].region}</span>
                        <span className="text-sm text-gray-300">Subregion: {data[0].subregion}</span>
                        <div className="flex mt-4 space-x-3 lg:mt-6">
                            <a target='_blank' rel="noreferrer" href={`https://en.wikipedia.org/wiki/${helper.refactoreCountryName(name)}`} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Learn more</a>
                            <a target='_blank' rel="noreferrer" href={data[0].maps.googleMaps} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">Google Map</a>
                        </div>
                    </div>
                </div>

            </>
        ):(
            <p>Country not found</p>
        )}
    </div>
    </>
  )
}

export default DetailCountry