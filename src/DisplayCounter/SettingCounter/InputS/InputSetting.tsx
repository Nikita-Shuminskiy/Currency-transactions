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
             <span>MAX VALUE:<input className={s.input} type={'number'} onChange={props.onChagneValueInputMax} min={-1} value={props.maxValue} /></span> <br/>
             <span style={{marginRight: '10px'}} >START VALUE:<input className={s.input} onChange={props.onChagneValueInputStart} type={'number'}  min={-1} value={props.startValue} /></span>
         </div>
          <ButtonCounter btn={btnInc} dis={props.disReset}  nameBtn={'reset'}  click={props.reset} />
        </div>
    );
};
