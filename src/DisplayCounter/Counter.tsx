import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../App.css'
import { AppRootStateType } from '../Redux/ReduxStore';
import { ButtonCounter } from './Button/ButtonCounter';


type CounterType = {
    handleClick: () => void
    dropping: () => void
    disInc: boolean
    settingButton: () => void
}

export const Counter = React.memo((props: CounterType) => {
    const {counterStart, counterMax} = useSelector<AppRootStateType,
        { counterStart: number; counterMax: number }>(state => state.counter)



    const count = counterMax === counterStart ? 'counterDisplay' : 'counter'

    const btnInc = counterMax === counterStart ? 'btnIncErr' : 'btnInc'

    const btnDrop = counterMax === counterStart ? 'btnErrDrop' : 'btnDrop'

    const disDrop = counterMax !== counterStart

    return (
        <div className="counter">
            <div className={'block'}>
                <p className={'counter-text'}> Counter Exam Monday</p>
                <div className={count}>
                    <p className={'counterStart'}>{counterStart}</p>
                </div>
                <ButtonCounter nameBtn={'setting'} btnClass={'btnSetting'} click={props.settingButton}/>
                <ButtonCounter nameBtn={'Drop'} click={props.dropping} btnClass={btnDrop} dis={disDrop}/>
                <ButtonCounter nameBtn={'Inc'} btnClass={btnInc} dis={props.disInc} click={props.handleClick}/>

            </div>
        </div>
    );
})
