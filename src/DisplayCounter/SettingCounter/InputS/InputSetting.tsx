import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { ButtonCounter } from '../../Button/ButtonCounter';
import s from './Input.module.css'

type InputSetType = {
    onChagneValueInputMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChagneValueInputStart: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    startValue:number
    reset: () => void
    disReset:boolean
}
export const InputSetting = (props:InputSetType) => {

    const btnInc = s.btnInc
    return (
        <div className={s.inputBlock}>
         <div className={s.inputLeadBlock}>
             <div>MAX VALUE: <input className={s.input} type={'number'} onChange={props.onChagneValueInputMax}  max={props.maxValue} /></div>
             <div>START VALUE: <input className={s.input} onChange={props.onChagneValueInputStart} type={'number'}   max={props.startValue} /></div>
         </div>
          <ButtonCounter btn={btnInc} dis={props.disReset}  nameBtn={'reset'}  click={props.reset} />
        </div>
    );
};
