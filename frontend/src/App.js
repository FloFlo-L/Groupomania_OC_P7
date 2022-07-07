import Routes from './components/Routes'
import {UserIdContext} from './context/AppContext'
import { useEffect, useState } from 'react';
import jwtdecode from 'jwt-decode';

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token === null) {
      console.log('No token, no userId');
    } else {
      console.log(token);
      const decodeToken = jwtdecode(token);
      const userToken = decodeToken.userId;
      setUserId(userToken);
      console.log('userId:', userToken);
    }
  }, [userId]);

  return (
    <UserIdContext.Provider value={userId}>
      <Routes />
    </UserIdContext.Provider>
   
  );
}

export default App;

