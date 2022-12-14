import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import { Navigation } from '../MainHeader/Navigation';
import { Sidebar } from '../Sidebar';
import { Dashboard } from '../../Pages/Dashboard';
import { Home } from '../../Pages/Home';
import { IssuedDocs } from '../../Pages/IssuedDocs';
import { MyProfile } from '../../Pages/MyProfile';
import { SearchDocs } from '../../Pages/SearchDocs';
import { Drive } from '../../Pages/Drive';

export const MainPage = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navigation isLoggedIn={props.isAuthenticated} onSignOut={props.onLogout} onToggle={toggle} isOpen={isOpen} />
      <Sidebar
        isLoggedIn={props.isAuthenticated}
        onLogOut={props.onLogout}
        isOpen={isOpen}>
        {/* <div style={{marginTop:'5rem'}}> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/issueddocs' element={<IssuedDocs />} />
          <Route path='/drive' element={<Drive />} />
          <Route path='/profile' element={<MyProfile />} />
          <Route path='/search' element={<SearchDocs />} />
        </Routes>
        {/* </div> */}
      </Sidebar>
    </div>
  )
}

