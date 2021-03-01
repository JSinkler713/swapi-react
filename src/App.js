import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Starships from './components/Starships'
import SingleStarship from './components/SingleStarship'

function App() {
  // initialize state, set it with the dataType that you will use
  const [data, setData] = useState([])

  useEffect(()=> {
    const getData = async()=> {
      let response = await fetch('https://swapi.dev/api/starships/')
      response = await response.json()
      response = response.results
      console.log(response)
      // setting the array [] of ships as state data
      setData(response)
    }
    getData()
  }, [])
  return (
    <div className="App">
      <Router>
        <header>
          <h1>StarShips</h1>
        </header>
        <>
        <Route exact path='/' render={(props)=> <Starships {...props} data={data} />} />
        <Route path='/starship' render={(props)=> <SingleStarship {...props} />} />
        </>
      </Router>
    </div>
  );
}

export default App;
