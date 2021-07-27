import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import s from './CounterSetting.module.css'
import { InputSetting } from './InputS/InputSetting';


type CounterType = {
    maxValueInput: number
    onChagneValueInputStart: (e: ChangeEvent<HTMLInputElement>) => void
    onChagneValueInputMax: (e: ChangeEvent<HTMLInputElement>) => void
    reset: () => void
    disReset: boolean
    startValueInput: number
}


export const CounterSetting = (props: CounterType) => {
    return (
        <div className={s.Counter}>
            <InputSetting disReset={props.disReset}
                          reset={props.reset}
                          onChagneValueInputMax={props.onChagneValueInputMax}
                          onChagneValueInputStart={props.onChagneValueInputStart}
                          startValueInput={props.startValueInput}
                          maxValueInput={props.maxValueInput}/>

        </div>
    );
};

