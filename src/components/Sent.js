import React from 'react'

const sentMessages = [];

function Sent() {
  return (
    <div>
      <span>Sent </span>
      {sentMessages.length > 0 &&
        <span>
          {sentMessages.length}
        </span>
      }
    </div>
  )
}

export default Sent