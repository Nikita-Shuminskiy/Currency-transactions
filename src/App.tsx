import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import './App.css';
import { Counter } from './DisplayCounter/Counter';
import { CounterSetting } from './DisplayCounter/SettingCounter/CounterSetting';

export type AppType = {
    text:string
}

const App = () => {
    let maxCount = 0
    let startCount = 0
    const [counterStart, setCounterStart] = useState<number>(maxCount)
    const [counterMax, setCounterMax] = useState(maxCount)
    const [error, setError] = useState<string | null>(null)
    const handleClick = () => setCounterStart(+counterStart + 1)

    const dropping = () => {
        if (counterMax === counterStart) {
            setCounterStart(startCount)
        }
    }
    return (
        <div className={'App-block'}>
            <Counter error={error} counterStart={counterStart} counterMax={counterMax} handleClick={handleClick} dropping={dropping}/>
            <CounterSetting setError={setError} error={error}  setCounterStart={setCounterStart} setCounterMax={setCounterMax} counterStart={counterStart}
                            counterMax={counterMax}/>
        </div>
    )
}

export default App
