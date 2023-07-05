import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Dash from '../assets/home.svg'
import Client from '../assets/clients.svg'
import Movie from '../assets/movie.svg'
import Logout from '../assets/logout.svg'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade } from 'react-reveal'

function Movies() {
    const auth = localStorage.getItem('user')

    let navigate = useNavigate()

    const logout =()=>{
        localStorage.removeItem('token')
        navigate('/login')
  }
  useEffect(() => {
    if(!localStorage.getItem('token')){
        navigate('/login')
    }
  }, [])

    const [title, setTitle] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [genre, setGenre] = useState("");
    const [duration, setDuration] = useState("");
    const [release, setRelease] = useState("");
    const [language, setLanguage] = useState("");
    const [image, setImage] = useState("");
    const [trailer, setTrailer] = useState("");
    const [movie, setMovie] = useState("");
    const [error, setError] = useState('')
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = {
        title: title,
        synopsis: synopsis,
        genre: genre,
        duration: duration,
        release: release,
        language: language,
        image: image,
        trailer: trailer,
        movie: movie
      };
      let result = await fetch('http://localhost:5000/rend/api/movies/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        encType: "multipart/form-data",
        body: JSON.stringify(data)
      });

      let value = await result.json();
      console.warn(value);
      if(title|| synopsis|| genre|| duration|| release|| language|| image|| trailer|| movie)
      {
       if(value.success){
          toast.success('Signup successful!');
          navigate('/login');
        }
        else{
          toast.error(value.message);
          setError("Signup failed");
        }
        
      }
      else{
        toast.error('Please fill all fields');
        return false;
      }
    }

  return (
    
    <Container>
        <header>
            <h1>Movies</h1>
            <p>Fill The form below to upload a movie</p>
        </header>
    </Container>
)
}
const Container = styled.div`

header{
    width: 100%;
    padding-top: 2%;
}
h1{
    text-align: center;
    font-size: 60px;
    color: gray;
}

p{
    text-align: center;
    font-size: 20px;
    color: gray;
}
    
`

export default Movies