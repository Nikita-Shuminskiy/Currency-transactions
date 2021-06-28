import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { ButtonCounter } from '../../Button/ButtonCounter';
import s from './Input.module.css'

type InputSetType = {
    counterMin:number
    counterStart:number
    onChagneValueInputStart:(e:ChangeEvent<HTMLInputElement>) => void
    onChagneValueInputMax:(e:ChangeEvent<HTMLInputElement>) => void
}
export const InputSetting = (props:InputSetType) => {
  /*  let start = 0
    let max = 50
    const [startValue, setStartValue] = useState(start)*/
    const reset = () => {
        alert(props.counterStart)
    }
    return (
        <div className={s.inputBlock}>
          <span>START VALUE:</span> <input className={s.input} onChange={props.onChagneValueInputStart} type="number"    max={props.counterStart} />
           <span>MAX VALUE:</span> <input className={s.input} type="number" onChange={props.onChagneValueInputMax}  max={props.counterStart} />
          <ButtonCounter nameBtn={'reset'}  click={reset} />
        </div>
    );
};
