import React from 'react';
import s from './Input.module.css'

const InputSetting = () => {
    return (
        <div className={s.inputBlock}>
         <div>  <span>MAX VALUE:</span> <input type="number" min={0} max={10} /></div>
           <div><span>MIN-VALUE:</span> <input type="number" max={10} min={0}/></div>
        </div>
    );
};

export default InputSetting;