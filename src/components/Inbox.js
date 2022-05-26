import React from 'react'

const unreadMessages = [
  {sender: 'lizzy@gmail.com', title: 'React', date: '22/05/2022'},
  {sender: 'lizzy@gmail.com', title: 'Re:React', date: '23/05/2022'},
  {sender: 'lizzy@gmail.com', title: 'Re:Re:React', date: '23/05/2022'}
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
      <table>
        <thead>
          <tr>
            <th>Sender</th>
            <th>title</th>
            <th>date</th>
          </tr>
        </thead>
          {unreadMessages.map(({sender, title, date}) => (
            <><tr>
              <td key={sender}><input type="checkbox" name="check" /> {sender}</td>
              <td key={title}>{title}</td>
              <td key={date}>{date}</td>
            </tr></>
          ))}
      </table>
    </div>
  )
}


export default Inbox