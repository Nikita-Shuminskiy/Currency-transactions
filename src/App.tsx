import React, {ChangeEvent, ChangeEventHandler, useState } from 'react';
import "./App.css";
import { Counter } from './DisplayCounter/Counter';
import { CounterSetting } from './DisplayCounter/SettingCounter/CounterSetting';


const App = () => {
    let maxCount = 30
    let minCount = 0
    const [counterStart, setCounterStart] = useState(maxCount)
    const [counterMin, setCounterMin] = useState(minCount)

    const onChagneValueInputStart = (e:ChangeEvent<HTMLInputElement>) => {
        if (minCount >= maxCount){
            return  setCounterMin(+e.currentTarget.value + 1 -1 )

        }
    }
    const onChagneValueInputMax = (e:ChangeEvent<HTMLInputElement>) => {
        if (maxCount != minCount){
            return  setCounterStart(+e.currentTarget.value + 1)
        }
    }

    const handleClick = () => {
        if (counterMin <= maxCount){
          return setCounterMin(counterMin + 1)
        }
        setCounterStart(maxCount)
    }
   const dropping = () => {
        if (counterMin === counterStart) {
            setCounterMin(minCount)
        }
    }
    return (
        <div className={'App-block'}>
            <Counter counterStart={counterStart} counterMin={counterMin}  handleClick={handleClick} dropping={dropping}/>
            <CounterSetting onChagneValueInputMax={onChagneValueInputMax} onChagneValueInputStart={onChagneValueInputStart} counterStart={counterStart} counterMin={counterMin}/>
        </div>
    )
}

export default App
