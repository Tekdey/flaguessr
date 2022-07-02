import React from 'react'
import propTypes from "prop-types"
 
const QuizButton = ({data, children, index}) => {

  return (
    <button className='py-3 px-6 w-full h-full sm:h-auto sm:w-1/2 border text-white'
      style={{backgroundColor: `#${index + 4}${index}${index + 6}${index}z${index}`}}>
        {children}
    </button>
  )
}

QuizButton.propTypes = {
    data: propTypes.array,
    children: propTypes.string,
    index: propTypes.number,
}


export default QuizButton