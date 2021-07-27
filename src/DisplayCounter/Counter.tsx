import React, { useState } from 'react'
import '../App.css'
import { ButtonCounter } from './Button/ButtonCounter';


type CounterType = {
    handleClick: () => void
    dropping: () => void
    counterMax:number
    counterStart:number
    disInc:boolean
    setingButton: () => void
}

export const Counter: React.FC<CounterType> = (props) => {
    const count = props.counterMax === props.counterStart ? 'counterDisplay' : 'counter'

    const btnInc = props.counterMax === props.counterStart ? 'btnIncErr': 'btnInc'

    const btnDrop = props.counterMax === props.counterStart ? 'btnErrDrop': 'btnDrop'

    const disDrop = props.counterMax !== props.counterStart

    return (
        <div className="Counter">
            <div className={'block'}>
                <p className={'counter-text'} > Counter Exam Monday</p>
                <div className={count}>
                  <p className={'counterStart'} >{props.counterStart}</p>
                </div>
                <ButtonCounter nameBtn={'Setting'} btnClass={'btnSetting'} click={props.setingButton} />
                <ButtonCounter nameBtn={'Drop'} click={props.dropping} btnClass={btnDrop} dis={disDrop}/>
                <ButtonCounter nameBtn={'Inc'} btnClass={btnInc} dis={props.disInc} click={props.handleClick} />

            </div>
        </div>
    );
}

