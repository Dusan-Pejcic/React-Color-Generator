import { useState } from 'react';
const SingleColor = ({rgb, weight, type, index}) => { // rgb, weight, type coming from an array returned by values.js 
  const [alert, setAlert] = useState(false);
  const background = rgb.join(',');
  console.log(background);
  return ( 
    <article className={`color`} style={{backgroundColor: `rgb(${background}) `, color: `${type === 'shade' ? 'white': null}`}}>whatever</article>
   );
}
 
export default SingleColor;