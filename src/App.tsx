import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import './App.css';
import { Counter } from './DisplayCounter/Counter';
import { CounterSetting } from './DisplayCounter/SettingCounter/CounterSetting';

export type SetTextType = {
    text:string
    error:string
}

const App = () => {
    let maxCount = 0
    let startCount = 0
    const [counterStart, setCounterStart] = useState<number>(maxCount)
    const [counterMax, setCounterMax] = useState(maxCount)
    const [text, setText] = useState<SetTextType>({
        text:'Enter to set',
        error:'error'
    })



    const handleClick = () => setCounterStart(+counterStart + 1)

    const dropping = () => {
        debugger
        if (counterMax === counterStart) {
            setCounterStart(startCount)
        }
    }
    return (
        <div className={'App-block'}>
            <Counter counterStart={counterStart} counterMax={counterMax} handleClick={handleClick} dropping={dropping}/>
            <CounterSetting  setCounterStart={setCounterStart} setCounterMax={setCounterMax} counterStart={counterStart}
                            counterMax={counterMax}/>
        </div>
    )
}

export default App
