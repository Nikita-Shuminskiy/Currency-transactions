import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../App.module.css'
import { AppRootStateType } from '../Redux/ReduxStore';
import { ButtonCounter } from './Button/ButtonCounter';
import s from './Counter.module.css'


type CounterType = {
    handleClick: () => void
    dropping: () => void
    settingButton: () => void
}

export const Counter = React.memo((props: CounterType) => {
    const {counterStart, counterMax} = useSelector<AppRootStateType,
        { counterStart: number; counterMax: number }>(state => state.counter)
/*tst*/
    const count = counterMax === counterStart ? s.counterDisplayErr : s.counterDisplay

    const btnInc = counterMax === counterStart ? s.btnIncErr : s.btnInc

    const btnDrop = counterMax === counterStart ? s.btnErrDrop : s.btnDrop

    const disDrop = counterMax !== counterStart

    const disInc = counterMax === counterStart

    return (
        <div className={s.counter}>
            <div className={s.block}>
                <p className={s.counterText}>Counter</p>
                <div>
                    <p className={count}>{counterStart}</p>
                </div>
                <div className={s.buttonCounterAll}>
                    <ButtonCounter nameBtn={'Setting'} btnClass={s.btnSetting} click={props.settingButton}/>
                    <ButtonCounter nameBtn={'Drop'} click={props.dropping} btnClass={btnDrop} disabled={disDrop}/>
                    <ButtonCounter nameBtn={'Inc'} btnClass={btnInc} disabled={disInc} click={props.handleClick}/>
                </div>

            </div>
        </div>
    );
})
