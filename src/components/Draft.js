import React from 'react'

const draftMessages = ['cv', 'application'];

function Draft() {
  return (
    <div>
      <span>Draft </span>
      {draftMessages.length > 0 &&
        <span>
          {draftMessages.length}
        </span>
      }
    </div>
  )
}

export default Draft