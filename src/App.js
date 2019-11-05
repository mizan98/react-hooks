import React, {useState} from 'react'
import './App.css';

function App() {
  const [movies, setMovies] = useState(
    [
      {
        name: "Harry Potter",
        mainActor: "Daniel Radcliffe",
        yearOfRelease: 2002
      },
      {
        name: "Lord Of the Rings",
        mainActor: "Elijah Woods",
        yearOfRelease: 2001
      }
    ]
  )

  const changeMovie = (newName) => {                   //what if i want to change the name of the first arrauy without having to copy all of the array?
    let newState = [...movies]                            //'...' used to repeat previous array witout typing it
    newState[0].name = "Inception"
    setMovies(newState)
  }

  return (
    <div className="App">
      {movies.map( (movie)=> {
        return <h1> Film: {movie.name} released on: {movie.yearOfRelease}</h1>
      })}
      <button onClick={changeMovie}>Change Movie</button>
    </div>
  )
}


export default App;
