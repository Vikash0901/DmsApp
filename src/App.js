import React, { useState ,useEffect} from 'react';

import Login from './components/Login/Login';
import { MainPage } from './components/Home/MainPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedUserLoginInformation = localStorage.getItem('isLoggedIn');

    if(storedUserLoginInformation === '1'){
      setIsLoggedIn(true);
    }
  },[]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn','1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
        {!isLoggedIn && <Login isAuthenticated={isLoggedIn} onLogin={loginHandler} />}
        {isLoggedIn && <MainPage isAuthenticated={isLoggedIn} onLogout={logoutHandler} />}
    </React.Fragment>
  );
}

export default App;
