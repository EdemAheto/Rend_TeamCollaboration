import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { PuffLoader } from 'react-spinners';
import Cinema from '../assets/Cinema3.jpg'

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
`
export default AdminPage
