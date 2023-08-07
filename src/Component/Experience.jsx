/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Experience({children, title}) {
  return (
    <div>
        <p className="text-3xl font-medium mb-3">{title}</p>
          {children}
    </div>
  )
}
