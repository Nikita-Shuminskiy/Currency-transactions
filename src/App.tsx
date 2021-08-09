import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Counter } from './DisplayCounter/Counter';
import { InputSetting } from './DisplayCounter/InputS/InputSetting';
import { AppRootStateType } from './Redux/ReduxStore';
import { counterStartAC, setCounterMaxAC, setCounterStartAC, setInputMaxtAC, setInputStartAC } from './Redux/CounterReducer'




const App = React.memo(() => {
    const { counterStart, counterMax, startValueInput, maxValueInput } = useSelector<AppRootStateType,
        { counterStart:number; counterMax: number, startValueInput: number,maxValueInput:number  }>(state => state.counter)

    const dispatch = useDispatch()

    const [counter, setCounter] = useState<boolean>(true)

    const disReset = maxValueInput < 0 || startValueInput < 0 || startValueInput === maxValueInput || maxValueInput < maxValueInput || maxValueInput < startValueInput

    let disInc = counterMax === counterStart

    const dropping = () => counterMax === counterMax && dispatch(setCounterStartAC(startValueInput))

    const handleClick = () => dispatch(counterStartAC())

    const setBtnCounter = () => {
            dispatch(setCounterMaxAC(maxValueInput))
            dispatch(setCounterStartAC(startValueInput))
            setCounter(true)
    }

    const onChangeValueInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        dispatch(setInputStartAC(+value))
    }

    const onChangeValueInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        dispatch(setInputMaxtAC(+value))
    }

    const settingButton = () => {
        setCounter(!true)
    }

    return (
        <div className="app-block">
            {counter ? <Counter settingButton={settingButton}
                                disInc={disInc}
                                handleClick={handleClick}
                                dropping={dropping}/> :
                <InputSetting
                    startValueInput={startValueInput}
                    disReset={disReset}
                    setBtnCounter={setBtnCounter}
                    maxValueInput={maxValueInput}
                    onChangeValueInputStart={onChangeValueInputStart}
                    onChangeValueInputMax={onChangeValueInputMax}/>}

        </div>
    )
})

export default App
