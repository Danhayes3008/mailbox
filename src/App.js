import './App.css';

import Draft from './components/Draft';
import Inbox from './components/Inbox';
import { Messages } from './components/Inbox';
import Junk from './components/Junk';
import Sent from './components/Sent';

var sessionString = sessionStorage.getItem('test');
var inbox = JSON.parse(sessionString);
console.log(inbox)

function App() {
  return (
    
    <div className="App">
      <div className='boxes'>
        <Inbox />
        <Sent />
        <Draft />
        <Junk />
      </div>
      <Messages />
    </div>
  );
}

export default App;
