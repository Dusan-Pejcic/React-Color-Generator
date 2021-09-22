import { useState } from 'react';

import Values from 'values.js'; // https://github.com/noeldelgado/values.js

function App() {

  const [color, setColor] = useState([]);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e)=> {
    e.preventDefault();

    try{
      let colors = new Values(color).all(10); // a values.js function to return tints and shades for a passed hexadecimal value.
      setError(false);
    }
    catch(err){ // values.j throws an error if a passed string is not a valid hexadecimal value.
      console.log(err.message);
      setError(true);
    }
  }

  return (
    <>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={ handleSubmit }>
        <input className={ error ? 'error' :null} type="text" value={color} onChange={(e) => setColor( e.target.value)} placeholder='#f15025'/>
        <button className="btn">submit</button>
      </form>
      { error && <p>type a valid hexadecimal value</p>}
    </section>
    <section className="colors">
      <h4>list goes here</h4>
    </section>
    </>
  );
}

export default App;
