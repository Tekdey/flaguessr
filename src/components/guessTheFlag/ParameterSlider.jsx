import React from 'react'
import * as helper from "../../helper/helper"
import propTypes from "prop-types"

const ParameterSlider = ({setTime, children}) => {
  return (
    <div className="flex flex-col items-center w-2/3">
          <label htmlFor="steps-range-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{children}</label>
          <input id="steps-range-1" type="range" min="0.5" max="5" defaultValue="1" step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
           onChange={(event) => setTime((prevState) => ({...prevState, timeProp: event.target.value, timeUI: helper.refactorRangeTimeUi(event.target.value)}))}  />
    </div>
  )
}

ParameterSlider.propTypes = {
  setIsTime: propTypes.func,
  children: propTypes.string,
}

export default ParameterSlider