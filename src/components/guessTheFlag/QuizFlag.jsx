import React from 'react'
import propTypes from "prop-types"

const QuizFlag = ({flag}) => {
  return (
    <img
        className="object-cover h-[150px] w-[300px] sm:h-[300px] sm:w-[500px] rounded-md border" 
        alt="you need to find it"
        src={flag}
      />
  )
}

QuizFlag.propTypes = {
  flag: propTypes.string
}


export default QuizFlag