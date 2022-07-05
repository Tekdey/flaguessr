import React from 'react'
import propTypes from "prop-types"

const AnswerBadge = ({notif}) => {
  return (
    <>
    {notif === "success" ?
    <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 p-5 rounded-full dark:bg-green-200 dark:text-green-900">Nice !</span>
    :
    <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 p-5 rounded-full dark:bg-red-200 dark:text-red-900">Bad !</span>
    }
    </>
  )
}

AnswerBadge.propTypes = {
    notif: propTypes.string,
}

export default AnswerBadge