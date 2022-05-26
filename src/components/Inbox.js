import React from 'react'

const unreadMessages = [
  {title: 'React'},
  {title: 'Re:React'},
  {title: 'Re:Re:React'}
]

function Inbox() {
  return (
    <div>
      <span>Inbox </span>
      {unreadMessages.length > 0 &&
        <span>
          {unreadMessages.length}
        </span>
      }
    </div>
  )
}


export const Messages = () => {
  return (
    <div className='messages'>
      {unreadMessages.map(({title}) => (
        <p key={title}>{title}</p>
      ))}
    </div>
  )
}


export default Inbox