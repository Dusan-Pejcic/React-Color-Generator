import { useState } from 'react';
/* import rgbToHex from './utils'; */

const SingleColor = ({rgb, weight, type, index, hexColor}) => { // rgb, weight, type coming from an array returned by values.js 
  const [alert, setAlert] = useState(false);
  const background = rgb.join(','); // this is returned as a single string
  const hexValue = `#${hexColor}`
  /* let colorValue = rgbToHex(...rgb);
  console.log(...rgb); */
  console.log(type);
  return ( 
    <article className={`color`} style={{backgroundColor: `rgb(${background}) `, color: `${type === 'shade' ? 'white': null}`}} onClick={()=> {
      setAlert(true);
      navigator.clipboard.writeText(hexValue);
      setTimeout(()=> {setAlert(false)}, 1000);
    }}>
      <p style={{color: `${(type === 'shade' || type === 'base') ? 'white': 'black'}`}}>{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
   );
}
 
export default SingleColor;