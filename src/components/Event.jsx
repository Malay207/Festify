// import React from 'react'

import "../stylecomponent/event.css"
import Eventcard from "./Eventcard"
import Eventpopupcard from "./Eventpopupcard"
const Event = () => {
  return (
    <>
      <div className="mt-2 ml-2 mb-5 overflow-y-scroll maineventscreen">
        <Eventpopupcard />
        <Eventcard />
      </div>
    </>

  )
}

export default Event