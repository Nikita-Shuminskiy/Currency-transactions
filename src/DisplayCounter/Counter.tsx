import React, { useState } from 'react'
import '../App.css'
import { ButtonCounter } from './Button/ButtonCounter';


type CounterType = {
    handleClick: () => void
    dropping: () => void
    counterMax:number
    counterStart:number
}

export const Counter: React.FC<CounterType> = (props) => {
    const count = props.counterMax === props.counterStart ? 'counterDisplay' : 'counter'
    const btnInc = props.counterMax === props.counterStart ? 'btnIncErr': 'btnInc'
    const btnDrop = props.counterMax === props.counterStart ? 'btnErrDrop': 'btnDrop'
    const disDrop = props.counterMax === props.counterStart ? false : true
    const disInc = props.counterMax === props.counterStart ? true : false

    return (
        <div className="Counter">
            <div className={'block'}>
                <p> Counter Exam Monday</p>
                <div className={count}>
                    {props.counterStart}
                </div>
                <ButtonCounter nameBtn={'Drop'} click={props.dropping} btn={btnDrop} dis={disDrop}/>
                <ButtonCounter nameBtn={'Inc'} btn={btnInc} dis={disInc} click={props.handleClick} />
            </div>
        </div>
    );
}

