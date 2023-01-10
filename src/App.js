import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from './components/Character'






const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  

  useEffect(() => {
    axios
      .get(' https://swapi.dev/api/people/')
      .then(res => {
        console.log("Success", res.data);
        setData([...res.data]);
      })
      .catch(err => console.log('Failed', err))

  },[]);
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
     {data.map(char => {
      return <Characters character={char} key={char.name} />
    })};
    </div>
  );
}

export default App;
