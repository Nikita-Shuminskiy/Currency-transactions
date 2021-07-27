import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Counter } from './DisplayCounter/Counter';
import { CounterSetting } from './DisplayCounter/SettingCounter/CounterSetting';
import { counterStartAC, setCounterMaxAC, setCounterStartAC, setInputMaxtAC, setInputStartAC } from './Redux/Counter_Reducer';
import { AppRootStateType } from './Redux/Redux_store';


const App = () => {
    const counterStart = useSelector<AppRootStateType, number>(state => state.counter.counterStart)
    const counterMax = useSelector<AppRootStateType, number>(state => state.counter.counterMax)

    const startValueInput = useSelector<AppRootStateType, number>(state => state.counter.startValueInput)
    const maxValueInput = useSelector<AppRootStateType, number>(state => state.counter.maxValueInput)

    const dispatch = useDispatch()

    const [counter, setCounter] = useState<boolean>(true)

    const disReset = maxValueInput < 0 || startValueInput < 0 || startValueInput === maxValueInput

    let disInc = counterMax === counterStart

    const dropping = () => counterMax === counterMax && dispatch(setCounterStartAC(startValueInput))

    const handleClick = () => dispatch(counterStartAC())

    const reset = () => {
        if (maxValueInput <= startValueInput)  return disReset
         else {
            dispatch(setCounterMaxAC(maxValueInput))
            dispatch(setCounterStartAC(startValueInput))
            setCounter(true)
        }
    }

    const onChagneValueInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        dispatch(setInputStartAC(+value))
    }

    const onChagneValueInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        dispatch(setInputMaxtAC(+value))
    }

    const setingButton = () => {
        setCounter(!true)
    }

    return (
        <div className={'App-block'}>
            {counter ? <Counter setingButton={setingButton}
                                disInc={disInc}
                                counterStart={counterStart}
                                counterMax={counterMax}
                                handleClick={handleClick}
                                dropping={dropping}/> :
                <CounterSetting
                    startValueInput={startValueInput}
                    disReset={disReset}
                    reset={reset}
                    maxValueInput={maxValueInput}
                    onChagneValueInputStart={onChagneValueInputStart}
                    onChagneValueInputMax={onChagneValueInputMax}/>}

        </div>
    )
}

export default App
