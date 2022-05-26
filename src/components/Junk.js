import React from 'react'

const unreadJunkMessages = ['bluepills', 'fnsdaoifn', 'sfnoujsdfsed', 'fdweif', 'bluepills', 'fnsdaoifn',
 'sfnoujsdfsed', 'fdweif', 'bluepills', 'fnsdaoifn', 'sfnoujsdfsed', 'fdweif',];

function Junk() {
  return (
    <div>
      <span>Junk </span>
      {unreadJunkMessages.length > 0 &&
        <span>
          {unreadJunkMessages.length}
        </span>
      }
    </div>
  )
}

export default Junk