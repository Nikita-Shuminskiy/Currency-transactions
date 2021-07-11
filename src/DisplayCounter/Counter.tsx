import React, { useState } from 'react'
import '../App.css'
import { ButtonCounter } from './Button/ButtonCounter';


type CounterType = {
    handleClick: () => void
    dropping: () => void
    counterMax:number
    counterStart:number
    error:string | null
    disInc:boolean
}

export const Counter: React.FC<CounterType> = (props) => {
    const count = props.counterMax === props.counterStart ? 'counterDisplay' : 'counter'

    const btnInc = props.counterMax === props.counterStart ? 'btnIncErr': 'btnInc'

    const btnDrop = props.counterMax === props.counterStart ? 'btnErrDrop': 'btnDrop'

    const disDrop = props.counterMax === props.counterStart ? false : true



    return (
        <div className="Counter">
            <div className={'block'}>
                <p style={{fontWeight:'bold', color:'yellow'}} > Counter Exam Monday</p>
                <div className={count}>
                    {props.error ? <div className="error-message">{props.error}</div> :  <p className={'counterStart'} >{props.counterStart}</p>}
                </div>
                <ButtonCounter nameBtn={'Drop'} click={props.dropping} btn={btnDrop} dis={disDrop}/>
                <ButtonCounter nameBtn={'Inc'} btn={btnInc} dis={props.disInc ? true : false } click={props.handleClick} />
            </div>
        </div>
    );
}

