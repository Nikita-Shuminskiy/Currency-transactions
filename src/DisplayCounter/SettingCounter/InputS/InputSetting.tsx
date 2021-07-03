import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { ButtonCounter } from '../../Button/ButtonCounter';
import s from './Input.module.css'

type InputSetType = {
    counterMax:number
    counterStart:number
    setCounterMax: (max:number) => void
    setCounterStart: (start:number) => void
}
export const InputSetting = (props:InputSetType) => {
    const start = 0
    const max = 0

    const [startValue, setStartValue] = useState(start)
    const [maxValue, setMaxValue] = useState(max)

    const reset = () => {
        props.setCounterMax(maxValue - 1)
        props.setCounterStart(startValue - 1)
    }
    const btnInc = s.btnInc
    const onChagneValueInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value + 1)
    }
    const onChagneValueInputMax = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(+e.currentTarget.value + 1)
    return (
        <div className={s.inputBlock}>
         <div className={s.inputLeadBlock}>
             <div>MAX VALUE: <input className={s.input} type={'number'} onChange={onChagneValueInputMax}  max={maxValue} /></div>
             <div>START VALUE: <input className={s.input} onChange={onChagneValueInputStart} type={'number'}   max={startValue} /></div>
         </div>
          <ButtonCounter btn={btnInc}  nameBtn={'reset'}  click={reset} />
        </div>
    );
};
