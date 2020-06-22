import React from "react"

const Grid = () => {
  return (
    <div className="absolute top-0 px-3 md:px-8 w-full left-0 right-0 opacity-25 z-0 pointer-events-none">
      <div className="grid grid-cols-12 col-gap-2 md:col-gap-4">
        <div className="col-start-1 col-end-2 bg-red-200 h-screen"></div>
        <div className="col-start-2 col-end-3 bg-red-200 h-screen"></div>
        <div className="col-start-3 col-end-4 bg-red-200 h-screen"></div>
        <div className="col-start-4 col-end-5 bg-red-200 h-screen"></div>
        <div className="col-start-5 col-end-6 bg-red-200 h-screen"></div>
        <div className="col-start-6 col-end-7 bg-red-200 h-screen"></div>
        <div className="col-start-7 col-end-8 bg-red-200 h-screen"></div>
        <div className="col-start-8 col-end-9 bg-red-200 h-screen"></div>
        <div className="col-start-9 col-end-10 bg-red-200 h-screen"></div>
        <div className="col-start-10 col-end-11 bg-red-200 h-screen"></div>
        <div className="col-start-11 col-end-12 bg-red-200 h-screen"></div>
        <div className="col-start-12 col-end-13 bg-red-200 h-screen"></div>
      </div>
    </div>
  )
}

export default Grid
