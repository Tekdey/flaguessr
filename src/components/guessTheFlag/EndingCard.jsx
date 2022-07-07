import React from 'react'
import { useNavigate } from 'react-router-dom'

const EndingCard = ({score}) => {

    const navigate = useNavigate()

  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className="p-6 max-w-sm  rounded-lg border shadow-md bg-gray-800 border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">Finished, hands up!</h5>
            <p className="mb-3 font-normal text-gray-400">Congratulation your score : <span className='font-bold text-white'>{score}</span></p>
            <button onClick={() => navigate('/guesstheflag')} type="button" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Home
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
    </div>
  )
}

export default EndingCard