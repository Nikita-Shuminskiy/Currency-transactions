import React, { useState } from 'react'
import '../App.css'
import { ButtonCounter } from './Button/ButtonCounter';


type CounterType = {
    handleClick: () => void
    dropping: () => void
    counterMin:number
    counterStart:number
}

export const Counter: React.FC<CounterType> = (props) => {
    const count = props.counterMin == props.counterStart ? 'counterDisplay' : 'counter'
    const btnInc = props.counterMin == props.counterStart ? 'btnIncErr': 'btnInc'
    const btnDrop = props.counterMin == props.counterStart ? 'btnErrDrop': 'btnDrop'
    const disDrop = props.counterMin == props.counterStart ? false : true
    const disInc = props.counterMin == props.counterStart ? true : false
    return (
        <div className="Counter">
            <div className={'block'}>
                <p> Counter Exam Monday</p>
                <div className={count}>
                    {props.counterMin}
                </div>
                <ButtonCounter nameBtn={'Drop'} click={props.dropping} btn={btnDrop} dis={disDrop}/>
                <ButtonCounter nameBtn={'Inc'} btn={btnInc} dis={disInc} click={props.handleClick} />
            </div>
        </div>
    );
}

