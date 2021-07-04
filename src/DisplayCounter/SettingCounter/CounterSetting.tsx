import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import s from './CounterSetting.module.css'
import { InputSetting } from './InputS/InputSetting';


type CounterType = {
    counterStart:number
    counterMax:number
    setCounterStart:(max:number) => void
    setCounterMax:(start:number ) => void
    error: string | null
    setError: (text:string) => void
}




export const CounterSetting = (props:CounterType) => {
    const start = 0
    const max = 0
    const [startValue, setStartValue] = useState(start)
    const [maxValue, setMaxValue] = useState(max)

    const reset = () => {
        props.setCounterMax(maxValue - 1)
        props.setCounterStart(startValue - 1)
        props.setError('')
    }
    const onChagneValueInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value + 1)
         if ( startValue  <= 0){
             props.setError('Error Start Value')
         }
         if (maxValue >= 0) {
             props.setError('Enter set Start Value')
         }
    }
    const disReset = maxValue <= startValue ? true : false
    const onChagneValueInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value + 1)
        if ( maxValue  <= 0){
            props.setError('Error Max Value')
        }
        if (maxValue >= 0) {
            props.setError('Enter set Max Value')
        }
    }

    return (
        <div className={s.Counter}>
            <InputSetting disReset={disReset} reset={reset} onChagneValueInputMax={onChagneValueInputMax} onChagneValueInputStart={onChagneValueInputStart} startValue={startValue} maxValue={maxValue}/>
        </div>
    );
};

