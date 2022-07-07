import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState(false)

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-5 rounded bg-gray-800 w-full">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <div className="flex md:order-2">
        <button onClick={() => setMenu((currentState) => !currentState)} data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </div>
      <div className="hidden justify-between items-center w-full md:flex md:order-1" id="mobile-menu-3">
        <ul className="flex mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <Link to='/' className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 " aria-current="page">Home</Link>
          </li>
          <li>
            <Link to='/country' className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 md:border-0  md:p-0 md:hover:text-white  md:hover:bg-transparent ">Countries</Link>
          </li>
          <li>
            <Link to='/guesstheflag' className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100  md:border-0 md:p-0 md:hover:text-white md:hover:bg-transparent ">GuessTheFlag</Link>
          </li>
        </ul>
        
        <ul className="flex mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
              <a  target='_blank' href='https://github.com/Tekdey' rel="noreferrer" className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:border-0  md:p-0 md:hover:text-white  md:hover:bg-transparent ">Github</a>
          </li>
          <li>
            <a  target='_blank' href='https://twitter.com/BardiNathan' rel="noreferrer" className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:border-0  md:p-0 md:hover:text-white  md:hover:bg-transparent ">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
    {menu && <ul className=" z-20 absolute w-full left-0 bg-gray-800  md:hidden flex flex-col mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to='/' className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-blue-500 md:border-0  md:p-0 md:hover:text-white  md:hover:bg-transparent " aria-current="page">Home</Link>
            </li>
            <li>
              <Link to='/country' className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-blue-500 md:border-0  md:p-0 md:hover:text-white  md:hover:bg-transparent ">Countries</Link>
            </li>
            <li>
              <Link to='/guesstheflag' className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-blue-500 md:border-0  md:p-0 md:hover:text-white  md:hover:bg-transparent ">GuessTheFlag</Link>
            </li> 
            <li>
              <a  target='_blank' href='/guesstheflag' className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-blue-500 md:border-0  md:p-0 md:hover:text-white  md:hover:bg-transparent ">Github</a>
            </li>
            <li>
              <a  target='_blank' href='/guesstheflag' className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-blue-500 md:border-0  md:p-0 md:hover:text-white  md:hover:bg-transparent ">Twitter</a>
            </li>
        </ul>}
  </nav>
  )
}



export default Navbar