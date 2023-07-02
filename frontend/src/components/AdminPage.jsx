import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { PuffLoader } from 'react-spinners';
import Cinema from '../assets/Cinema3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash, faUser, faSignOutAlt, faEdit, faCog, faUsers} from "@fortawesome/free-solid-svg-icons";
import Typed from 'react-typed'
import { Link } from 'react-router-dom';
import { Email } from '@mui/icons-material';

const fields = [
  {
    label: 'Username:',
    name: 'email',
    type: 'text',
    placeholder: 'Enter your email',
  },
  {
    label: 'Password:',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
  }
]

function AdminPage() {
  const [loading, setLoading]=useState();

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <Container>
      {
        loading ?
        <div className='loader'>
          <PuffLoader 
            color={"#FFD39F"} 
            loading={loading} size={200} 
            className='pulseloader'
          />
        </div>
        :
        <header>
          <img src={Cinema} alt=""  className='background'/>
          <div className='main-background'>
            <div className='logo'>
              <Link to='/'><FontAwesomeIcon icon={faVideoSlash} className='icon'/></Link>
              <p>RendShow</p>
            </div>
            <main>
              <div className='title'>
                <Typed strings= {["RendShow"]} typeSpeed={80} backSpeed={80} loop className='typed'/>
                <p>
                  In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non. Suspendisse sodales nulla sit amet sem 
                  condimentum, ac euismod nibh elementum. Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in posuere
                </p>
              </div>
              <div className='main-login'>
                <div className='login-form'>
                    <h1>Login</h1>
                    <form action="">
                      {
                        fields.map((each, index)=>(
                          <div className='field' key={index}>
                            <label className='label'>{each.label}</label>
                            <br />
                            <input type={each.type} placeholder={each.placeholder} name={each.name} className='input'/>
                          </div>
                        ))
                      }
                      <button className='login-button'>Login</button>
                    </form>
                    <div>
                      
                    </div>
                </div>
              </div>
            </main>
          </div>
        </header>
      }
    </Container>
  )
}

const Container = styled.div`
.loader{
  padding: 15% 42%;
}
.background{
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.main-background{
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.56);
}
.logo{
  display: flex;
  padding: 1%;
}
.icon{
  width: 40px;
  height: 40px;
  color: gold;
}
.logo p{
  font-size: 30px;
  color: white;
}
main{
  display: flex;
}
.title{
  padding: 8% 5%;
  width: 40%;
}
.typed{
  font-size: 90px;
  background: linear-gradient(97.24deg, #FFE6C8 44.37%, rgba(243, 193, 95, 0) 113.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.title p{
  color: white;
}
.main-login{
  width: 60%;
  padding-left: 15%;
}
.login-form{
  background-color: rgba(255, 255, 255, 0.448);
  width: 70%;
  height: 70vh;
  border-radius: 10px;
  padding-top: 3%;
}
.login-form h1{
  text-align: center;
  text-decoration: underline;
  font-family: sans-serif;
  font-weight: 700;
  color: #FFE6C8;
}
form{
  padding: 5% 8%;
}
.field{
  padding: 2% 0%;
}
.label{
  font-size: 17px;
  pading: 5% 0%;
  color: white;
}
.input{
  width: 400px;
  height: 50px;
  padding-left: 2%;
  border: 2px solid grey;
  border-radius: 10px;
}
.login-button{
  width: 400px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  background-color: #FFD39F;
  font-family: sans-serif;
}
`
export default AdminPage
