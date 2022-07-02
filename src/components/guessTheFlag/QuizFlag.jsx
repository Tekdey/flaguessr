import React from 'react'
import propTypes from "prop-types"

const QuizFlag = ({data}) => {
  return (
    <img
        className="object-cover h-100 w-[500px] rounded-md" 
        alt="you need to find it"
        src={data[70]?.flags.png}
      />
  )
}

QuizFlag.propTypes = {
    data: propTypes.array
}


export default QuizFlag