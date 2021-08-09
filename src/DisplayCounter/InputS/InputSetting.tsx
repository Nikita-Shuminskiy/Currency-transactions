import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { ButtonCounter } from '../Button/ButtonCounter';
import s from './Input.module.css'

type InputSetType = {
    onChangeValueInputMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeValueInputStart: (e: ChangeEvent<HTMLInputElement>) => void
    maxValueInput: number
    startValueInput: number
    setBtnCounter: () => void
    disReset: boolean
}
export const InputSetting = React.memo((props: InputSetType) => {
    const className = props.maxValueInput <= -1 || props.maxValueInput === props.startValueInput ? s.errInput : s.input;

    return (
       <div className={s.counterSetting} > <div className={s.inputBlock}>
            <div className={s.inputLeadBlock}>
                <span>MAX VALUE:<input
                    className={className}
                    type={'number'} onChange={props.onChangeValueInputMax} min={-1} value={props.maxValueInput}/></span>
                <br/>
                <span className={s.startTextInput}>START VALUE:<input
                    className={props.startValueInput <= -1 || props.startValueInput === props.maxValueInput ? s.errInput : s.input}
                    onChange={props.onChangeValueInputStart} type={'number'} min={-1}
                    value={props.startValueInput}/></span>
            </div>
            <ButtonCounter btnClass={s.btnInc} dis={props.disReset} nameBtn={'SET'} click={props.setBtnCounter}/>
        </div> </div>
    );
})
