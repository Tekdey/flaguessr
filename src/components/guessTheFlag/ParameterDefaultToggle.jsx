import React from 'react'
import * as helper from "../../helper/helper"
import propTypes from "prop-types"

const ParameterDefaultToggle = ({setIsFreeMode, children, init}) => {
  return (
    <>
        <span className="m-1 ml-3 text-sm font-medium text-gray-900">{children}</span>
        <label htmlFor="checked-toggle_time-2" className="inline-flex flex-col relative cursor-pointer">
        <input defaultChecked type="checkbox" onChange={() =>{ setIsFreeMode((prevState) => !prevState); init(false)}} id="checked-toggle_time-2" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
    </>
  )
}

ParameterDefaultToggle.propTypes = {
    init: propTypes.func,
    setIsFreeMode: propTypes.func,
    children: propTypes.string,
}

export default ParameterDefaultToggle