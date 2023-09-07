import { useState } from 'react';

const InputSerch = (props:any)=>{
const [serchText, setSerchText] = useState('');

return(
    <div id='mainBlock'>
        <input value={serchText} onChange={(e)=>{setSerchText(e.target.value)}} placeholder='Search...' id='mainSercInput' />
        <button onClick={()=>props.enterRequest(serchText, props.category, props.sortBy)}>Поиск</button>
    </div>
)
}

export default InputSerch;