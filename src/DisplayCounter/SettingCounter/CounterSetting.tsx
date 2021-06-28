import React, { ChangeEvent, ChangeEventHandler } from 'react';
import s from './CounterSetting.module.css'
import { InputSetting } from './InputS/InputSetting';


type CounterType = {
    counterStart:number
    counterMin:number
    onChagneValueInputStart:(e:ChangeEvent<HTMLInputElement>) => void
    onChagneValueInputMax:(e:ChangeEvent<HTMLInputElement>) => void
}
export const CounterSetting = (props:CounterType) => {
    return (
        <div className={s.Counter}>
            <InputSetting onChagneValueInputMax={props.onChagneValueInputMax}
                          onChagneValueInputStart={props.onChagneValueInputStart}
                          counterStart={props.counterStart}
                          counterMin={props.counterMin}/>

        </div>
    );
};

