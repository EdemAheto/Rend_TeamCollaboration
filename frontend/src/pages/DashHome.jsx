import React, {useState} from 'react'
import styled from 'styled-components'
import Home from '../assets/home.svg'
import UploadLogo from '../assets/movie.svg'
import ReviewLogo from '../assets/clients.svg'
import Logout from '../assets/logout.svg'
import { useNavigate } from 'react-router-dom'
import Movies from './Movies'
import Upload from './Upload'
import Review from './Review'

function DashHome() {

  // const auth = localStorage.getItem('user')
  let navigate = useNavigate()
  const logout =()=>{
    localStorage.removeItem('token')
    navigate('/admin')
  }

  const [activeDiv, setActiveDiv] = useState('movies');

  const handleNavigation = (divId) => {
    setActiveDiv(divId);
  };

  return (
    <Container>
      <div className='navigation'>
            
           <div className='main-navigation'>

            <div className="main-nav-title">

            </div>

              <li onClick={() => handleNavigation('movies')}><img src={Home} alt="" /> Movies</li>
              <li onClick={() => handleNavigation('upload')}><img src={UploadLogo} alt="" /> Upload</li>
              <li onClick={() => handleNavigation('review')}><img src={ReviewLogo} alt="" />Reviews</li>
              <li onClick={logout}><img src={Logout} alt="" /> Logout</li>
           </div>
          
            <div className='page'>
              {activeDiv === 'movies' && (
                  <Movies />
              )}

              {activeDiv === 'upload' && (
                <Upload />
              )}

              {activeDiv === 'review' && (
                <Review />
              )}
            </div>
        
      </div>
    </Container>
  )
}

const Container = styled.div`
.navigation{
  display: flex;
}
.main-navigation{
    width: 30%;
    height: 100vh;
    background: linear-gradient(97.24deg, #FFE6C8 44.37%, rgba(243, 193, 95, 0) 113.02%);
}
.main-nav-title{
  width: 100%;
  height: 25%;
  background: rgb(231, 231, 231);
}
.main-navigation li{
    display: flex;
    padding: 10% 20% 1% 20%;
}
.main-navigation img{
    width: 60px;
    height: 60px;
}
.page{
  width: 70%;
}
`
export default DashHome
