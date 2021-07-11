import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import './App.css';
import { Counter } from './DisplayCounter/Counter';
import { CounterSetting } from './DisplayCounter/SettingCounter/CounterSetting';

export type AppType = {
    text: string

}

const App = () => {
    const [counterStart, setCounterStart] = useState(
        Number(window.localStorage.getItem('StartValue'))
    )
    const [counterMax, setCounterMax] = useState(
        Number(window.localStorage.getItem('MaxValue'))
    )
    const [error, setError] = useState<string | null>(null)
    const [startValueInput, setStartValueInput] = useState(
        Number(localStorage.getItem('StartValueLocal'))
    )

    const dropping = () => {
        if (counterMax === counterMax) {
            setCounterStart(startValueInput)
        }
        Number(localStorage.removeItem('MaxValue'))
    }
    useEffect( () => {
        window.localStorage.setItem('StartValue',JSON.stringify(counterStart))
    }, [counterStart])
    useEffect( () => {
        window.localStorage.setItem( 'MaxValue',JSON.stringify(counterMax))
    }, [counterMax])

    const handleClick = () => setCounterStart(counterStart + 1)
    let disInc = counterMax === counterStart ? true : false
    return (
        <div className={'App-block'}>
            <Counter disInc={disInc} error={error} counterStart={counterStart} counterMax={counterMax} handleClick={handleClick}
                     dropping={dropping}/>
            <CounterSetting disInc={disInc} setStartValueInput={setStartValueInput} startValueInput={startValueInput} setError={setError} setCounterStart={setCounterStart}
                            setCounterMax={setCounterMax} />
        </div>
    )
}

export default App
