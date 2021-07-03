import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { SetTextType } from '../../App';
import s from './CounterSetting.module.css'
import { InputSetting } from './InputS/InputSetting';


type CounterType = {
    counterStart:number
    counterMax:number
    setCounterStart:(max:number) => void
    setCounterMax:(start:number ) => void
}
export const CounterSetting = (props:CounterType) => {
    return (
        <div className={s.Counter}>
            <InputSetting  setCounterStart={props.setCounterStart} setCounterMax={props.setCounterMax}
                counterStart={props.counterStart}
                          counterMax={props.counterMax}/>
        </div>
    );
};

