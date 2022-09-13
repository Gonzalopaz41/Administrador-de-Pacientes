import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-center p-3 uppercase font-bold mb-3 rounded-md  ">
        <p className="text-white">{mensaje}</p>
    </div>
  )
}

export default Error