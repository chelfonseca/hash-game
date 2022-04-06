import React from 'react';
import './index.css'
import { useState } from 'react';


export default function Square(){
    
const [state, setState] = useState(null);

    return (
        <button className='square' onClick ={() => { setState('X')}}>
        {state}
        </button>
    )
}