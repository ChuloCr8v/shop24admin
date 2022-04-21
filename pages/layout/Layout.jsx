
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'
import {useState, useEffect} from 'react'

const Layout = ({ children }) => {
  
  const [showSideBar, setShowSideBar] = useState(false)
  
  return (
    <div>
     <NavBar setShowSideBar={setShowSideBar} showSideBar={showSideBar} /> 
     <SideBar showSideBar={showSideBar} />
        {children}
    </div>
  );
};

export default Layout;
