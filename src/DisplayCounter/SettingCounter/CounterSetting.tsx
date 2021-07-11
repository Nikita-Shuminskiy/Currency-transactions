import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import s from './CounterSetting.module.css'
import { InputSetting } from './InputS/InputSetting';


type CounterType = {
    setCounterStart: (max: number) => void
    setCounterMax: (start: number) => void
    setError: (text: string) => void
    startValueInput:number
    setStartValueInput:(start:number)=> void
    disInc:boolean
}


export const CounterSetting = (props: CounterType) => {

    console.log(props.startValueInput)
    const [maxValue, setMaxValue] = useState(
        Number(localStorage.getItem('MaxtValueLocal'))
    )

    const reset = () => {
        if (maxValue <= props.startValueInput) {
            return disReset
        } else if (props.startValueInput <= -1) {
            return disReset
        } else {
            props.setCounterMax(maxValue)
            props.setCounterStart(props.startValueInput)
            props.setError('')

        }
    }

    useEffect(() => {
        localStorage.setItem('StartValueLocal', JSON.stringify(props.startValueInput))
    }, [props.startValueInput])
    useEffect(() => {
        localStorage.setItem('MaxtValueLocal', JSON.stringify(maxValue))
    }, [maxValue])


    const onChagneValueInputStart = (e: ChangeEvent<HTMLInputElement>) => {

        if (props.startValueInput > 0) {
            props.setStartValueInput(+e.currentTarget.value)
            props.setError('Enter set Start Value')
        } else if (props.startValueInput <= 0) {
            props.setError('Error Value')
            props.setStartValueInput(+e.currentTarget.value)
        }
    }
    let disReset1 = props.startValueInput < 0 ? true : false
    const disReset = maxValue < 0 ? true : disReset1

    const onChagneValueInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        if (maxValue <= 0) {
            props.setError('Error Max Value')
            setMaxValue(+e.currentTarget.value)
        } else if (maxValue > 0) {
            props.setError('Enter set Max Value')
            setMaxValue(+e.currentTarget.value)
        }
    }

    return (
        <div className={s.Counter}>
            <InputSetting disReset={disReset} reset={reset} onChagneValueInputMax={onChagneValueInputMax}
                          onChagneValueInputStart={onChagneValueInputStart} startValue={props.startValueInput}
                          maxValue={maxValue}/>
        </div>
    );
};

