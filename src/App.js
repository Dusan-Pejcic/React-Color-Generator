import { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js'; // https://github.com/noeldelgado/values.js

function App() {

  const [color, setColor] = useState([]);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();

    try{
      let colors = new Values(color).all(10); // a values.js function to return tints and shades for a passed hexadecimal value.
      setList(colors);
      setError(false);
      setInputValue('');
    }
    catch(err){ // values.j throws an error if a passed string is not a valid hexadecimal value.
      console.log(err.message);
      setError(true);
    }
  }

  const handleOnChange = (e)=> {
    setColor( e.target.value);
    setInputValue(e.target.value);
  }

  return (
    <>
    <section className="container">
      <h3>color generator</h3>

      <form onSubmit={ handleSubmit }>
        <input className={ error ? 'error' :null} type="text" value={color} onChange={handleOnChange} value={inputValue} placeholder='enter hex code'/>
        <button className="btn">submit</button>
      </form>

      { error && <p>not a valid hexadecimal value</p>}

    </section>

    <section className="colors">
      { list.map((color, index)=> {
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
      })}
    </section>
    </>
  );
}

export default App;
