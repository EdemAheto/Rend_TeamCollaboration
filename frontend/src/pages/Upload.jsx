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

function Upload() {
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
            <h1>Create Movies</h1>
            <p>Fill The form below to upload a movie</p>
        </header>

        <form onClick={handleSubmit}>

          <div className="form-group">
            <div className='section'>
              <label>Title:</label>
              <br />
              <input type="text" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='section'>
              <label>Synopsis:</label>
              <br />
              <input type="text" id="synopsis" placeholder="Synopsis" value={synopsis} onChange={(e) => setSynopsis(e.target.value)}/>
            </div>  
          </div>

          <div className="form-group">
            <div className='section'>
              <label>Genre:</label>
              <br />
              <input type="text" id="genre" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)}/>
            </div>
            <div className='section'>
              <label>Duration:</label>
              <br />
              <input type="text" id="duration" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)}/>
            </div>
          </div>
          <div className="form-group">
            <div className='section'>
              <label>Release:</label>
              <br />
              <input type="text" id="release" placeholder="Release" value={release} onChange={(e) => setRelease(e.target.value)}/>
            </div>
            <div className='section'>
              <label>Language:</label>
              <br />
              <input type="text" id="language" placeholder="Language" value={language} onChange={(e) => setLanguage(e.target.value)}/>
            </div>
          </div>
          <div className="form-group">
            <div className='section'>
              <label>Image:</label>
              <br />
              <input type="text" id="image" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div className='section'>
              <label>Trailer:</label>
              <br />
              <input type="text" id="trailer" placeholder="Trailer" value={trailer} onChange={(e) => setTrailer(e.target.value)}/>
            </div>
          </div>
          <div className="form-group">
            <div className='section'>
              <label>Movie:</label>
              <br />
              <input type="text" id="movie" placeholder="Movie" value={movie} onChange={(e) => setMovie(e.target.value)}/>
            </div>
            <div className='section'>
              <br />
              <input type="submit" value="Submit" id='submit'/>
            </div>
          </div>

        </form>
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
form{
  width: 100%;
}
.form-group{
  display: flex;
  justify-content: space-between;
  padding: 1% 10%;
  width: 100%;
}
input{
  width: 400px;
  padding: 20px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  background: rgba(216, 216, 216, 0.856);
  outline: none;
}
#submit{
  background-color: #FFE6C8;
  color: grey;
  font-weight: bold;
}  
`

export default Upload